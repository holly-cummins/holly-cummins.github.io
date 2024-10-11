It's the spookiest time of year! 
You might think spookiness and tech are unrelated, but you'd be wrong. 
Well, actually, you'd probably be right, but I'm not going to let that stop me writing Hallowe'en-themed [talks about getting cloud native wrong](blood-curdling-tales-of-microservices-misadventure-devops-dread-and-grisly-governance-software-circus), and Hallowe'en-themed talks about the [importance of TestContainers cleanup logic](death-and-software).

This year, I've been thinking about zombies, vampires, and ghosts.
Zombies in movies are scary, but (spoiler) _they don't exist_. 
Same for vampires.
And ghosts, if it comes down to it. 

But in the tech world, these monsters do exist. 
And they're pretty bad. 
Maybe not ripping-your-head off bad, but definitely bad enough to be worth exorcising.

## Vampire code

Let's start off by talking about code. 
Because we, as developers, work hard to write code, it seems like code must be an asset.
It's not. 
Code is a liability. Every bit of code we produce needs to be maintained.
Code increases the attack surface of applications, creates cognitive load for developers, and slows down compilation. Ugh. Who'd want code?

Martijn Verburg once said that he paid his junior developers by how much code they wrote, and his senior developers by how much code they deleted. 
People sometimes compare working with an LLM to pair programming with a very enthusiastic junior developer. 
The model will get excited by your request and produce _as much code as it possibly can_. 
I suspect something in the mathematics of how these models are trained biases them towards verbosity. I saw this anecdotally when I generated a Quarkus application and 70% of the generated code was unnecessary. 
The Hibernate with Panache libraries eliminate the need for boilerplate code, but the AI assistant put it in anyway. 

Statistical analysis of codebases seems to confirm my intuition. [An study by GitClear](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) found that codebases today have more duplicated code than they did before people started using tools like CoPilot and ChatGPT. 
They also found a reduction in the number of commits which deleted code. 
 As developers, we spend far more time reading code than writing code, so this excess code becomes an ongoing drain on developer time. 

Code can be vampire code even if it needs to be in the codebase. 
All but the smallest libraries usually include files and functions which a particular application doesn't use. 
Even though they're unused, these unused libraries still have a cost. 

They increase the size of the packaged application, which means increased network traffic for consumers. 
For Javascript libraries, which will be downloaded every single time a web page loads, this bloat means a lot of energy consumption. 

Extra code can also mean extra memory footprint; for example, the Java runtime will load unused database support classes into memory as part of the Hibernate bootstrap process. The classes will then be unloaded, but that doesn't help the "high tide" memory requirements. 

Extra code can even slow applications down. For example, in Java, the process of invoking an interface method on an object is slower if multiple possible implementations exist on the classpath. 
If the JVM has to choose between several implementations it is called megamorphic dispatching. 
It's slower than the single implementation case, monomorphic dispatching. 

The good news is that there is a solution. In the Javascript case, the build tooling will usually do a process called tree-shaking, which strips unused code. 
Historically, Java did not have a similar process, but that's now changing.
For example, building a GraalVM native binary will aggressively eliminate unused code. 
Project Leyden may also some tree-shaking ideas to the JVM itself. 

At a level above the runtime, the Quarkus architecture is designed to reduce vampire code.  
Quarkus applies a number of build-time optimisations to applications, and libraries can participate in this optimisation process through extensions.  
For example, all of those undead database support classes in Hibernate? 
The Quarkus Hibernate extension makes sure they never make it into the built application. 
Think of Quarkus's build architecture as an extensible wooden stake.
 
## Zombies

Vampire code happens when a portion of an application's codebase is unneeded. 
Zombies happen when the _entire_ application is unneeded. 
By extension, not only is the application wasting resources, so is all the infrastructure running it. 

How could a whole application be unused? 
Usually, this happens when things are forgotten. 
It may be that something was originally well-used, but then processes changed. 
Or perhaps an application was put into staging, but never progressed to production, but never got torn down, either. 

Over-provisioning also causes zombies. 
In order to make sure they're not the person who provisioned too little infrastructure and caused an outage, many groups will err on the side of caution and provision too much. 

How bad is the zombie menace?
It's bad. 
[NRDC research](https://www.nrdc.org/sites/default/files/data-center-efficiency-assessment-IB.pdf) concluded that the average server was running at 12-18% of maximum capacity. 
That might be ok, except running with such low utilization still uses 30-60% of maximum power. 
Building an unused server also emits the same amount of carbon and consumes the same amount of natural resources as building a well-used server.
A [2017 survey](https://www.anthesisgroup.com/wp-content/uploads/2019/11/Comatose-Servers-Redux-2017.pdf) found that, over a six month period, 29% of servers had utilisation less than 5%.   
A quarter of the servers had no utilization at all; they were _completely unused_. 

That quarter figure is the average over a large sample. In some cases, the proportion of zombies can be much higher. 
_Building Green Software_ shares the story of a VMWare data centre in Singapore. 
The data centre was being physically moved, and so before doing the move, the team checked what was running on the machines. 
Rather incredibly, 66% of all the host machines were zombies. That's a full-on _Twenty Eight Days Later_ scenario, in which the zombies outnumber the value-creating machines.

Hunting down zombie servers isn't trivial; kind of by definition, forgotten servers are hard to find.  
The reason VMWare found them was because the move forced a clear-out. 
Otherwise, who knows how long the useless servers might have hung around. 
Regular audits of an estate can help, but are pretty boring to execute.
As a more interesting alternative, consider deploying elastic scaling solution, or even fully-fledged autonomic resource optimisation. 
Infrastructure as code can help make it easier to keep tabs on what's being run, and ephemeral leasing can help hurry the release of systems which aren't actually needed anymore.

## 

Vampire code, zombie servers, and ghost packets use resources, with no benefit. 