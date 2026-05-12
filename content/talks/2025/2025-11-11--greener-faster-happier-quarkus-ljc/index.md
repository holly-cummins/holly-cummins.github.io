---
type: "talk"
category: "quarkus"
title: "How Quarkus makes your apps cheaper, greener, and happier"
event: "LJC"
location: London
slides:
  url: https://speakerdeck.com/hollycummins/how-quarkus-makes-your-apps-cheaper-greener-and-happier
code:
  - url: https://github.com/holly-cummins/simple-quarkus-demo
    title: The Quarkus application that was live coded in the talk
  - title: Quarkus vs Spring perf comparison apps
    url: https://github.com/quarkusio/spring-quarkus-perf-comparison
  - title: Instructions for converting the Spring application to Quarkus, using the compatibility libraries
    url: https://github.com/quarkusio/spring-quarkus-perf-comparison/blob/main/spring-conversion.md
  - title: Energy measurement utilities
    url: https://github.com/metacosm/power-server
  - title: Meme generator
    url: https://github.com/holly-cummins/meme-generator
---

Quarkus makes both people and hardware more efficient. That’s cool, but how does it work? Usually, we expect to
trade-off developer experience against runtime efficiency. In this session, Holly will dive into some of the technical
underpinnings of Quarkus’s efficiency. She’ll give advice for those using or considering Quarkus - should you be doing
reactive programming? Do native binaries run fastest? The talk includes some theory (what underpins Quarkus’s surprising
throughput?) and also live demos (does Quarkus really start faster than a light bulb? What does an integration testing
flow with Quarkus look like?)