---
title: "Java basics: converting a collection to a string"
cover: tara-evans-G-AQWUTgMZo-unsplash.jpg
author: holly cummins
category: java
type: blog
---

If you look up how to write a map or a list out as a string, you can find lots of complicated answers involving loops and even XMLEncoders. It doesn't have to be that hard. The easiest way to convert a Map into a nice string?

`String niceString = Arrays.toString(map.entrySet().toArray());`

It's even easier for a list:

`String niceString = Arrays.toString(list.toArray());`

Ta-daaa!
