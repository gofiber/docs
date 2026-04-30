---
slug: fiber-v3-recipes
title: The Recipes Cookbook
authors: [fiber-team]
tags: [fiber, v3, recipes, examples, cookbook, go]
description: "70+ ready-to-run examples covering auth, databases, deployment, Docker, and more  -  the fastest way to learn Fiber by doing."
---

Documentation tells you what an API does. Blog posts explain the why. But when you need to build something real  -  authentication with JWT, deployment to AWS, a WebSocket chat, a CRUD app with Postgres  -  what you really want is working code you can copy and adapt.

That is what the Fiber Recipes repository is. Over 70 complete, runnable example projects covering everything from "Hello World" to clean architecture with Docker, OAuth2, and Kubernetes. Every recipe is a self-contained Go project with its own `go.mod`, `main.go`, and README.

<!-- truncate -->

## Where to Find Them

The recipes live in two places:

- **Browse online**: [docs.gofiber.io/recipes](https://docs.gofiber.io/recipes/)  -  searchable, categorized, with full READMEs
- **Clone and run**: [github.com/gofiber/recipes](https://github.com/gofiber/recipes)  -  `git clone`, `cd` into a recipe, `go run .`

## Recipes by Category

### Authentication

| Recipe | What It Shows |
|--------|---------------|
| [auth-jwt](/recipes/auth-jwt) | Simple JWT authentication |
| [auth-docker-postgres-jwt](/recipes/auth-docker-postgres-jwt) | JWT + Docker + Postgres  -  full stack |
| [firebase-auth](/recipes/firebase-auth) | Firebase authentication integration |
| [oauth2](/recipes/oauth2) | GitHub OAuth2 flow |
| [oauth2-google](/recipes/oauth2-google) | Google OAuth2 flow |
| [todo-app-with-auth-gorm](/recipes/todo-app-with-auth-gorm) | Todo app with auth and GORM |

If you need authentication in your Fiber app, start with `auth-jwt` for the simplest case or `auth-docker-postgres-jwt` for a production-like setup.

### Databases

| Recipe | What It Shows |
|--------|---------------|
| [gorm](/recipes/gorm) | GORM with SQLite |
| [gorm-postgres](/recipes/gorm-postgres) | GORM with PostgreSQL |
| [gorm-mysql](/recipes/gorm-mysql) | GORM with MySQL |
| [mongodb](/recipes/mongodb) | MongoDB driver |
| [ent-mysql](/recipes/ent-mysql) | Ent ORM with MySQL |
| [sqlc](/recipes/sqlc) | Type-safe SQL with sqlc |
| [sqlboiler](/recipes/sqlboiler) | SQLBoiler ORM |
| [postgresql](/recipes/postgresql) | Raw PostgreSQL driver |
| [mysql](/recipes/mysql) | Raw MySQL driver |
| [neo4j](/recipes/neo4j) | Neo4j graph database |
| [memgraph](/recipes/memgraph) | Memgraph graph database |

### Deployment

| Recipe | What It Shows |
|--------|---------------|
| [docker-nginx-loadbalancer](/recipes/docker-nginx-loadbalancer) | Docker + Nginx load balancing |
| [docker-mariadb-clean-arch](/recipes/docker-mariadb-clean-arch) | Dockerized MariaDB with Clean Architecture |
| [k8s](/recipes/k8s) | Kubernetes deployment |
| [aws-eb](/recipes/aws-eb) | AWS Elastic Beanstalk |
| [aws-sam-container](/recipes/aws-sam-container) | AWS SAM containerized |
| [cloud-run](/recipes/cloud-run) | Google Cloud Run |
| [heroku](/recipes/heroku) | Heroku deployment |
| [vercel](/recipes/vercel) | Vercel deployment |
| [seenode](/recipes/seenode) | Seenode cloud platform |
| [cloudflare-workers](/recipes/cloudflare-workers) | Cloudflare Container Workers |

### Real-Time

| Recipe | What It Shows |
|--------|---------------|
| [websocket](/recipes/websocket) | Basic WebSocket communication |
| [websocket-chat](/recipes/websocket-chat) | Real-time chat app |
| [socketio](/recipes/socketio) | Socket.io chatroom |
| [sse](/recipes/sse) | Server-Sent Events |

### Architecture Patterns

| Recipe | What It Shows |
|--------|---------------|
| [clean-architecture](/recipes/clean-architecture) | Clean Architecture in Go |
| [clean-code](/recipes/clean-code) | Clean Code patterns |
| [hexagonal](/recipes/hexagonal) | Hexagonal Architecture with MongoDB |

### Security

| Recipe | What It Shows |
|--------|---------------|
| [csrf](/recipes/csrf) | CSRF protection |
| [csrf-with-session](/recipes/csrf-with-session) | CSRF + session management |
| [https-tls](/recipes/https-tls) | HTTPS with TLS |
| [https-pkcs12-tls](/recipes/https-pkcs12-tls) | HTTPS with PKCS12 certificates |
| [autocert](/recipes/autocert) | Automatic TLS certificate management |

## How to Use a Recipe

Every recipe follows the same pattern:

```bash
# Clone the recipes repository
git clone https://github.com/gofiber/recipes.git
cd recipes

# Pick a recipe
cd auth-jwt

# Read the README
cat README.md

# Run it
go run .
```

Most recipes start a server on `:3000`. Some require Docker for databases  -  the README tells you what you need.

## Building on Recipes

Recipes are starting points, not finished applications. The typical workflow:

1. Find a recipe that matches your use case
2. Copy it into your project (or use it as reference)
3. Adapt the code to your needs
4. Add production concerns (error handling, logging, config)

The `clean-architecture` and `hexagonal` recipes are especially useful as project templates  -  they show how to structure a larger Fiber application with layers, interfaces, and dependency injection.

## Contributing Recipes

If you have built something interesting with Fiber, the community would benefit from seeing it. The recipes repository accepts contributions following the existing pattern: one directory per recipe, a `go.mod`, a `main.go`, and a `README.md` that explains what the recipe demonstrates.

## Internal References

- [Recipes Documentation](/recipes/)
- [Recipes Repository](https://github.com/gofiber/recipes)
- [Awesome Fiber](https://github.com/gofiber/awesome-fiber)
