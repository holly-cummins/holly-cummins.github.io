---
type: "talk"
category: "microservices"
title: "How to avoid common pitfalls with modern microservices testing"
event: "Devnexus"
location: Atlanta, Georgia
author: Eric Deandrea and Holly Cummins
slides:
 url: https://speakerdeck.com/hollycummins/avoiding-common-pitfalls-with-modern-microservices-testing
code: 
  - title: Sample code from the demo
    url: "https://github.com/edeandrea/pact-quarkus-wookie-carpet-demo"
resources:
  - title: Contract testing section of a Quarkus workshop (in heroes, villains, and fight submodules)
    url: https://hollycummins.com/quarkus-workshops/#contract-testing
tweets:
  - https://twitter.com/__sunix_/status/1643640197530243074?s=20
  - https://twitter.com/pact_up/status/1646838935056793602?s=20
---

Have you ever wondered why your microservices break in production after all the tests have passed during CI/CD? Have you ever wondered if you’re testing too much or too little? If you want to learn about common pitfalls and how to catch them at build time rather than at runtime, this session is for you!


In this session we’ll share some common battle scars from our experiences in the field. Additionally, we will introduce the testing pyramid and explain why it is important in helping to continuously deploy microservices independently without fear. We will demonstrate, through a test-driven development approach, how the combination of Pact contract testing combined with Quarkus developer joy can help prevent your microservices from breaking in production.