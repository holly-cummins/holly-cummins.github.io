---
title: "Garbage collection algorithms"
cover: pawel-czerwinski-RkIsyD_AVvc-unsplash.jpg
author: holly cummins
category: java
type: blog
---

Garbage collection has been the subject of much academic research . In particular, the volume of new techniques with various claimed properties is high enough that it is tempting to coin the phrase [YAGA (Yet Another GC Algorithm)](http://en.wikipedia.org/wiki/Another). For a pointer to many of these articles, see [Richard Jones' garbage collection bibliography.](http://www.cs.kent.ac.uk/people/staff/rej/gcbib/gcbibP.html)

## Garbage collection algorithms

Despite the large number of variants, most garbage collection algorithms fall into a few simple categories.

## Reference counting

Yes, reference counting is a form of garbage collection. It's sometimes seen as an alternative to garbage collection, and sometimes even as a morally superior alternative to garbage collection, but really, it's just a type of garbage collection algorithm.

Reference counting garbage collectors track the number of references to each object. Often the count is maintained in and by the object itself. When a new reference to an object is added, the reference count is incremented. When a reference is removed, the count is decremented. When the count reaches zero, the object is destroyed and the memory released. Reference counting fails when objects reference one another in a cycle. In these cases each object will be seen to be referenced and will never be freed, even if nothing references the cyclic structure.

Reference counting is unable to deal with cycles unless augmented with occasional invocations of another form of garbage collection. Reference counting has a number of other disadvantages, mostly to do with performance and bounding of work, and so it is rarely used in modern garbage collection systems. However, smart pointers in C++, while not traditionally considered a form of garbage collection, do make use of reference counting. Ad hoc garbage collectors introduced to manage object reachability in complex environments also tend to use reference counting since it is easily implemented in a hostile environment.

## Tracing collectors

Most garbage collectors perform some sort of tracing to determine object liveness. Tracing does not have the same problem with collecting cycles as reference counting does. However, tracing collectors are more sensitive to changes in the object graph and usually require the suspension of the application threads or close monitoring of application activity to ensure correctness.

### Mark-sweep

Mark-sweep collectors collect in two phases. In the first phase, all reachable objects are traced, begining from a set of roots. The roots are all objects which are guaranteed reachable, including objects referenced from the stack and static variables. Every object directly or indirectly reachable from a root is marked. Objects which do not end up marked are unreachable and therefore cannot be used again by the application, so they may safely be freed.

In the second phase of a mark-sweep collection, all unmarked objects are added to a free-list. Contiguous areas of free memory are merged on the free list.

### Mark-compact collectors

Mark-compact mark live objects using identical techniques to those used by mark-sweep collectors. However, mark-compact collectors do not use a free list. Instead, in the second phase all reachable objects are moved so that they are stored as compactly as possible. New allocation is then performed from the empty area of the heap.

Many collectors hybridise these two approaches, combining frequent sweeping with occasional compaction.

### Copying collectors

Copying collectors divide the heap into two areas, a to-space and from-space. All objects are allocated in the to-space. When the new space is full, a collection is performed and the spaces are swapped. All reachable objects in the to-space are copied to the from-space, which is declared the new to-space. New allocation is then performed in the new to-space.

Copying collectors have a number of advantages over marking collectors. 
Because copying is done in the same phase as tracing, it is not necessary to maintain a space-consuming list of which objects have been marked. Because no sweep is performed, the cost of the collection is proportional only to the amount of live data.

If most objects are unreachable, a copying collecton can be very efficient. The corollary is that if most objects remain reachable, or if some very large objects remain reachable, the collection will be woefully inefficient, because a large amount of memory will need to be copied every collection.

Copying collectors also keep the heap very compact, and this can boost allocation and application performance. However, because a completely empty from-space must be maintained at all times, copying collectors are not space-efficient. Modern collectors tend to estimate an object death-rate and maintain less than half the heap for the from-space accordingly. Copying collectors are also known as semispace collectors.

For a good overview of how this relates to the IBM JVM's garbage collection, see Mattias Persson's [developerWorks article](https://web.archive.org/web/20200616174904/http://www.ibm.com/developerworks/java/library/j-ibmjava2/).
