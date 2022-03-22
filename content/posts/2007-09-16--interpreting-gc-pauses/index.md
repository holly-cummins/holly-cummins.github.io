---
title: Interpreting GC Pauses
cover: tsvetoslav-hristov-QW-f6s9nFIs-unsplash.jpg
author: holly cummins
category: java
type: blog
---

I've just got back from speaking at JavaZone in Oslo. I'll post links to the presentation videos when they're available. The feedback on my presentation and on the Extensible Verbose Toolkit gc analysis tooling I demonstrated was really positive, which was nice.

One of the main things I discussed in my talk is that care is required in interpreting garbage collection pauses. Even though pauses stop an application doing work, which is obviously bad, there's not necessarily any correlation between shorter garbage collection pauses and better application performance. Sometimes shorter pauses give better performance, sometimes longer pauses give better performance. This is pretty uncontroversial if the quality of service requirement is better throughput. It's a lot more contentious if response times are the critical performance metric. After my talk a few people told me about their applications, for which longer garbage collection pauses definitely meant longer response times and definitely mattered a lot. I certainly wasn't going to tell them they were wrong, either! I think the number of cases where there's a strong correlation between garbage collection pause times and response times - or, at least, maximum response times - is pretty high. What I was trying to get across is that there are also at least some cases where the gc pause times are only a small contributor to the maximum response times. It would be unfortunate to minimise pause times without ever checking back against response times if your application happened to be one of the ones where pause times aren't so important.

The whole subject of performance tuning is fascinating because there are so many different system configurations and so many different performance requirements that coming up with a single answer is impossible. Even coming up with a single coherent set of heuristics is pretty tricky.
