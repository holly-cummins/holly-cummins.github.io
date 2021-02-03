---
title: Serverless doesn't have servers, except when it does
category: "cloud native"
cover: boba-jovanovic-FtRkRespN24-unsplash.jpg
author: holly cummins
type: blog
---

Let’s talk about the naming challenges around serverless. For a while, we stopped calling it ‘serverless’ and started calling it ‘functions as a service’., or FaaS. I don’t have evidence, but I assume that the big naming committee in the sky rebranded just to stop people piping up with “but serverless actually has servers, you know” every time the topic came up.

But there was a problem. For some use cases, running a function is fine. But free-floating functions aren’t so great for local testing. Complex dependencies also get awkward.

Why insist on functions, when we have containers? They’re light, portable, totally encapsulated, and ubiquitous. The only problem? What do we call it? Serverless is a ridiculous name for something which has a server. Serverless-but-with-a-server doesn’t roll off the tongue. Function as a service makes no sense, because it’s _not a function_.

One idea which got floated was [‘funtainer’](https://thenewstack.io/funtainers-beauty-running-containers-functions/) . This was pre-Knative, and waaay before this month’s Amazon Lambda container-support news. At the time, it was OpenWhisk, Spotinst, and OpenFaaS.
Funtainer isn’t ‘a container which is lots of fun’, it’s a mash-up of ‘function’ and ‘container’.

But there’s a problem. SEO.
Try googling for ‘funtainer’. You’ll get a lot of cheerful-looking Thermoses, and nothing about the cloud architectures. Apparently ‘funtainer’ is Thermos’s fun-container (as in, actual fun, or as much actual fun as you can have with an insulated drink container).

No problem, you can refine the search. What about ‘cloud funtainer’? You get a Thermos with a picture of a cloud on it.

And this is why Knative describes itself as ‘serverless’.

Another way of describing serverless, which involves less head-warping ‘there are no servers visible to the developer, but there are servers underneath, and actually the developer sees and defines those servers’, is this: [“Billing per request rather than per instance”](http://twitter.com/tef_ebooks/status/1339151538917355520).

But there’s still a problem. A managed [Knative](https://knative.dev), like IBM’s [Code Engine](https://www.ibm.com/cloud/blog/ibm-cloud-code-engine-enjoy-your-cloud-again) (yay!), has billing, and it’s per request. If you run Knative in your own cluster, there’s not going to be any billing, unless you’re really really good at FinOps. Knative itself doesn’t ship with any billing support, so it can’t use that in the description.

And this is why Knative still describes itself as ‘serverless’.

Photo by Boba Jovanovic on [Unsplash](https://unsplash.com/photos/FtRkRespN24).
