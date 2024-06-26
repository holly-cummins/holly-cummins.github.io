---
type: "talk"
category: "microservices"
title: "How to avoid common pitfalls with modern microservices testing"
event: "DevBCN"
location: Barcelona
author: Eric Deandrea and Holly Cummins
code: 
  - title: Sample code from the demo
    url: "https://github.com/edeandrea/pact-quarkus-wookie-carpet-demo"
slides:
  url: https://speakerdeck.com/hollycummins/avoiding-common-pitfalls-with-modern-microservices-testing?slide=12
video:
  url: https://www.youtube.com/watch?v=yMi5Xyf7PDc
resources:
  - title: Contract testing section of a Quarkus workshop (in heroes, villains, and fight submodules)
    url: https://hollycummins.com/quarkus-workshops/#contract-testing
tweets:
  - https://twitter.com/auritamh/status/1676126219488620544?s=20
  - https://twitter.com/jordisola_/status/1676127439569707008?s=20
  - https://twitter.com/edeandrea/status/1676141873813913601?s=20
  - https://twitter.com/hpgrahsl/status/1676135581229924354?s=20
  - https://twitter.com/ZinebBendhiba/status/1676125629186490368?s=20
  - https://twitter.com/carlessr/status/1676125606927376384?s=20
---

Have you ever wondered why your microservices break in production after all the tests have passed during CI/CD? Have you ever wondered if you’re testing too much or too little? If you want to learn about common pitfalls and how to catch them at build time rather than at runtime, this session is for you!


In this session we’ll share some common battle scars from our experiences in the field. Additionally, we will introduce the testing pyramid and explain why it is important in helping to continuously deploy microservices independently without fear. We will demonstrate, through a test-driven development approach, how the combination of Pact contract testing combined with Quarkus developer joy can help prevent your microservices from breaking in production.