---
type: "talk"
category: "microservices"
title: "How to avoid common pitfalls with modern microservices testing"
event: "Devoxx UK"
location: London, UK
author: Eric Deandrea and Holly Cummins
slides:
  url: https://speakerdeck.com/hollycummins/avoiding-common-pitfalls-with-modern-microservices-testing-e2f41b66-5b5d-40e9-a19b-5703c344292d
code: 
  - title: Sample code from the demo
    url: "https://github.com/edeandrea/pact-quarkus-wookie-carpet-demo"
resource:
  - title: Contract testing section of a Quarkus workshop (in heroes, villains, and fight submodules)
    url: https://hollycummins.com/quarkus-workshops/#contract-testing
tweets:
  - https://twitter.com/danieloh30/status/1656585516543012864?s=20
  - https://www.linkedin.com/posts/aaccioly_devoxx-testing-microservices-activity-7062354397254537216-15Vk
---

Have you ever wondered why your microservices break in production after all the tests have passed during CI/CD? Have you ever wondered if you’re testing too much or too little? If you want to learn about common pitfalls and how to catch them at build time rather than at runtime, this session is for you!


In this session we’ll share some common battle scars from our experiences in the field. Additionally, we will introduce the testing pyramid and explain why it is important in helping to continuously deploy microservices independently without fear. We will demonstrate, through a test-driven development approach, how the combination of Pact contract testing combined with Quarkus developer joy can help prevent your microservices from breaking in production.