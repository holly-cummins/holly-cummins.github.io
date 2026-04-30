---
author: holly cummins
title: When benchmarks go bad - what I learned from measuring performance wrong
category: performance
type: talk
event: Devoxx
location: London


resources:
  - title: "The Quarkus benchmarks results repository"
    url: https://github.com/quarkusio/benchmarks
  - title: "The Quarkus vs Spring benchmark code"
    url: https://github.com/quarkusio/spring-quarkus-perf-comparison
  - title: "Best practices for achieving reproducibility"
    url: https://easyperf.net/blog/2019/08/02/Perf-measurement-environment-on-Linux
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

a high-tempo pop-rock song defined by a rapid-fire, stream-of-consciousness delivery, elements of k-pop, ska, and punk,
with growly female vocals

and the rhyme scheme follows aaab ccb ddee with two or three incidents per line.

That song has a rhyme scheme of non-rhyming syllable or phrase, and then a rhyming syllable or phrase, repeat. E.g. Davy
Crockett, Peter PAN, Elvis Presley, DisneyLAND. With a few exceptions to break it up so it doesn't get too repetitive.

Also internal rhymes, rhymes on the same line

TODO
Add what else do I have to say?
Rock-and-roller cola wars, I can't take it anymore

Throughput, build time,
RSS should be fine
Latency, P99
Warmups, ready line
RAPL, energy
CPU, wrong frequency

Cold start, Hot cache,
Page fault, disk thrash
Sync cost, lock-free
For the latency
Soft swap, core crash
Queue depth, load smash
Profile, flame graph

We’re gonna build a benchmark
‘cos we wanna use one, but don’t wanna choose one,
We’re gonna build a benchmark
‘cos we wanna use one, but don’t wanna choose one,

Heap size, lazy threads
Pool size bikesheds
Metrics, tracing,
Otel excess
Diff test, bug hunt
Pinned cores
The tools are blunt
Sync chores
Configuring
NUMA on the floor

Change one tiny flag
Watch the numbers sag
Tune, run, tweak, repeat
Share the test and shriek
Read rows, write rows
Stale container woes
CPU GPU, what else do I have to say?

Wrk2, hyperfoil,
Cache hit, slashdot
Mutex, deadlock
A/B, same code?
Why’s it slow in this mode?
Works on my machine,
is it really clean?
Data, data, I can't take it anymore

We’re gonna build a benchmark
‘cos we wanna use one, but don’t wanna choose one,
We’re gonna build a benchmark
‘cos we wanna use one, but don’t wanna choose one,

TODO needs rhyme, doesn’t
Find sweet data
For throwing shade-a TODO doesn’t scan

Out to find
Hot path, inlined
Metrics defined [not the right form? just nouns, not verbs]
Results refined

Latency
I can’t see
(Running Average Power Limit)

Scrape dash, Graf-on
Func call, sys call
Segfault, facepalm

[Chorus]
We’re gonna build a benchmark
‘cos we wanna use one, but don’t wanna choose one,
We’re gonna build a benchmark
‘cos we wanna use one, but don’t wanna choose one,

Here we go again

[Chorus]
We’re gonna build a benchmark
‘cos we wanna use one, but don’t wanna choose one,
We’re gonna build a benchmark
‘cos we wanna use one, but don’t wanna choose one,

[Bridge]

Processor architecture
Energy
RAPL
RSS
CPU frequency
Hyperfoil
Serialise
Work too (wrk2), hyperfoil
lots of oil
so much toil

Protect the bottleneck

Early load, can’t wait
Cold start, warm cache

GC pause, stop sign

I/O bound
numbers on the ground
numbers are not sound

Latency, throughput, p99
We’re gonna build a benchmark
Print charts in neon red
“You broke the SLA,” is what the dashboard said

Vectorized, pipeline
Jitter, jitter
False share, big flitter
