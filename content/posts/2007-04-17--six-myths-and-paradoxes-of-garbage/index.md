---
title: "Six Myths and Paradoxes of Garbage Collection - MSc Thesis"
cover: introduction-image.png
author: holly cummins
category: java
type: blog
---

This dissertation was written in 2007, so in tech terms, it can be considered quaintly antique - back when it was written, there was still a debate about whether garbage collection was a good idea. StackOverflow hadn't been invented yet, and C++ was the language to beat.

What's the dissertation about? Well, this is the abstract:

> _Many myths and paradoxes surround garbage collection. The first myth is that garbage collection is only suitable for the incompetent, unskilled, or lazy. In fact garbage collection offers many architectural and software engineering advantages, even to the skilled developer. The second myth is that garbage collection is all about about collecting garbage. Garbage collectors also include an allocation component, which, along with their powers of object rearrangement, can make a significant difference to application performance. Thirdly, criticisms of garbage collection often focus on the pause times, and responses to these criticisms often focus exclusively on reducing pause times, in the mistaken belief that small pause times guarantee good application response times. Pause times are also often used as a metric of general application performance, and an increase in pause times is taken as an indicator of worsened performance, when in fact the opposite the opposite is often true. Paradoxically, even the total amount of time spent paused for garbage collection is not a good predictor of the impact of garbage collection on application performance. Finally, the sixth myth is that garbage collection has a disastrous performance impact. While garbage collection can hurt application performance, it can also help application performance to the point where it exceeds the performance with manual memory management._

Although some of the arguments it makes are no longer necessary, there's a lot I still like about the paper. It's got equations, it's got queueing theory, it's got dissections of usenet trolling about GC, it's got diagrams, and - the best bit - photos of garbage bins. You can read the full 84 pages [here](hollycumminsmscdissertation.pdf); it's licensed under Creative Commons Non-Commercial Share Alike.

[![thesis](hollycumminsmscdissertation.pdf)](hollycumminsmscdissertation.pdf)
