---
title: "Garbage collection flavours"
cover: anthony-espinosa-TpgSqNN0KdY-unsplash.jpg
author: holly cummins
category: java
type: blog
---

In my previous post, I described the basic garbage collection algorithms. Within these basic categories, there are many variants, or flavours.

## Generational collectors

Generational collectors exploit the observed properties that most objects tend to die young, and that young objects are more likely to reference old objects than the reverse. Together these are known as the weak generational hypothesis.

Generational collectors divide the heap up into multiple generations. Young generations can be collected without collecting old generations. These partial collections are quicker than full heap collections, and are likely to produce a good return of free space relative to the area collected, since most objects die young. At least the younger generations tend to employ copying collectors, since these collectors are very efficient in heaps with high attrition rates.

Objects which survive a given number of collections are tenured and move up to an older generation. In order to avoid collecting objects in younger generations which are referenced by older generations, a remembered set is maintained of references from old generations to young generations. A write barrier between the generations is used to catch changes to these references.

## Incremental collection

Incremental collectors allow single collections to be divided into smaller collections. This allows pause times to be limited. Incremental techniques almost always require one of a write barrier or a read barrier to prevent changes to the object connectivity graph mid-way through a collection causing the reachability results to be incorrect.

## Concurrent collection

A concurrent collector is one which can execute concurrently with a mutator thread. Even on moderately multi-processor systems, it usually does not make sense to dedicate an entire processor to running garbage collection. Therefore the typical concurrent collection is perhaps more accurately described as a highly incremental collection; each thread is assigned small units of garbage collection work to do along with its application work, so the garbage collection work is finely interleaved with application work. One way of thinking of this garbage collection work is as a 'tax' - threads have to do some garbage collection work in exchange for being able to allocate. As with incremental techniques, concurrent collections need a write- or read-barrier.

## Parallel collection

A parallel collector is one which divides the collection work so that multiple collector threads are collecting concurrently. This is counter-productive on single-threaded processors, but increasingly necessary as the number of processors in a system increases. On systems with many processors a single-threaded collector is unable to keep up with the amount of garbage the processors can produce.

Similar techniques are used to achieve incrementality, concurrency, and parallelism, so many collectors which have one of these properties also have some of the others.
