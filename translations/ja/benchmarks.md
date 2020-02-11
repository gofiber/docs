---
description: このベンチマークの目的は、Fiberと他のGo Webフレームワークのパフォーマンスを比較することです。
---

# 🤖ベンチマーク

## TechEmpower

🔗https [:](https://www.techempower.com/benchmarks/) //www.techempower.com/benchmarks/

- **CPU** Intel Xeon Gold 5120
- **MEM** 32GB
- **GO** go1.13.6のLinux / AMD64
- **OS** Linux
- **NET**専用のCisco 10ギガビットイーサネットスイッチ。

すべての言語フレームワークを表示するには、 [プレーンテキストのすべての結果](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext)にアクセスしてください。
自分でリストを表示するには、 [Plaintext Go Results](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext&l=zijocf-1r)にアクセスしてください。

### 平文

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-plaintext.png)

### プレーンテキスト遅延

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-plaintext-latency.png)

### JSONシリアル化

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-json.png)

### 単一のクエリ

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-single-query.png)

### 複数のクエリ

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-multiple-queries.png)

### データ更新

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/techempower-updates.png)

## Go Web Frameworkベンチマーク

🔗https [://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

- **CPU** Intel（R）Xeon（R）Gold 6140 CPU @ 2.30GHz
- **MEM** 4GB
- **GO** go1.13.6のLinux / AMD64
- **OS** Linux

最初のテストケースは、ハンドラーでの処理時間を**0ミリ秒** 、 **10ミリ秒** 、 **100ミリ秒** 、 **500ミリ秒の**モックにする**ことです** 。

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

同時実行クライアントは**5000**です。

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

待機時間は、Webサーバーによる実際の処理時間です。 *小さいほど良いです。*

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocsは、テスト実行中のWebサーバーによるヒープ割り当てです。単位はMBです。 *小さいほど良いです。*

**http pipelining**を有効にすると、次のようにテスト結果が得られます。

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

処理時間が**30ミリ秒**で並行性試験****、100、1000****試験結果**、5000台の**クライアントであります：

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

**http pipelining**を有効にすると、次のようにテスト結果が得られます。

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)
