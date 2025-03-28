---
type: "talk"
category: "microservices"
title: "Contract testing with Pact and Quarkus"
event: "Devoxx Greece"
location: "Athens"
slides:
  url: https://speakerdeck.com/hollycummins/contract-testing-with-pact-and-quarkus
video:
  url: https://www.youtube.com/watch?v=4xoJmz6bWB4
code: 
 - url: https://github.com/holly-cummins/pact-quarkus-sweater-demo
   title: Demo code showing Pact contract testing on Quarkus
tweets:
 - https://twitter.com/TheDonRaab/status/1654116422988046336?s=20
---
Every time you change one microservice, the others break. But you had unit tests! 
What’s going on? Unit tests aren’t enough to give system-level confidence, even with a microservices architecture. 
What’s the solution? Integration testing is annoyingly expensive, flaky, and fries your laptop. 
Remocal development environments are complex to manage. 
Testing in production is important, but the feedback loop is longer, so it’s not a substitute for local inner-loop testing. 
Enter contract tests. Contract tests combine the lightness of unit tests with the confidence of integration tests, and should be part of your development toolkit. 
This session will demo how to use the Pact contract testing framework to catch integration issues early. 
The demos will be run on Quarkus, but Pact runs on all Java frameworks. In fact, Pact has libraries for almost all of the popular programming languages.