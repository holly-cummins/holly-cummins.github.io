---
type: "talk"
category: "java"
title: "Getting the most out of garbage collection"
cover: audience.jpg
resource:
  - title: "Do You Know How to Optimize Your JVM? Video Tech Brief (interview recorded at JavaZone)"
    url: "https://www.theserverside.com/discussions/thread/47121.html"
event: "JavaZone"
location: "Oslo, Norway"

---
Garbage collection is an invisible but extremely helpful part of the Java language. Investing a bit of effort in understanding garbage collection can yield big benefits in terms of application throughput and responsiveness, but care must be taken. It is common to try and improve application responsiveness by tuning the garbage collector to shorten garbage collection pauses. However, short pauses alone do not guarantee good application response times. Judging whether an application is performing well or poorly on the basis of pause times alone is dangerous, because big pause times often go along with great application performance. Even the total amount of time spent paused for garbage collection is not a good predictor of the impact of garbage collection on application performance. Although garbage collection is often treated as a performance cost, garbage collection can actually outperform manual memory management. Verbose garbage collection logs contain lots of information but it's not always obvious what it means or how to use it. Verbose gc can guide gc tuning decisions and also give insight into application behaviour. Verbose gc can help diagnose application response time problems, detect memory leaks and spotlight pathological patterns of object creation. I will demonstrate using verbose gc analysis tools to quickly find memory leaks, choose the best heap size, and choose the garbage collection policy which makes an application go fastest.