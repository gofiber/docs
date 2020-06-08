---
description: >-
  Ces benchmarks visent à comparer les performances de Fiber et d'autres frameworks web.
---

# 📊 Benchmarks

## TechEmpower

[TechEmpower](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite) fournit une comparaison de performances de nombreux frameworks Web exécutant des tâches fondamentales telles que la sérialisation JSON, l'accès à la base de données et la composition de modèles côté serveur.

Chaque framework fonctionne dans une configuration de production réaliste. Les résultats sont capturés sur des instances de nuage et sur du matériel physique. Les implémentations de test sont largement contribuées par la communauté et toutes les sources sont disponibles dans le dépôt [GitHub](https://github.com/TechEmpower/FrameworkBenchmarks).

* Fibre `v1.10.0`
* format@@0 28 HT Core Intel\\(R\\) Xeon\\(R\\) Gold 5120 CPU @ 2,20GHz
* 32GB RAM
* Ubuntu 18.04.3 4.15.0-88-générique
* Interrupteur Ethernet Cisco dédié à 10 Gbits.

### Texte en clair

Le test en texte brut est un exercice des fondamentaux du routage de la demande uniquement conçu pour démontrer la capacité des plates-formes hautes performances en particulier. Les requêtes seront envoyées en utilisant le pipeline HTTP. La charge utile de réponse est encore petite, ce qui signifie que de bonnes performances sont toujours nécessaires pour saturer le réseau Ethernet gigabit de l'environnement de test.

Voir les [exigences en texte brut](https://github.com/TechEmpower/FrameworkBenchmarks/wiki/Project-Information-Framework-Tests-Overview#single-database-query)

**Fibre**      -   **6,162, 56** réponses par seconde avec une latence moyenne de     **2.** ms.  
**Express** -      **367, 69** réponse par seconde avec une latence moyenne de **354.** ms.

![](.gitbook/assets/plaintext%20%281%29.png)

![Fibre vs Express](.gitbook/assets/plaintext_express.png)

### Mises à jour des données

**Fibre** a géré **11 846** réponses par seconde avec une latence moyenne de **42.** ms.  
**Express** gérée **2, 66** réponses par seconde avec une latence moyenne de **390. 4** ms.

![](.gitbook/assets/data_updates.png)

![Fibre vs Express](.gitbook/assets/data_updates_express%20%281%29.png)

### Requêtes multiples

**Fibre** a géré **19,664** réponses par seconde avec une latence moyenne de **25,7** ms.  
**Express** géré **4, 02** réponses par seconde avec une latence moyenne de **117.** ms.

![](.gitbook/assets/multiple_queries%20%281%29.png)

![Fibre vs Express](.gitbook/assets/multiple_queries_express.png)

### Requête simple

**Fibre** a géré **368 647** réponses par seconde avec une latence moyenne de **0,7** ms.  
**Express** géré **57, 80** réponses par seconde avec une latence moyenne de **4.** ms.

![](.gitbook/assets/single_query%20%282%29.png)

![Fibre vs Express](.gitbook/assets/single_query_express.png)

### Sérialisation JSON

**Fibre** a géré **1,146,667** réponses par seconde avec une latence moyenne de **0,4** ms.  
**Express** géré **244, 47** réponses par seconde avec une latence moyenne de **1.** ms.

![](.gitbook/assets/json%20%281%29.png)

![Fibre vs Express](.gitbook/assets/json_express.png)

## benchmark du framework web Go

🔗 [https://github.com/smallnest/go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark)

* **CPU** Intel\\(R\\) Xeon\\(R\\) Gold 6140 CPU @ 2,30 GHz
* **MEM** 4GB
* **GO** go1.13.6 linux/amd64
* **OS** Linux

Le premier cas de test est de bouchonner **0 ms**, **10 ms**, **100 ms**, **500 ms** temps de traitement en gestionnaires.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark.png)

Les clients concurrents sont **5000**.

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_latency.png)

La latence est le temps de traitement réel par les serveurs web. _Le plus petit est le mieux._

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png)

Allocs est l'allocation de tas par serveurs web lorsque le test est en cours d'exécution. L'unité est MB. _Le plus petit est le mieux._

Si nous activons **le pipeline http**, le résultat du test ci-dessous :

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png)

Test de la monnaie en **30 ms** de temps de traitement, le résultat du test pour **100**, **1000**, **5000** clients est :

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_latency.png)

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency_alloc.png)

Si nous activons **le pipeline http**, le résultat du test ci-dessous :

![](https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/concurrency-pipeline.png)

Graphique de dépendance pour `v1.9.0`

![](.gitbook/assets/graph.svg)

