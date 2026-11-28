import { defineConfig, godoc, markdown } from "sourcey";

export default defineConfig({
  name: "fiber",
  siteUrl: "https://docs.gofiber.io",
  repo: "https://github.com/gofiber/docs",
  editBranch: "master",
  navigation: {
    tabs: [
      {
        tab: "Docs",
        slug: "",
        source: markdown({
          groups: [
            {
                        "group": "contrib",
                        "pages": [
                                    "docs/contrib/README"
                        ]
            },
            {
                        "group": "docs/contrib/casbin",
                        "pages": [
                                    "docs/contrib/casbin/README"
                        ]
            },
            {
                        "group": "docs/contrib/circuitbreaker",
                        "pages": [
                                    "docs/contrib/circuitbreaker/README"
                        ]
            },
            {
                        "group": "docs/contrib/coraza",
                        "pages": [
                                    "docs/contrib/coraza/README"
                        ]
            },
            {
                        "group": "docs/contrib/fgprof",
                        "pages": [
                                    "docs/contrib/fgprof/README"
                        ]
            },
            {
                        "group": "docs/contrib/hcaptcha",
                        "pages": [
                                    "docs/contrib/hcaptcha/README"
                        ]
            },
            {
                        "group": "docs/contrib/i18n",
                        "pages": [
                                    "docs/contrib/i18n/README"
                        ]
            },
            {
                        "group": "docs/contrib/jwt",
                        "pages": [
                                    "docs/contrib/jwt/README"
                        ]
            },
            {
                        "group": "docs/contrib/loadshed",
                        "pages": [
                                    "docs/contrib/loadshed/README"
                        ]
            },
            {
                        "group": "docs/contrib/monitor",
                        "pages": [
                                    "docs/contrib/monitor/README"
                        ]
            },
            {
                        "group": "docs/contrib/newrelic",
                        "pages": [
                                    "docs/contrib/newrelic/README"
                        ]
            },
            {
                        "group": "docs/contrib/opa",
                        "pages": [
                                    "docs/contrib/opa/README"
                        ]
            },
            {
                        "group": "docs/contrib/otel",
                        "pages": [
                                    "docs/contrib/otel/README"
                        ]
            },
            {
                        "group": "docs/contrib/paseto",
                        "pages": [
                                    "docs/contrib/paseto/README"
                        ]
            },
            {
                        "group": "docs/contrib/prometheus",
                        "pages": [
                                    "docs/contrib/prometheus/README"
                        ]
            },
            {
                        "group": "docs/contrib/sentry",
                        "pages": [
                                    "docs/contrib/sentry/README"
                        ]
            },
            {
                        "group": "docs/contrib/socketio",
                        "pages": [
                                    "docs/contrib/socketio/README",
                                    "docs/contrib/socketio/legacy/README"
                        ]
            },
            {
                        "group": "docs/contrib/spnego",
                        "pages": [
                                    "docs/contrib/spnego/README"
                        ]
            },
            {
                        "group": "docs/contrib/swaggerui",
                        "pages": [
                                    "docs/contrib/swaggerui/README"
                        ]
            },
            {
                        "group": "docs/contrib/swaggo",
                        "pages": [
                                    "docs/contrib/swaggo/README"
                        ]
            },
            {
                        "group": "docs/contrib/testcontainers",
                        "pages": [
                                    "docs/contrib/testcontainers/README"
                        ]
            },
            {
                        "group": "docs/contrib/uptime",
                        "pages": [
                                    "docs/contrib/uptime/README"
                        ]
            },
            {
                        "group": "docs/contrib/websocket",
                        "pages": [
                                    "docs/contrib/websocket/README",
                                    "docs/contrib/websocket/event/README"
                        ]
            },
            {
                        "group": "docs/contrib/zap",
                        "pages": [
                                    "docs/contrib/zap/README"
                        ]
            },
            {
                        "group": "docs/contrib/zerolog",
                        "pages": [
                                    "docs/contrib/zerolog/README"
                        ]
            },
            {
                        "group": "core",
                        "pages": [
                                    "docs/core/ecosystem",
                                    "docs/core/intro",
                                    "docs/core/whats_new"
                        ]
            },
            {
                        "group": "docs/core/addon",
                        "pages": [
                                    "docs/core/addon/retry"
                        ]
            },
            {
                        "group": "docs/core/api",
                        "pages": [
                                    "docs/core/api/app",
                                    "docs/core/api/bind",
                                    "docs/core/api/constants",
                                    "docs/core/api/ctx",
                                    "docs/core/api/fiber",
                                    "docs/core/api/hooks",
                                    "docs/core/api/log",
                                    "docs/core/api/redirect",
                                    "docs/core/api/services",
                                    "docs/core/api/state"
                        ]
            },
            {
                        "group": "docs/core/client",
                        "pages": [
                                    "docs/core/client/examples",
                                    "docs/core/client/client-hooks",
                                    "docs/core/client/request",
                                    "docs/core/client/response",
                                    "docs/core/client/rest"
                        ]
            },
            {
                        "group": "docs/core/extra",
                        "pages": [
                                    "docs/core/extra/benchmarks",
                                    "docs/core/extra/faq",
                                    "docs/core/extra/internal",
                                    "docs/core/extra/learning-resources",
                                    "docs/core/extra/route-matcher"
                        ]
            },
            {
                        "group": "docs/core/guide",
                        "pages": [
                                    "docs/core/guide/advance-format",
                                    "docs/core/guide/context",
                                    "docs/core/guide/crud-and-health",
                                    "docs/core/guide/error-handling",
                                    "docs/core/guide/extractors",
                                    "docs/core/guide/faster-fiber",
                                    "docs/core/guide/grouping",
                                    "docs/core/guide/reverse-proxy",
                                    "docs/core/guide/routing",
                                    "docs/core/guide/templates",
                                    "docs/core/guide/utils",
                                    "docs/core/guide/validation"
                        ]
            },
            {
                        "group": "docs/core/middleware",
                        "pages": [
                                    "docs/core/middleware/adaptor",
                                    "docs/core/middleware/basicauth",
                                    "docs/core/middleware/cache",
                                    "docs/core/middleware/compress",
                                    "docs/core/middleware/cors",
                                    "docs/core/middleware/csrf",
                                    "docs/core/middleware/deprecation",
                                    "docs/core/middleware/earlydata",
                                    "docs/core/middleware/encryptcookie",
                                    "docs/core/middleware/envvar",
                                    "docs/core/middleware/etag",
                                    "docs/core/middleware/expvar",
                                    "docs/core/middleware/favicon",
                                    "docs/core/middleware/healthcheck",
                                    "docs/core/middleware/helmet",
                                    "docs/core/middleware/hostauthorization",
                                    "docs/core/middleware/idempotency",
                                    "docs/core/middleware/keyauth",
                                    "docs/core/middleware/limiter",
                                    "docs/core/middleware/logger",
                                    "docs/core/middleware/paginate",
                                    "docs/core/middleware/pprof",
                                    "docs/core/middleware/proxy",
                                    "docs/core/middleware/recover",
                                    "docs/core/middleware/middleware-redirect",
                                    "docs/core/middleware/requestid",
                                    "docs/core/middleware/responsetime",
                                    "docs/core/middleware/rewrite",
                                    "docs/core/middleware/session",
                                    "docs/core/middleware/skip",
                                    "docs/core/middleware/sse",
                                    "docs/core/middleware/static",
                                    "docs/core/middleware/timeout"
                        ]
            },
            {
                        "group": "docs/core/partials",
                        "pages": [
                                    "docs/core/partials/routing/handler",
                                    "docs/core/partials/routing/handler-types",
                                    "docs/core/partials/routing/use"
                        ]
            },
            {
                        "group": "recipes",
                        "pages": [
                                    "docs/recipes/README"
                        ]
            },
            {
                        "group": "docs/recipes/404-handler",
                        "pages": [
                                    "docs/recipes/404-handler/README"
                        ]
            },
            {
                        "group": "docs/recipes/advanced-caching",
                        "pages": [
                                    "docs/recipes/advanced-caching/README"
                        ]
            },
            {
                        "group": "docs/recipes/air",
                        "pages": [
                                    "docs/recipes/air/README"
                        ]
            },
            {
                        "group": "docs/recipes/angular-ssr",
                        "pages": [
                                    "docs/recipes/angular-ssr/README"
                        ]
            },
            {
                        "group": "docs/recipes/asynq",
                        "pages": [
                                    "docs/recipes/asynq/README"
                        ]
            },
            {
                        "group": "docs/recipes/auth-jwt",
                        "pages": [
                                    "docs/recipes/auth-jwt/README"
                        ]
            },
            {
                        "group": "docs/recipes/autocert",
                        "pages": [
                                    "docs/recipes/autocert/README"
                        ]
            },
            {
                        "group": "docs/recipes/aws-eb",
                        "pages": [
                                    "docs/recipes/aws-eb/README"
                        ]
            },
            {
                        "group": "docs/recipes/aws-sam-container",
                        "pages": [
                                    "docs/recipes/aws-sam-container/README"
                        ]
            },
            {
                        "group": "docs/recipes/aws-ses-sender",
                        "pages": [
                                    "docs/recipes/aws-ses-sender/README"
                        ]
            },
            {
                        "group": "docs/recipes/bootstrap",
                        "pages": [
                                    "docs/recipes/bootstrap/README"
                        ]
            },
            {
                        "group": "docs/recipes/clean-architecture",
                        "pages": [
                                    "docs/recipes/clean-architecture/README"
                        ]
            },
            {
                        "group": "docs/recipes/cloud-run",
                        "pages": [
                                    "docs/recipes/cloud-run/README"
                        ]
            },
            {
                        "group": "docs/recipes/cloudflare-workers",
                        "pages": [
                                    "docs/recipes/cloudflare-workers/README"
                        ]
            },
            {
                        "group": "docs/recipes/csrf-with-session",
                        "pages": [
                                    "docs/recipes/csrf-with-session/README"
                        ]
            },
            {
                        "group": "docs/recipes/docker-nginx-loadbalancer",
                        "pages": [
                                    "docs/recipes/docker-nginx-loadbalancer/README"
                        ]
            },
            {
                        "group": "docs/recipes/dummyjson",
                        "pages": [
                                    "docs/recipes/dummyjson/README"
                        ]
            },
            {
                        "group": "docs/recipes/dynamic-routing",
                        "pages": [
                                    "docs/recipes/dynamic-routing/README"
                        ]
            },
            {
                        "group": "docs/recipes/early-hints",
                        "pages": [
                                    "docs/recipes/early-hints/README"
                        ]
            },
            {
                        "group": "docs/recipes/email-verification",
                        "pages": [
                                    "docs/recipes/email-verification/README"
                        ]
            },
            {
                        "group": "docs/recipes/ent-mysql",
                        "pages": [
                                    "docs/recipes/ent-mysql/README"
                        ]
            },
            {
                        "group": "docs/recipes/envoy-extauthz",
                        "pages": [
                                    "docs/recipes/envoy-extauthz/README"
                        ]
            },
            {
                        "group": "docs/recipes/file-server",
                        "pages": [
                                    "docs/recipes/file-server/README"
                        ]
            },
            {
                        "group": "docs/recipes/firebase-auth",
                        "pages": [
                                    "docs/recipes/firebase-auth/README"
                        ]
            },
            {
                        "group": "docs/recipes/firebase-functions",
                        "pages": [
                                    "docs/recipes/firebase-functions/README"
                        ]
            },
            {
                        "group": "docs/recipes/form-data",
                        "pages": [
                                    "docs/recipes/form-data/README"
                        ]
            },
            {
                        "group": "docs/recipes/geoip-maxmind",
                        "pages": [
                                    "docs/recipes/geoip-maxmind/README"
                        ]
            },
            {
                        "group": "docs/recipes/gorm",
                        "pages": [
                                    "docs/recipes/gorm/README"
                        ]
            },
            {
                        "group": "docs/recipes/gqlgen",
                        "pages": [
                                    "docs/recipes/gqlgen/README"
                        ]
            },
            {
                        "group": "docs/recipes/graceful-shutdown",
                        "pages": [
                                    "docs/recipes/graceful-shutdown/README"
                        ]
            },
            {
                        "group": "docs/recipes/graphql",
                        "pages": [
                                    "docs/recipes/graphql/README"
                        ]
            },
            {
                        "group": "docs/recipes/grpc",
                        "pages": [
                                    "docs/recipes/grpc/README"
                        ]
            },
            {
                        "group": "docs/recipes/hello-world",
                        "pages": [
                                    "docs/recipes/hello-world/README"
                        ]
            },
            {
                        "group": "docs/recipes/hexagonal",
                        "pages": [
                                    "docs/recipes/hexagonal/README"
                        ]
            },
            {
                        "group": "docs/recipes/https-pkcs12-tls",
                        "pages": [
                                    "docs/recipes/https-pkcs12-tls/README"
                        ]
            },
            {
                        "group": "docs/recipes/https-tls",
                        "pages": [
                                    "docs/recipes/https-tls/README"
                        ]
            },
            {
                        "group": "docs/recipes/i18n",
                        "pages": [
                                    "docs/recipes/i18n/README"
                        ]
            },
            {
                        "group": "docs/recipes/jwt",
                        "pages": [
                                    "docs/recipes/jwt/README"
                        ]
            },
            {
                        "group": "docs/recipes/k8s",
                        "pages": [
                                    "docs/recipes/k8s/README"
                        ]
            },
            {
                        "group": "docs/recipes/local-development-testcontainers",
                        "pages": [
                                    "docs/recipes/local-development-testcontainers/README"
                        ]
            },
            {
                        "group": "docs/recipes/memgraph",
                        "pages": [
                                    "docs/recipes/memgraph/README"
                        ]
            },
            {
                        "group": "docs/recipes/minio",
                        "pages": [
                                    "docs/recipes/minio/README"
                        ]
            },
            {
                        "group": "docs/recipes/mongodb",
                        "pages": [
                                    "docs/recipes/mongodb/README"
                        ]
            },
            {
                        "group": "docs/recipes/monitoring-with-apitally",
                        "pages": [
                                    "docs/recipes/monitoring-with-apitally/README"
                        ]
            },
            {
                        "group": "docs/recipes/multiple-ports",
                        "pages": [
                                    "docs/recipes/multiple-ports/README"
                        ]
            },
            {
                        "group": "docs/recipes/mysql",
                        "pages": [
                                    "docs/recipes/mysql/README"
                        ]
            },
            {
                        "group": "docs/recipes/neo4j",
                        "pages": [
                                    "docs/recipes/neo4j/README"
                        ]
            },
            {
                        "group": "docs/recipes/oauth2",
                        "pages": [
                                    "docs/recipes/oauth2/README"
                        ]
            },
            {
                        "group": "docs/recipes/openapi",
                        "pages": [
                                    "docs/recipes/openapi/README"
                        ]
            },
            {
                        "group": "docs/recipes/optional-parameter",
                        "pages": [
                                    "docs/recipes/optional-parameter/README"
                        ]
            },
            {
                        "group": "docs/recipes/parsley",
                        "pages": [
                                    "docs/recipes/parsley/README"
                        ]
            },
            {
                        "group": "docs/recipes/prefork",
                        "pages": [
                                    "docs/recipes/prefork/README"
                        ]
            },
            {
                        "group": "docs/recipes/prometheus",
                        "pages": [
                                    "docs/recipes/prometheus/README"
                        ]
            },
            {
                        "group": "docs/recipes/proxy-resilience",
                        "pages": [
                                    "docs/recipes/proxy-resilience/README"
                        ]
            },
            {
                        "group": "docs/recipes/rabbitmq",
                        "pages": [
                                    "docs/recipes/rabbitmq/README"
                        ]
            },
            {
                        "group": "docs/recipes/recover",
                        "pages": [
                                    "docs/recipes/recover/README"
                        ]
            },
            {
                        "group": "docs/recipes/rss-feed",
                        "pages": [
                                    "docs/recipes/rss-feed/README"
                        ]
            },
            {
                        "group": "docs/recipes/sentry",
                        "pages": [
                                    "docs/recipes/sentry/README"
                        ]
            },
            {
                        "group": "docs/recipes/server-timing",
                        "pages": [
                                    "docs/recipes/server-timing/README"
                        ]
            },
            {
                        "group": "docs/recipes/sessions-sqlite3",
                        "pages": [
                                    "docs/recipes/sessions-sqlite3/README"
                        ]
            },
            {
                        "group": "docs/recipes/socketio",
                        "pages": [
                                    "docs/recipes/socketio/README"
                        ]
            },
            {
                        "group": "docs/recipes/spa",
                        "pages": [
                                    "docs/recipes/spa/README"
                        ]
            },
            {
                        "group": "docs/recipes/sqlboiler",
                        "pages": [
                                    "docs/recipes/sqlboiler/README"
                        ]
            },
            {
                        "group": "docs/recipes/sqlc",
                        "pages": [
                                    "docs/recipes/sqlc/README"
                        ]
            },
            {
                        "group": "docs/recipes/sse",
                        "pages": [
                                    "docs/recipes/sse/README"
                        ]
            },
            {
                        "group": "docs/recipes/stream-request-body",
                        "pages": [
                                    "docs/recipes/stream-request-body/README"
                        ]
            },
            {
                        "group": "docs/recipes/sveltekit-embed",
                        "pages": [
                                    "docs/recipes/sveltekit-embed/README",
                                    "docs/recipes/sveltekit-embed/template/README"
                        ]
            },
            {
                        "group": "docs/recipes/swagger",
                        "pages": [
                                    "docs/recipes/swagger/README"
                        ]
            },
            {
                        "group": "docs/recipes/tableflip",
                        "pages": [
                                    "docs/recipes/tableflip/README"
                        ]
            },
            {
                        "group": "docs/recipes/template",
                        "pages": [
                                    "docs/recipes/template/README"
                        ]
            },
            {
                        "group": "docs/recipes/template-asset-bundling",
                        "pages": [
                                    "docs/recipes/template-asset-bundling/README"
                        ]
            },
            {
                        "group": "docs/recipes/todo-app-with-auth-gorm",
                        "pages": [
                                    "docs/recipes/todo-app-with-auth-gorm/README"
                        ]
            },
            {
                        "group": "docs/recipes/unit-test",
                        "pages": [
                                    "docs/recipes/unit-test/README"
                        ]
            },
            {
                        "group": "docs/recipes/upload-file",
                        "pages": [
                                    "docs/recipes/upload-file/README"
                        ]
            },
            {
                        "group": "docs/recipes/validation",
                        "pages": [
                                    "docs/recipes/validation/README"
                        ]
            },
            {
                        "group": "docs/recipes/vercel",
                        "pages": [
                                    "docs/recipes/vercel/README"
                        ]
            },
            {
                        "group": "docs/recipes/viper-config",
                        "pages": [
                                    "docs/recipes/viper-config/README"
                        ]
            },
            {
                        "group": "docs/recipes/websocket",
                        "pages": [
                                    "docs/recipes/websocket/README"
                        ]
            },
            {
                        "group": "docs/recipes/websocket-shared-state",
                        "pages": [
                                    "docs/recipes/websocket-shared-state/README"
                        ]
            },
            {
                        "group": "storage",
                        "pages": [
                                    "docs/storage/README"
                        ]
            },
            {
                        "group": "docs/storage/aerospike",
                        "pages": [
                                    "docs/storage/aerospike/README"
                        ]
            },
            {
                        "group": "docs/storage/arangodb",
                        "pages": [
                                    "docs/storage/arangodb/README"
                        ]
            },
            {
                        "group": "docs/storage/azureblob",
                        "pages": [
                                    "docs/storage/azureblob/README"
                        ]
            },
            {
                        "group": "docs/storage/badger",
                        "pages": [
                                    "docs/storage/badger/README"
                        ]
            },
            {
                        "group": "docs/storage/bbolt",
                        "pages": [
                                    "docs/storage/bbolt/README"
                        ]
            },
            {
                        "group": "docs/storage/cassandra",
                        "pages": [
                                    "docs/storage/cassandra/README"
                        ]
            },
            {
                        "group": "docs/storage/clickhouse",
                        "pages": [
                                    "docs/storage/clickhouse/README"
                        ]
            },
            {
                        "group": "docs/storage/cloudflarekv",
                        "pages": [
                                    "docs/storage/cloudflarekv/README"
                        ]
            },
            {
                        "group": "docs/storage/coherence",
                        "pages": [
                                    "docs/storage/coherence/README"
                        ]
            },
            {
                        "group": "docs/storage/couchbase",
                        "pages": [
                                    "docs/storage/couchbase/README"
                        ]
            },
            {
                        "group": "docs/storage/dynamodb",
                        "pages": [
                                    "docs/storage/dynamodb/README"
                        ]
            },
            {
                        "group": "docs/storage/etcd",
                        "pages": [
                                    "docs/storage/etcd/README"
                        ]
            },
            {
                        "group": "docs/storage/firestore",
                        "pages": [
                                    "docs/storage/firestore/README"
                        ]
            },
            {
                        "group": "docs/storage/leveldb",
                        "pages": [
                                    "docs/storage/leveldb/README"
                        ]
            },
            {
                        "group": "docs/storage/memcache",
                        "pages": [
                                    "docs/storage/memcache/README"
                        ]
            },
            {
                        "group": "docs/storage/memory",
                        "pages": [
                                    "docs/storage/memory/README"
                        ]
            },
            {
                        "group": "docs/storage/minio",
                        "pages": [
                                    "docs/storage/minio/README"
                        ]
            },
            {
                        "group": "docs/storage/mockstorage",
                        "pages": [
                                    "docs/storage/mockstorage/README"
                        ]
            },
            {
                        "group": "docs/storage/mongodb",
                        "pages": [
                                    "docs/storage/mongodb/README"
                        ]
            },
            {
                        "group": "docs/storage/mssql",
                        "pages": [
                                    "docs/storage/mssql/README"
                        ]
            },
            {
                        "group": "docs/storage/mysql",
                        "pages": [
                                    "docs/storage/mysql/README"
                        ]
            },
            {
                        "group": "docs/storage/nats",
                        "pages": [
                                    "docs/storage/nats/README"
                        ]
            },
            {
                        "group": "docs/storage/neo4j",
                        "pages": [
                                    "docs/storage/neo4j/README"
                        ]
            },
            {
                        "group": "docs/storage/pebble",
                        "pages": [
                                    "docs/storage/pebble/README"
                        ]
            },
            {
                        "group": "docs/storage/postgres",
                        "pages": [
                                    "docs/storage/postgres/README"
                        ]
            },
            {
                        "group": "docs/storage/redis",
                        "pages": [
                                    "docs/storage/redis/README"
                        ]
            },
            {
                        "group": "docs/storage/ristretto",
                        "pages": [
                                    "docs/storage/ristretto/README"
                        ]
            },
            {
                        "group": "docs/storage/rueidis",
                        "pages": [
                                    "docs/storage/rueidis/README"
                        ]
            },
            {
                        "group": "docs/storage/s3",
                        "pages": [
                                    "docs/storage/s3/README"
                        ]
            },
            {
                        "group": "docs/storage/scylladb",
                        "pages": [
                                    "docs/storage/scylladb/README"
                        ]
            },
            {
                        "group": "docs/storage/sqlite3",
                        "pages": [
                                    "docs/storage/sqlite3/README"
                        ]
            },
            {
                        "group": "docs/storage/surrealdb",
                        "pages": [
                                    "docs/storage/surrealdb/README"
                        ]
            },
            {
                        "group": "docs/storage/testhelpers",
                        "pages": [
                                    "docs/storage/testhelpers/README",
                                    "docs/storage/testhelpers/redis/README",
                                    "docs/storage/testhelpers/tck/README"
                        ]
            },
            {
                        "group": "docs/storage/valkey",
                        "pages": [
                                    "docs/storage/valkey/README"
                        ]
            },
            {
                        "group": "template",
                        "pages": [
                                    "docs/template/README"
                        ]
            },
            {
                        "group": "docs/template/ace",
                        "pages": [
                                    "docs/template/ace/README"
                        ]
            },
            {
                        "group": "docs/template/amber",
                        "pages": [
                                    "docs/template/amber/README"
                        ]
            },
            {
                        "group": "docs/template/django",
                        "pages": [
                                    "docs/template/django/README"
                        ]
            },
            {
                        "group": "docs/template/handlebars",
                        "pages": [
                                    "docs/template/handlebars/README"
                        ]
            },
            {
                        "group": "docs/template/html",
                        "pages": [
                                    "docs/template/html/README",
                                    "docs/template/html/TEMPLATES_CHEATSHEET"
                        ]
            },
            {
                        "group": "docs/template/jet",
                        "pages": [
                                    "docs/template/jet/README"
                        ]
            },
            {
                        "group": "docs/template/mustache",
                        "pages": [
                                    "docs/template/mustache/README"
                        ]
            },
            {
                        "group": "docs/template/pug",
                        "pages": [
                                    "docs/template/pug/README"
                        ]
            },
            {
                        "group": "docs/template/slim",
                        "pages": [
                                    "docs/template/slim/README"
                        ]
            }
]
        })
      },
      {
        tab: "Go API",
        slug: "go",
        source: godoc({ module: "../fiber", packages: ["./..."], includeTests: false })
      }
    ]
  }
});
