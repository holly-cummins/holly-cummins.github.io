---
type: "talk"
category: "OSGi"
title: "Everything I know about software, I learnt from spaghetti bolognese"
slides:
  url: "https://noti.st/holly-cummins/iNasA3/everything-i-know-about-software-i-learnt-from-spaghetti-bolognese"
event: "JAX London"
location: "London, UK"
video:
  url: "https://www.youtube.com/embed/gtFBpRyUL1A?feature=oembed"
cover: large-841dc07d7df28d11.jpg

---
IBM’s Holly Cummins and ‘Diabolical Developer’ Martijn Verburg discuss ways of overcoming complexity in software development.
None of of us enjoy spaghetti code, much less spaghetti builds, spaghetti tests, or spaghetti classpaths. Some days software engineering seems like the struggle against spaghetti - modern projects often become a large and complex tangle of source code and resources, and the runtime interactions are even worse! This means many projects are hard to navigate, difficult to extend and problematic to deploy/run. You only have to look at the OpenJDK itself to see the problems it faces in trying to have a smaller deployment and runtime footprint! Jigsaw was to be the inbuilt solution for the OpenJDK, extending beyond the JVM itself to help applications with their modularisation story (i.e. Jigsaw or OSGi). Sadly, Jigsaw is not going to make it for Java 8, so developers are left with only a few tooling choices in order to help them. However, tooling is only part of the answer in managing the complexity. What really matters in avoiding a noodly mess is the layout of your source code and resources, clear contracts, and how you think about the dependencies your code has at runtime. Dr Holly Cummins and Martijn Verburg will take you through some of the practical design decisions you can take to help modularise your application properly, independent of tooling. Time permitting they’ll then showcase some of tooling support that OSGi can bring to the table as the premier modularity system for Java today.