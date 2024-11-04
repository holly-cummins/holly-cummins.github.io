---
author: holly cummins
title: "Zombie Menace, Vampire Peril"
category: sustainability
type: blog
cover: vampire.png
tweets:
  - https://x.com/P_Ensarguet/status/1847240872418594868
---

It's the spookiest time of year! 
You might think spookiness and tech are unrelated, but you'd be wrong. 
Well, actually, you'd probably be right, but I'm not going to let that stop me writing Hallowe'en-themed [talks about getting cloud native wrong](/blood-curdling-tales-of-microservices-misadventure-devops-dread-and-grisly-governance-software-circus), and Hallowe'en-themed talks about the [importance of TestContainers cleanup logic](/death-and-software).

This year, I've been thinking about zombies and vampires.
Zombies in movies are scary, but (spoiler) _they don't exist_. 
Same for vampires.

But in the tech world, these monsters do exist. 
And they're pretty bad. 
Maybe not ripping-your-head off bad, but definitely bad enough to be worth exorcising.

## Vampire code

![a stick-figure vampire whose cape is covered in code](vampire.png)   

Let's start off by talking about code. 
As developers, we work really really hard to create code. So many of us assume code must be an asset.
It's not. 

Code is a liability. Every bit of code we produce needs to be maintained.
Code increases the attack surface of applications, creates cognitive load for developers, and slows down compilation. Ugh. Who'd want code?

Martijn Verburg once said that he paid his junior developers by how much code they wrote, and his senior developers by how much code they deleted. 
People sometimes compare working with an LLM to pair programming with a very enthusiastic junior developer. 
The model will get excited by your request and produce _as much code as it possibly can_. 
I suspect something in the mathematics of how these models are trained biases them towards verbosity. I saw this anecdotally when I generated a Quarkus application and 70% of the generated code was unnecessary. 
The Hibernate with Panache libraries eliminate the need for boilerplate code, but the AI assistant put all the boilerplate in anyway. 

Statistical analysis of codebases seems to confirm my intuition. [A study by GitClear](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) found that codebases today have more duplicated code than they did before developers started using tools like CoPilot and ChatGPT. 
They also found a reduction in the number of commits which deleted code. 
 As developers, we spend far more time reading code than writing code, so this excess code becomes an ongoing drain on developer time. 

Code can be vampire code even when it actually is needed in the codebase. 
All but the smallest libraries usually include files and functions which a particular consumer application might not use. 
Even though they're unused, these dormant bits of code still have a cost. They increase the size of the packaged application, which means increased network traffic for users. 
This is extra bad for Javascript libraries, which will be downloaded every single time a web page loads.
The code bloat doesn't just make page load slower, it uses energy. 

Extra code can also mean extra memory footprint; for example, the Java runtime will load unused database support classes into memory as part of the Hibernate bootstrap process. The classes will then be unloaded, but by then it's too late; the peak memory requirement has been set high. 

Extra code can even slow applications down. For example, in Java, the process of invoking an interface method on an object is slower if multiple possible implementations exist on the classpath. 
If the JVM has to choose between several implementations, that's called megamorphic dispatching. 
It's slower than the single implementation case, monomorphic dispatching. 

The good news is that there is a solution. 
For Javascript, where extra code has such an obvious bad impact, most modern build tooling will do a process called tree-shaking, which strips unused code. 
Historically, Java did not have a similar process, but that's now changing.
For example, building a GraalVM native binary will aggressively eliminate unused code. 
Project Leyden may also some tree-shaking ideas to the JVM itself. 

At a level above the runtime, the Quarkus architecture is designed to reduce vampire code.  Quarkus applies a number of build-time optimisations to applications, and libraries can participate in this optimisation process through extensions.  
For example, all of those undead database support classes in Hibernate? 
The Quarkus Hibernate extension makes sure they never make it into the built application. 
Think of Quarkus's build architecture as an extensible wooden stake.
 
## Zombie servers

![a stick-figure zombie that looks a bit like a server](zombie.png)   

Vampire code happens when a portion of an application's codebase is unneeded. 
Zombies happen when the _entire_ application is unneeded. 
By extension, not only is the application wasting resources, so is all the infrastructure running it. 

How could a whole application be unused? 
Usually, the root cause is forgetfulness: individual forgetfulness, and also organisational forgetfulness. 
It may be that something was originally well-used, but then processes changed. 
Or perhaps a prototype was put into staging, and never progressed to production, but never got torn down, either. 

Over-provisioning also causes zombies. 
Organisational incentive structures encourage over-provisioning, 
because no one wants to be the person who provisioned too little infrastructure and caused an outage. 
To avoid this career-limiting situation, many people will err on the side of caution and configure far too much capacity. 

How bad is the zombie menace?
It's bad. 

[NRDC research](https://www.nrdc.org/sites/default/files/data-center-efficiency-assessment-IB.pdf) concluded that the average server was running at 12-18% of maximum capacity. 
That wouldn't be terrible, except a machine running with such low utilization still uses 30-60% of its maximum power. (This ratio is called "energy proportionality," if you want to bring out the technical terms.)
Things are even more disproportionate when we look at the hardware side. Building an unused server emits _exactly_ the same amount of carbon and consumes the same amount of natural resources as building a well-utilised server. The cost to us and the planet is the same, but the value is far far lower. 

A 2017 survey from the Anthesis Institute found that, over a six month period, 29% of servers had utilisation less than 5%.
A quarter of the servers had no utilization at all; they were _completely unused_. 

That quarter figure is the average over a large sample, and included a number of different companies. In some unlucky organisations, the proportion of zombies can be higher. 
Like, much much higher.
_Building Green Software_ shares the story of a VMWare data centre in Singapore. 
The data centre was being physically moved, and so before doing the move, the team checked what was running on the machines. 
Rather incredibly, 66% of all the host machines were zombies. That's a full-on _Twenty Eight Days Later_ scenario, in which the zombies outnumber the value-creating machines.

Hunting down zombie servers isn't trivial; kind of by definition, forgotten servers are hard to find. 
The reason VMWare discovered them was because the physical move forced a virtual clear-out. 
Otherwise, who knows how long the useless servers might have hung around? 
Regular audits of an estate can help, but, regrettably, they are pretty boring to execute.
As a more intellectually rewarding alternative, consider deploying elastic scaling solution, or even fully-fledged autonomic resource optimisation. 
Infrastructure-as-code can help make it easier to keep tabs on what's being run, and ephemeral leasing can help hurry the release of systems which aren't actually needed anymore.

Vampire code and zombie servers are, fundamentally, wasteful. 
They use resources and have no value. 
That waste costs us money, but it also threatens the planet. 
Why not organise a few trick-or-treating expeditions to hunt down those under-utilized servers and useless lines of code?
