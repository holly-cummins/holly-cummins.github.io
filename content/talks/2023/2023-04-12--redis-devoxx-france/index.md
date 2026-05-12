---
type: "talk"
category: "quarkus"
title: "Redis: du cache à la time series!"
event: "Devoxx France"
location: "Paris"
slides:
  url: https://speakerdeck.com/hollycummins/redis-du-cache-a-la-time-series
video:
  url: https://www.youtube.com/watch?v=bi3s32jBJFg
code:
  - title: "Cache-cache application"
    url: https://github.com/holly-cummins/redis-cache-cache
tweets:
  - https://twitter.com/ZinebBendhiba/status/1646178296625782791?s=20
  - https://twitter.com/Lilian_Benoit/status/1646248339640401923?s=20
  - https://twitter.com/LoozBonita/status/1646179573007020035?s=20
  - https://twitter.com/danieloh30/status/1646179312364560385?s=20
  - https://twitter.com/Lilian_Benoit/status/1646177359274409985?s=20
  - https://twitter.com/aheritier/status/1646285713854300160?s=20
---


Redis est devenu extrêmement populaire. Redis est souvent utilisé comme solution de cache ou pour stocker les sessions utilisateurs. Mais Redis a beaucoup d’autres fonctionnalités et devient le couteau suisse des applications Cloud. En effet, Redis peut être utilisé comme base de données spatiales, queue d’exécution, time series, moteur de recherche. On peut stocker des documents textes, binaires ou du JSON, des graphes et même des structures mathématiques tel que des filtres Bloom ou Cuckoo.

Cette présentation explique les différents types de données que Redis peut manipuler et comment l’API Redis intégré à Quarkus vous permet de développer avec ces types facilement, et rapidement. Après cette présentation, vous ne verrez plus votre Redis comme avant!
