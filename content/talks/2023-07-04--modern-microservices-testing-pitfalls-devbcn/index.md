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
resource:
  - title: Contract testing section of a Quarkus workshop (in heroes, villains, and fight submodules)
    url: https://hollycummins.com/quarkus-workshops/#contract-testing
---

Have you ever wondered why your microservices break in production after all the tests have passed during CI/CD? Have you ever wondered if you’re testing too much or too little? If you want to learn about common pitfalls and how to catch them at build time rather than at runtime, this session is for you!


In this session we’ll share some common battle scars from our experiences in the field. Additionally, we will introduce the testing pyramid and explain why it is important in helping to continuously deploy microservices independently without fear. We will demonstrate, through a test-driven development approach, how the combination of Pact contract testing combined with Quarkus developer joy can help prevent your microservices from breaking in production.