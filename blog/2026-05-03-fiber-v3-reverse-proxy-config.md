---
slug: fiber-v3-reverse-proxy-config
title: Reverse Proxy Setup
authors: [fiber-team]
tags: [fiber, v3, reverse-proxy, nginx, traefik, deployment, go]
description: "The three settings that break everything when you deploy Fiber behind Nginx or Traefik  -  wrong IPs, broken rate limiting, and HTTPS detection failures."
---

You deploy your Fiber app behind Nginx. Everything works  -  until you check the logs. Every request comes from `127.0.0.1`. Your rate limiter thinks all traffic is from one user. Your HTTPS redirect loop crashes the browser. And your geo-IP middleware thinks every visitor is in the same data center as your server.

The problem is three settings you did not configure. Fiber, by default, does not trust proxy headers  -  and it should not. But when you deploy behind a reverse proxy, you need to explicitly tell Fiber which headers to read and which proxies to trust.

<!-- truncate -->

## The Three Settings

Every Fiber app behind a reverse proxy needs exactly three configuration options:

```go
app := fiber.New(fiber.Config{
    TrustProxy:  true,                           // 1. Enable proxy trust
    ProxyHeader: fiber.HeaderXForwardedFor,       // 2. Which header has the real IP
    TrustProxyConfig: fiber.TrustProxyConfig{     // 3. Which proxies to trust
        Loopback: true,
    },
})
```

Without these, `c.IP()` returns the proxy's IP address, not the client's. With them configured wrong, an attacker can forge any IP address they want.

## Why Fiber Ignores Proxy Headers by Default

When Fiber receives a request, `c.IP()` returns the remote address of the TCP connection. If the connection comes from Nginx on the same machine, that IP is `127.0.0.1`.

Reverse proxies add headers like `X-Forwarded-For` to carry the real client IP. But Fiber ignores these headers unless you enable `TrustProxy`. This is correct behavior  -  if Fiber blindly trusted `X-Forwarded-For`, any client could set the header directly and claim to be any IP address.

The trust model is: "I will read the real IP from a header, but only if the request came from a proxy I explicitly trust."

## Setting 1: TrustProxy

```go
TrustProxy: true,
```

This is the switch that enables proxy header reading. Without it, the other settings do nothing. But this alone is not enough  -  you also need to tell Fiber which header and which proxies.

## Setting 2: ProxyHeader

Different proxies use different headers:

| Proxy | Header | Fiber Constant |
|-------|--------|----------------|
| Nginx, HAProxy | `X-Forwarded-For` | `fiber.HeaderXForwardedFor` |
| Cloudflare | `CF-Connecting-IP` | `"CF-Connecting-IP"` |
| Fastly | `Fastly-Client-IP` | `"Fastly-Client-IP"` |
| Generic | `X-Real-IP` | `"X-Real-IP"` |

The most common choice is `X-Forwarded-For`, but check your proxy's documentation. Using the wrong header means `c.IP()` returns an empty string or an incorrect value.

```go
ProxyHeader: fiber.HeaderXForwardedFor,
```

## Setting 3: TrustProxyConfig

This is where most people get it wrong. You need to specify which IPs are allowed to set the proxy header:

```go
TrustProxyConfig: fiber.TrustProxyConfig{
    // Specific IPs or CIDR ranges
    Proxies: []string{
        "10.10.0.58",
        "192.168.0.0/24",
    },
},
```

Or use convenience flags:

```go
TrustProxyConfig: fiber.TrustProxyConfig{
    Loopback:  true,  // 127.0.0.0/8, ::1/128
    Private:   true,  // 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
    LinkLocal: true,  // 169.254.0.0/16, fe80::/10
},
```

**Use `Loopback: true`** when the proxy is on the same machine. **Use `Private: true`** when the proxy is on your internal network. **Use specific IPs** when you know the exact proxy addresses and want maximum security.

### What Happens When You Skip This

If you set `TrustProxy: true` without configuring `TrustProxyConfig`, Fiber trusts nobody  -  and `c.IP()` still returns the TCP source address. The setting only works when both sides are configured.

### What Happens When You Trust Everyone

If you somehow trusted all addresses, any client could set `X-Forwarded-For: 1.2.3.4` and your app would believe them. This breaks:

- **Rate limiting**: An attacker rotates fake IPs to bypass limits
- **IP-based access control**: Attackers spoof allowed IPs
- **Audit logs**: Every logged IP is fake
- **Geo-IP**: Attackers appear to be from any country

## Real-World Configurations

### Nginx on the Same Machine

The simplest case: Nginx and Fiber on the same server.

**Nginx config:**
```nginx
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Fiber config:**
```go
app := fiber.New(fiber.Config{
    TrustProxy:  true,
    ProxyHeader: fiber.HeaderXForwardedFor,
    TrustProxyConfig: fiber.TrustProxyConfig{
        Loopback: true,
    },
})
```

### Traefik in Docker

Traefik typically runs in the same Docker network:

```go
app := fiber.New(fiber.Config{
    TrustProxy:  true,
    ProxyHeader: fiber.HeaderXForwardedFor,
    TrustProxyConfig: fiber.TrustProxyConfig{
        Private: true, // Docker networks use private IPs
    },
})
```

### Cloudflare → Nginx → Fiber

When you have multiple proxies in a chain, each one appends to `X-Forwarded-For`. The header might look like: `203.0.113.50, 198.51.100.178, 127.0.0.1`.

Fiber reads the rightmost untrusted IP. With `Loopback: true`, it skips `127.0.0.1` (Nginx) and returns the next one. But the Cloudflare IP (`198.51.100.178`) needs to be trusted too.

For Cloudflare, use `CF-Connecting-IP` instead  -  it is always the real client IP regardless of proxy chain:

```go
app := fiber.New(fiber.Config{
    TrustProxy:  true,
    ProxyHeader: "CF-Connecting-IP",
    TrustProxyConfig: fiber.TrustProxyConfig{
        Loopback: true,
    },
})
```

## Detecting HTTPS Behind a Proxy

When Nginx terminates TLS, Fiber's connection is plain HTTP. `c.Protocol()` returns `"http"` even though the client used HTTPS. This breaks CSRF (which checks the Referer scheme) and redirect logic.

The fix is the `X-Forwarded-Proto` header. Nginx sets it (see the config above), and Fiber reads it automatically when `TrustProxy` is enabled. No additional configuration needed  -  `c.Protocol()` will return `"https"` when the proxy says so.

## A Debug Endpoint

When setting up, add a temporary debug endpoint to verify everything works:

```go
app.Get("/debug/proxy", func(c fiber.Ctx) error {
    return c.JSON(fiber.Map{
        "c.IP()":           c.IP(),
        "c.IPs()":          c.IPs(),
        "c.Protocol()":     c.Protocol(),
        "IsProxyTrusted":   c.IsProxyTrusted(),
        "X-Forwarded-For":  c.Get("X-Forwarded-For"),
        "X-Forwarded-Proto": c.Get("X-Forwarded-Proto"),
    })
})
```

Hit this endpoint and verify that `c.IP()` shows the real client IP and `c.Protocol()` shows `https`. Remove the endpoint before deploying to production.

## Internal References

- [Reverse Proxy Guide](/guide/reverse-proxy)
- [App Configuration](/api/app)
- [Ctx IP Method](/api/ctx#ip)
