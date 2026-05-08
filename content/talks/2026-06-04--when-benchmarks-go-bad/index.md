---
author: holly cummins
title: When benchmarks go bad - what I learned from measuring performance wrong
category: performance
type: talk
event: J-Spring
location: Utrecht


slides:
  url: https://speakerdeck.com/hollycummins/when-benchmarks-go-bad-what-i-learned-from-measuring-performance-wrong

resources:
  - title: "The Quarkus benchmarks results repository"
    url: https://github.com/quarkusio/benchmarks
  - title: "The Quarkus vs Spring benchmark code"
    url: https://github.com/quarkusio/spring-quarkus-perf-comparison
  - title: "Best practices for achieving reproducibility"
    url: https://easyperf.net/blog/2019/08/02/Perf-measurement-environment-on-Linux
  - title "'Reactive CRUD Performance: A Case Study', a great blog by John O'Hara walking through his investigation of a flawed benchmark"
    url: https://quarkus.io/blog/reactive-crud-performance-case-study/
  - title: "How NOT to measure latency, Gil Tene explaining coordinated omission"
    url: https://www.youtube.com/watch?v=lJ8ydIuPFeU
  - title: "'We're Gonna Build a Benchmark' lyrics"
    url: https://hollycummins.com/were-gonna-build-a-benchmark/

---


The world of performance analysis is littered with flawed claims, cognitive biases, dangerous intuitions, and beguiling
fallacies. Sadly, Holly has been guilty of all of the above! Repeatedly. But this is a no-judgement zone. Some
measurement anti-patterns are subtle, and some are downright counter-intuitive. In this talk, Holly will explain why
measuring performance is important, and talk through some of the ways it can go wrong. That would be depressing if that
was all there was, so she’ll also introduce a toolbox of questions and principles that you can use to improve the
performance of your own applications.

These include:

- How to set up a test system

- Recommended load generators

- The USE method
