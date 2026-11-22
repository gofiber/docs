---
slug: fiber-v3-static-symlinks-root-confinement
title: "Your Symlinks Return 404 on v3.7.0: Root Confinement in the Static Middleware"
authors: [fiber-team]
tags: [fiber, v3, static, symlinks, deployment, security, middleware, go]
description: "Since v3.7.0, Fiber's static middleware stops following symbolic links that leave its root, and absolute links even when they point inside. Which links break, how to find them before your users do, how to fix each kind without switching the protection off, and the places the new rule does not reach."
---

A shop runs on a single VM. Every deploy unpacks the build into a new directory
under `/srv/shop/releases`, flips the `current` link to it, and reloads the
service. Product photos and avatars live in `/srv/shop/shared/uploads` so they
survive releases, and the deploy script links that directory into each release
as `public/uploads`. The Fiber app serves `/srv/shop/current/public` with the
static middleware and has done so without trouble for a year.

Then the app moves to [Fiber
v3.7.0](https://github.com/gofiber/fiber/releases/tag/v3.7.0). The tests pass,
the deploy goes out, and every avatar on the site turns into a broken image. The
CSS still loads, the home page still loads, and the logs show nothing but a
stream of `404`s for `/uploads/...`. A few minutes later someone notices that
the Apple touch icon and the web fonts are gone too.

The app's code did not change. Fiber v3.7.0 ships fasthttp v1.78.0, and since
fasthttp v1.77.0 the file server behind the [static
middleware](/middleware/static) resolves every path with Go's `os.Root`. A file
root on disk is now confined: a symbolic link that leads out of it is treated
like a missing file. The same release added an opt-out,
`AllowSymlinksOutsideRoot`
([#4803](https://github.com/gofiber/fiber/pull/4803)). The [static
documentation](/middleware/static#config) states the rule in one paragraph; this
post is about what it does to a real deployment. It shows exactly which links
are refused, a startup check that lists them before users find them, how to fix
each kind without the opt-out, and the paths that the new rule does not cover at
all. Everything was built and tested against Fiber v3.7.0 with Go 1.26.11. The
option needs Fiber v3.7.0 or later, which needs Go 1.26.

<!-- truncate -->

## Which Links Still Work

Here is the rule with the cases I tested. A link is followed only if `os.Root`
can resolve it without ever stepping outside the root directory.

A relative link that stays inside works as before:
`favicon.ico -> img/favicon.ico` is fine. A relative link that leaves the root
returns `404`, whether it points at a sibling directory or at the shared volume
next to the releases.

The first surprise is that an absolute link is refused even when its target is
inside the root. The link `apple-touch-icon.png` points at
`/srv/shop/releases/20261120-1/public/img/icon-180.png`, a file that the
middleware would happily serve under its own path, and the link to it still
gives a `404`. `os.Root` does not compare the target with the root after the
fact; it refuses to follow an absolute path at all.

The second surprise is a relative link that leaves the root and comes back.
`logo.svg -> ../public/img/logo.svg`, created from inside `public`, steps up
into the release directory and then down into `public` again. The final file
is inside the root, but the path went outside on the way, and that is enough
for a `404`. Build tools that compute link targets from a parent directory
produce this shape.

What keeps working is the part that most deploy setups depend on. The root
itself may be a symbolic link, or contain one, as `/srv/shop/current/public`
does through `current`. The file server also opens the root again for each
operation instead of holding it open, so when the deploy flips `current` to a
new release, the app follows. In my test, a file that had already been served
switched to the new release between 10 and 15 seconds after the flip, because
the file server caches what it has recently served (small files in memory)
until `CacheDuration`, 10 seconds by default, runs out. Files that were not in
the cache switched right away.

A Kubernetes ConfigMap mounted as a volume works too. The kubelet lays out the
keys as relative links into a `..data` link, which points at a timestamped
directory in the same mount, and all of that stays inside the root if you
serve the mount itself. I rebuilt that layout by hand and the middleware
served it without the opt-out.

One more detail matters when you go looking for the problem. With `Browse`
enabled, directory listings still show refused links. Clicking one gives the
same `404`, which makes the listing look broken rather than the link.

## Find Them Before Your Users Do

The failure mode is quiet. A refused link produces the same `404` as a file that
never existed (for an index file reached through such a link, fasthttp answers
`403`, which the middleware treats the same way). The middleware passes the
request on to the next handler, and nothing is logged. You find out from a
support ticket or a dashboard of broken images. I would rather find out when the
process starts.

The check below walks the root and asks `os.Root` about every link it finds.
Because it uses `os.Root` too, it does not have to guess from the link text
which links will resolve. A link that `os.Root` cannot follow but a plain
`os.Stat` can is exactly a link that worked on v3.6 and fails on v3.7:

```go title="links.go"
package main

import (
    "io/fs"
    "os"
    "path/filepath"
)

// refusedLink is a symbolic link under a static root that the static
// middleware no longer follows since Fiber v3.7.0.
type refusedLink struct {
    Path   string // slash-separated, relative to the root
    Target string // the link text, as written
    Reason string
}

// refusedLinks walks dir and returns every symbolic link that resolves
// on disk but not inside dir. It asks os.Root, the same mechanism the
// middleware uses, instead of guessing from the link text.
func refusedLinks(dir string) ([]refusedLink, error) {
    root, err := os.OpenRoot(dir)
    if err != nil {
        return nil, err
    }
    defer root.Close()

    var refused []refusedLink
    visit := func(name string, d fs.DirEntry, err error) error {
        if err != nil {
            return err
        }
        if d.Type()&fs.ModeSymlink == 0 {
            return nil
        }
        if _, err := root.Stat(name); err == nil {
            return nil // stays inside, so the middleware follows it
        }
        target, err := root.Readlink(name)
        if err != nil {
            return err
        }
        reason := "leaves the root"
        switch {
        case !existsOnDisk(filepath.Join(dir, filepath.FromSlash(name))):
            reason = "target does not exist"
        case filepath.IsAbs(target):
            reason = "absolute link"
        }
        refused = append(refused, refusedLink{
            Path: name, Target: target, Reason: reason,
        })
        return nil
    }
    err = fs.WalkDir(root.FS(), ".", visit)
    return refused, err
}

func existsOnDisk(path string) bool {
    _, err := os.Stat(path) // follows links anywhere, like v3.6 did
    return err == nil
}
```

`fs.WalkDir` does not descend into linked directories, which is what we want
here: a linked directory is reported once, as a link, and its contents are
not walked twice. The flip side is that links nested inside a linked
directory are not checked. For a typical build output that does not matter,
but keep it in mind if your tree is mostly links. The walk also stops at the
first directory it cannot read, which is the behavior I want for a check that
can block a start. `Root.Readlink` needs Go 1.25, so Fiber's own Go 1.26
requirement covers it.

### Wiring It Into the App

The app reads two directories from the environment: the release's public
directory and the shared uploads volume. It logs every refused link at
startup and can be told to refuse to start, which is what I would set in
staging and CI:

```go title="main.go"
package main

import (
    "errors"
    "log"
    "os"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/static"
)

type config struct {
    PublicDir   string // the release, usually reached through a "current" link
    UploadsDir  string // a shared volume that outlives every release
    StrictLinks bool   // refuse to start if PublicDir has links that will 404
}

func configFromEnv() (config, error) {
    cfg := config{
        PublicDir:   os.Getenv("PUBLIC_DIR"),
        UploadsDir:  os.Getenv("UPLOADS_DIR"),
        StrictLinks: os.Getenv("STRICT_LINKS") == "1",
    }
    if cfg.PublicDir == "" || cfg.UploadsDir == "" {
        return config{}, errors.New("PUBLIC_DIR and UPLOADS_DIR must be set")
    }
    return cfg, nil
}

func newApp(cfg config) *fiber.App {
    app := fiber.New()

    app.Get("/healthz", func(c fiber.Ctx) error {
        return c.SendString("ok")
    })

    // The uploads volume gets a mount of its own instead of a link
    // inside the release. Register it before the catch-all mount.
    app.Use("/uploads", static.New(cfg.UploadsDir, static.Config{
        MaxAge: 3600,
    }))
    app.Use("/", static.New(cfg.PublicDir, static.Config{
        MaxAge: 300,
    }))

    return app
}

func main() {
    cfg, err := configFromEnv()
    if err != nil {
        log.Fatal(err)
    }

    refused, err := refusedLinks(cfg.PublicDir)
    if err != nil {
        log.Fatal(err)
    }
    for _, l := range refused {
        log.Printf("static: %s -> %s is not served: %s", l.Path, l.Target, l.Reason)
    }
    if cfg.StrictLinks && len(refused) > 0 {
        log.Fatalf("static: %d refused links under %s", len(refused), cfg.PublicDir)
    }

    log.Fatal(newApp(cfg).Listen(":3000"))
}
```

The configuration check has a second reason. v3.7.0 also changed what happens
when the root is an empty string: `static.New("")` without an `FS` now panics
at startup with `static: root must name a directory or file on disk; use "."
for the working directory`. Before, an unset environment variable quietly
meant the filesystem root, served without any confinement. A panic is the
better outcome, but a clear error from your own config code is better still.

The check runs once, at startup. The file server follows a flipped `current`
link without a restart, but the check does not see the new release until the
process starts again. If your deploys flip the link without restarting, run
the check in the deploy script or in CI instead, as the test at the end of the
post does. I only check `PublicDir`; the uploads volume holds files that users
sent, and nothing there should be a link at all.

### What the Shop Had

Started against the release from the introduction, the app printed this before
the Fiber banner:

<!-- markdownlint-disable MD013 -->

```text
static: apple-touch-icon.png -> /srv/shop/releases/20261120-1/public/img/icon-180.png is not served: absolute link
static: fonts -> ../../../shared/fonts is not served: leaves the root
static: logo.svg -> ../public/img/logo.svg is not served: leaves the root
static: uploads -> /srv/shop/shared/uploads is not served: absolute link
```

<!-- markdownlint-enable MD013 -->

Each of the four was a `404` in production, for a slightly different reason.
`favicon.ico -> img/favicon.ico` is not on the list because it stays inside.

## Fixing Each Kind

The tempting fix is one line, `AllowSymlinksOutsideRoot: true`, and it does
bring all four files back. I tried it, and every request in the list above
returned `200` again. I would still not start there, for reasons the next
section explains. Each of the four links has a fix that keeps the
confinement.

### A Shared Directory Gets Its Own Mount

The uploads link exists only because the app used to have one static mount
for everything. Give the shared volume a mount of its own, as `newApp` does,
and the link is no longer needed. Delete it from the deploy script. Keep the
`/uploads` mount before the catch-all one. If the order were reversed and a
release still carried the old link, the catch-all mount would refuse it and
pass the request on, and things would keep working only because the refusal
happens to fall through.

A separate mount also says what the setup really is. User uploads and
release assets deserve different caching, and now they get it: the uploads
mount sends `Cache-Control: public, max-age=3600` and the release mount
`public, max-age=300`. If you later want headers such as
`Content-Disposition` or a stricter content type policy for user files only,
there is a place to put them.

### Links Inside the Release Become Relative

`apple-touch-icon.png` and `logo.svg` both point at files inside the release;
they just say so in a way `os.Root` will not follow. Rewrite them as plain
relative links from the directory the link lives in. Do it in the build step
that creates them, here run in the build output before it is shipped, or the
next release brings the absolute versions back:

```bash
cd build/public
ln -sfn img/icon-180.png apple-touch-icon.png
ln -sfn img/logo.svg logo.svg
```

With GNU coreutils, `ln -sr` computes the relative path for you from an
absolute target. In a build script that is the least error-prone way to keep
links inside.

### Files From Outside Get Copied at Build Time

The fonts come from a shared design system directory on the host. That is a
dependency of the release, and a release that depends on something outside
itself is harder to reason about than one that does not: rolling back to last
week's release would still serve this week's fonts. Copy the files into the
release when you build it, following links as you copy:

```bash
rm build/public/fonts
cp -RL /srv/shop/shared/fonts build/public/fonts
```

In a container image the same idea applies: copy the real files into the
image instead of baking in links to paths that only exist on the build
machine.

### The Result

After those three changes, applied to the release on the server for this
test, the startup check printed nothing, the test below passed against the
real release, and every asset was back:

```text
/                          200
/css/app.css               200
/favicon.ico               200
/logo.svg                  200
/apple-touch-icon.png      200
/fonts/inter.woff2         200
/uploads/avatars/42.png    200
/healthz                   200
```

With `STRICT_LINKS=1` and the old uploads link put back, the process exits
before it binds the port:

```text
static: uploads -> /srv/shop/shared/uploads is not served: absolute link
static: 1 refused links under /srv/shop/current/public
```

## When to Use AllowSymlinksOutsideRoot

Some trees are made of links by design. Build systems that assemble their
output as a forest of absolute links into a cache, or a setup where a static
root deliberately points into another volume through many links, would need
dozens of mounts or a copy step that defeats the point. For those,
`AllowSymlinksOutsideRoot: true` restores the old behavior for that one mount:

```go
app.Use("/", static.New("./dist", static.Config{
    AllowSymlinksOutsideRoot: true,
}))
```

Before you set it, ask who can create links in that tree. Path traversal
through `..` in the URL is still blocked either way; the router and the
middleware clean the request path before any file is opened. The opt-out is
about links that already exist on disk. If only your build pipeline writes
into the directory, the risk is small. If anything that handles user input
can write there, such as a feature that unpacks an uploaded theme or archive
into a public directory, one crafted link turns into a read of any file the
process can open. That is the case the new default protects against, and it
is easy to add months after somebody flipped the option for unrelated reasons.
If you do set it, set it on the narrowest mount you can and leave a comment
that explains why. Also note what the static documentation says about
`Compress` with linked directories: the compressed copy of a file reached
through a linked directory is written into that directory, which puts it
outside your release and does not work on a read-only volume.

## Where the Rule Does Not Reach

Confinement applies to a directory root on disk. Three common setups bypass
it, and it is worth knowing which ones you have.

### An FS You Pass In

With the `FS` option, the middleware hands every open to your file system,
and the option has no effect. That makes sense for `embed.FS`, which has no
links. It is a real gap with `os.DirFS`, the setup the static documentation
shows for serving a directory through `FS`. `os.DirFS` follows links wherever
they lead. In my test, all four refused links from the shop came back with
`200` the moment I switched the mount to `FS: os.DirFS(dir)`.

Go 1.24 added a confined alternative, `os.Root.FS`. Mounting
`static.New("", static.Config{FS: root.FS()})` after an `os.OpenRoot(dir)`
refused all four links again. There is a trade-off, though: `os.Root` holds
the directory open, so it keeps serving the release it was opened on. When I
flipped `current` to a new release, this mount served the old one until the
process restarted, long after the default mount had followed. For a
directory that never moves, `root.FS()` is fine. For the `current` pattern,
stay with a plain path.

### c.SendFile

[`c.SendFile`](/api/ctx#sendfile) without an `FS` treats its argument as a
path on the whole filesystem, so there is no root to confine to. A handler that
sends `"/srv/shop/current/public/" + name` followed the absolute uploads link
in my test and returned the avatar. If such a handler builds paths from
request input, give it a confined file system and pass a relative name:

```go
root, err := os.OpenRoot("/srv/shop/current/public")
if err != nil {
    log.Fatal(err)
}
app.Get("/download/*", func(c fiber.Ctx) error {
    return c.SendFile(c.Params("*"), fiber.SendFile{FS: root.FS()})
})
```

With that change the same request for the uploads link returned `404`. This
`root` is pinned to one directory as well.

### A File Root

A root that names a single file, such as `static.New("./public/index.html")`
for a SPA fallback, is not confined. The middleware turns the option on
internally because the compressed copies of that file live next to it,
outside the "root" that a file would form.

## Details That Bite

### Updating Dependencies on v3.6.1

The new behavior comes from fasthttp, not from Fiber's own code. If you are
still on Fiber v3.6.1 and run `go get -u ./...`, or a bot bumps fasthttp for
you, you get fasthttp v1.77.0 or later and the confinement with it. I built a
small test server against v3.6.1 with fasthttp v1.78.0, and every link that
v3.7.0 refuses, the absolute one pointing inside included, returned `404`
there too. But v3.6.1 has no `AllowSymlinksOutsideRoot` to turn it back off.
If a dependency update broke your assets on v3.6, moving to v3.7.0 is the way
to get the option, not pinning fasthttp back.

### A 404 That Passes Through

Because a refused link falls through to the next handler like a missing file,
what the client gets depends on what comes next. If a SPA fallback or a
catch-all route sits behind the static mount, a refused link might not even be a
`404`. It might be your `index.html` with a `200`, served where a font was
expected. In the browser that shows up as a font that fails to decode, and
nothing in that error points at a symbolic link. A `NotFoundHandler` in the
static config takes over instead of the next handler; logging the path there is
a cheap way to spot refused links that the startup check could not see.

### Keep the Toolchain Patched

The confinement is only as good as `os.Root`. Go fixed a bug in `os.Root` on
Unix where a path ending in a slash could follow a link outside the root
([GO-2026-4970](https://pkg.go.dev/vuln/GO-2026-4970), fixed in Go 1.26.5). In
a few attempts with trailing slashes I could not get an escape through the
static middleware built with Go 1.26.0, but I would not lean on that. Fiber's
`go.mod` only asks for Go 1.26.0, so nothing forces you onto a patched release;
build with a current 1.26 patch release.

## Pin It Down in a Test

Two tests cover the design, and a third runs in CI against the real build
output. The first builds a tree with one link of each kind and checks the
reasons. The second sends requests through `app.Test` and confirms that the
uploads mount serves what the link no longer can:

```go title="links_test.go"
package main

import (
    "io"
    "net/http/httptest"
    "os"
    "path/filepath"
    "reflect"
    "testing"

    "github.com/gofiber/fiber/v3"
)

// tree builds a release and a shared directory next to it, with one
// link of every kind, and returns both paths.
func tree(t *testing.T) (public, shared string) {
    t.Helper()
    base := t.TempDir()
    public = filepath.Join(base, "release", "public")
    shared = filepath.Join(base, "shared")
    for _, dir := range []string{
        filepath.Join(public, "img"),
        filepath.Join(shared, "uploads"),
    } {
        if err := os.MkdirAll(dir, 0o755); err != nil {
            t.Fatal(err)
        }
    }
    files := map[string]string{
        filepath.Join(public, "img", "icon.png"):  "icon",
        filepath.Join(shared, "uploads", "a.png"): "avatar",
    }
    for path, body := range files {
        if err := os.WriteFile(path, []byte(body), 0o644); err != nil {
            t.Fatal(err)
        }
    }
    links := map[string]string{
        "inside.png":   "img/icon.png",
        "detour.png":   "../public/img/icon.png",
        "absolute.png": filepath.Join(public, "img", "icon.png"),
        "uploads":      filepath.Join(shared, "uploads"),
        "gone.png":     "img/missing.png",
    }
    for name, target := range links {
        if err := os.Symlink(target, filepath.Join(public, name)); err != nil {
            t.Fatal(err)
        }
    }
    return public, shared
}

func TestRefusedLinks(t *testing.T) {
    public, _ := tree(t)

    got, err := refusedLinks(public)
    if err != nil {
        t.Fatal(err)
    }
    reasons := map[string]string{}
    for _, l := range got {
        reasons[l.Path] = l.Reason
    }
    want := map[string]string{
        "absolute.png": "absolute link",
        "detour.png":   "leaves the root",
        "gone.png":     "target does not exist",
        "uploads":      "absolute link",
    }
    if !reflect.DeepEqual(reasons, want) {
        t.Fatalf("got %v\nwant %v", reasons, want)
    }
}

func TestServing(t *testing.T) {
    public, shared := tree(t)
    app := newApp(config{
        PublicDir:  public,
        UploadsDir: filepath.Join(shared, "uploads"),
    })

    for path, want := range map[string]int{
        "/inside.png":    fiber.StatusOK,
        "/detour.png":    fiber.StatusNotFound,
        "/absolute.png":  fiber.StatusNotFound,
        "/uploads/a.png": fiber.StatusOK, // served by its own mount
    } {
        resp, err := app.Test(httptest.NewRequest(fiber.MethodGet, path, nil))
        if err != nil {
            t.Fatal(err)
        }
        _, _ = io.Copy(io.Discard, resp.Body)
        resp.Body.Close()
        if resp.StatusCode != want {
            t.Errorf("%s: status %d, want %d", path, resp.StatusCode, want)
        }
    }
}

// TestReleaseLinks runs against a real build output in CI:
//
//  PUBLIC_DIR=./dist go test -run TestReleaseLinks
func TestReleaseLinks(t *testing.T) {
    dir := os.Getenv("PUBLIC_DIR")
    if dir == "" {
        t.Skip("PUBLIC_DIR not set")
    }
    refused, err := refusedLinks(dir)
    if err != nil {
        t.Fatal(err)
    }
    for _, l := range refused {
        t.Errorf("%s -> %s: %s", l.Path, l.Target, l.Reason)
    }
}
```

`TestServing` is the one that catches a refactor. If somebody removes the
`/uploads` mount because "the link handles it", the avatar request fails
here instead of in production. A dangling link counts as refused too; it was
a `404` before v3.7.0 as well, but a build output with dangling links is
worth failing on anyway. The tests create symbolic links, which on Windows
needs Developer Mode or elevated rights, so run them on the platform you
deploy to.

To try the whole thing, put the three files into an empty directory and pin
the versions:

```bash
go mod init example.com/shop
go get github.com/gofiber/fiber/v3@v3.7.0
go test ./...
PUBLIC_DIR=/srv/shop/current/public UPLOADS_DIR=/srv/shop/shared/uploads \
  go run .
```

## Wrapping Up

Since v3.7.0, a static root on disk is a boundary, and links that cross it
fail as quietly as missing files. Ask `os.Root` about your links at startup
or in CI, and fix them at their source: shared data gets a mount, links
inside the release become relative, outside files are copied in. I would keep
`AllowSymlinksOutsideRoot` for trees where nobody but the build can create a
link, and check whether your `FS` and `SendFile` code is confined at all.

## Internal References

- [Static Middleware: Config](/middleware/static#config) and
  [Serving files using os.DirFS](/middleware/static#serving-files-using-osdirfs)
- [Ctx: SendFile](/api/ctx#sendfile)
- [What's New in v3](/whats_new)
- [Serve Static Files with Fiber v3](/blog/static-server-with-fiber-v3)
- [Your Gateway Broke on v3.5.0: The Proxy Middleware's New SSRF Policy](/blog/fiber-v3-proxy-ssrf-policy)
- [Fiber v3.7.0 release (AllowSymlinksOutsideRoot, fasthttp v1.78.0)](https://github.com/gofiber/fiber/releases/tag/v3.7.0)
- [Bump fasthttp to v1.77.0 and add AllowSymlinksOutsideRoot (#4803)](https://github.com/gofiber/fiber/pull/4803)
- [Go vulnerability GO-2026-4970 (os.Root and trailing slashes)](https://pkg.go.dev/vuln/GO-2026-4970)
