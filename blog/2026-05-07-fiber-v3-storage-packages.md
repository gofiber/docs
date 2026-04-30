---
slug: fiber-v3-storage-packages
title: Storage Packages
authors: [fiber-team]
tags: [fiber, v3, storage, redis, postgres, sqlite, database, go]
description: "One interface, 30+ backends  -  how Fiber's storage packages let you swap databases without changing a single line of middleware code."
---

Every Fiber middleware that needs to persist data  -  sessions, rate limiter counters, cache entries, CSRF tokens  -  uses the same `Storage` interface. That means you can swap from in-memory storage to Redis to Postgres to DynamoDB by changing one line of configuration. Your middleware code stays exactly the same.

Most developers discover this the hard way: they build with the default in-memory storage, deploy to production, and realize their rate limiter resets on every restart and their sessions vanish during rolling deployments. The fix is not a rewrite  -  it is a one-line storage swap.

<!-- truncate -->

## The Storage Interface

Every storage driver implements the same interface:

```go
type Storage interface {
    Get(key string) ([]byte, error)
    Set(key string, val []byte, exp time.Duration) error
    Delete(key string) error
    Reset() error
    Close() error
}
```

Five methods. That is the entire contract. Any middleware that accepts a `Storage` field works with any driver that implements this interface. No adapters, no wrappers, no glue code.

## 30+ Storage Drivers

The [gofiber/storage](https://github.com/gofiber/storage) repository includes drivers for:

**Key-Value Stores**: Redis, Valkey, Rueidis, Memcache, Badger, Bbolt, Pebble, LevelDB, Ristretto, Etcd, NATS

**SQL Databases**: Postgres, MySQL, MSSQL, SQLite3

**Cloud Services**: DynamoDB, S3, Azure Blob, Cloudflare KV, Firestore, Minio

**NoSQL / Document**: MongoDB, ArangoDB, Couchbase, SurrealDB, Neo4j

**Specialized**: Aerospike, Cassandra, ScyllaDB, ClickHouse, Coherence, Memory

Every driver is tested against the latest two Go versions and has CI badges showing test status.

## Picking the Right Storage

The choice depends on your deployment:

### Single Server, Simple App → SQLite3

```go
import "github.com/gofiber/storage/sqlite3/v3"

store := sqlite3.New(sqlite3.Config{
    Database: "./fiber_data.db",
})
```

No external dependencies. Survives restarts. Fast enough for most workloads. If your app runs on one server and you do not want to manage Redis, this is your answer.

### Multiple Servers, Production → Redis

```go
import "github.com/gofiber/storage/redis/v3"

store := redis.New(redis.Config{
    Host:     "redis.internal",
    Port:     6379,
    Password: os.Getenv("REDIS_PASSWORD"),
    Database: 0,
})
```

Redis is the production default for a reason: fast, shared across instances, supports TTL natively, and you probably already have one running for caching.

### Already Using Postgres → Postgres

```go
import "github.com/gofiber/storage/postgres/v3"

store := postgres.New(postgres.Config{
    Host:     "db.internal",
    Port:     5432,
    Username: "app",
    Password: os.Getenv("DB_PASSWORD"),
    Database: "myapp",
    Table:    "fiber_storage",
})
```

If your app already connects to Postgres, adding a `fiber_storage` table avoids a new infrastructure dependency. The driver creates the table automatically on first use.

### AWS / Serverless → DynamoDB

```go
import "github.com/gofiber/storage/dynamodb/v2"

store := dynamodb.New(dynamodb.Config{
    Table: "fiber-sessions",
})
```

For serverless or AWS-native deployments, DynamoDB scales without management and integrates with IAM for authentication.

### Development / Testing → Memory

```go
import "github.com/gofiber/storage/memory/v2"

store := memory.New()
```

Fast, zero config, no persistence. Use this for tests and local development where data loss on restart is fine.

## Using Storage with Middleware

Once you have a store, pass it to any middleware that accepts a `Storage` field:

```go
store := redis.New(redis.Config{Host: "localhost", Port: 6379})

// Rate limiter  -  shared counters across instances
app.Use(limiter.New(limiter.Config{
    Max:        100,
    Expiration: time.Minute,
    Storage:    store,
}))

// Cache  -  shared cache across instances
app.Use(cache.New(cache.Config{
    Expiration:   30 * time.Minute,
    Storage:      store,
}))

// Sessions  -  persistent across restarts
sessionStore := session.New(session.Config{
    Storage: store,
})
app.Use(sessionStore.Handler())
```

Three middleware, one storage backend, zero code changes when you switch from Redis to Postgres.

## Swapping Storage Without Code Changes

A common pattern is to select the storage backend from an environment variable:

```go
func newStorage() fiber.Storage {
    switch os.Getenv("STORAGE_BACKEND") {
    case "redis":
        return redis.New(redis.Config{
            Host: os.Getenv("REDIS_HOST"),
            Port: 6379,
        })
    case "postgres":
        return postgres.New(postgres.Config{
            ConnectionURI: os.Getenv("DATABASE_URL"),
        })
    default:
        return memory.New()
    }
}
```

This lets you run with in-memory storage locally and Redis in production without changing any middleware configuration.

## Benchmarks

Storage benchmarks are published at [gofiber.github.io/storage/benchmarks](https://gofiber.github.io/storage/benchmarks). Before picking a backend for a high-throughput use case, check the numbers. The short version: Redis and Memory are fastest for reads, SQLite3 is surprisingly competitive for single-server workloads, and cloud-based stores (DynamoDB, S3) add network latency but scale infinitely.

## Where to Start

If you are using default in-memory storage in production, switch to Redis or SQLite3 today. It is a one-line change that prevents data loss on restart and makes your rate limiters and sessions work correctly across deployments.

## Internal References

- [Storage Packages Documentation](/storage/)
- [Session Middleware](/middleware/session)
- [Limiter Middleware](/middleware/limiter)
- [Cache Middleware](/middleware/cache)
