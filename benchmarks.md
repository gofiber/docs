# Benchmarks

## TechEmpower

* **CPU** Intel Xeon Gold 5120
* **MEM** 32GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux
* **NET** Dedicated Cisco 10-gigabit Ethernet switch.

Below you can see the results of tested go frameworks responding in plaintext.  
To view the list yourself, [Plaintext Go Results](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext&l=zijocf-1r).  
To see all language frameworks, [Plaintext All Results](https://www.techempower.com/benchmarks/#section=test&runid=350f0783-cc9b-4259-9831-28987799782a&hw=ph&test=plaintext).

Plaintext

![](.gitbook/assets/techempower-plaintext.png)

Plaintext latency

![](.gitbook/assets/techempower-plaintext-latency.png)

JSON serialization

![](.gitbook/assets/techempower-json.png)

Single query

![](.gitbook/assets/techempower-single-query.png)

Multiple queries

![](.gitbook/assets/techempower-multiple-queries.png)

Data updates

![](.gitbook/assets/techempower-updates.png)

## Go-Web

[go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\(R\) Xeon\(R\) Gold 6140 CPU @ 2.30GHz
* **MEM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

The first test case is to mock 0 ms, 10 ms, 100 ms, 500 ms processing time in handlers.

![](.gitbook/assets/benchmark.png)

the concurrency clients are 5000.

![](.gitbook/assets/benchmark_latency.png)

Latency is the time of real processing time by web servers. The smaller is the better.

![](.gitbook/assets/benchmark_alloc.png)

Allocs is the heap allocations by web servers when test is running. The unit is MB. The smaller is the better.

If we enable http pipelining, test result as below:

![](.gitbook/assets/benchmark-pipeline.png)

Concurrency test in 30 ms processing time, the test result for 100, 1000, 5000 clients is:

![](.gitbook/assets/concurrency.png)

![](.gitbook/assets/concurrency_latency.png)

![](.gitbook/assets/concurrency_alloc.png)

If we enable http pipelining, test result as below:

![](.gitbook/assets/concurrency-pipeline.png)

