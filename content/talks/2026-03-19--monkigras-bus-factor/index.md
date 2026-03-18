---
author: Sanne Grinovero and holly cummins
title: Fixing The Open Source Bus Number
category: open source
type: talk
event: Monki Gras
location: London

slides:
  url: https://speakerdeck.com/hollycummins/fixing-the-open-source-bus-number

---


Open source is a marvellous multiplier which amplifies our collective productivity by allowing us to code on the
shoulders of giants. It has clear benefits for business continuity.

But things can go wrong. Many critical projects have just one or two maintainers (we’ve all seen the xkcd cartoon about
modern digital infrastructure, haven’t we?). Sometimes those maintainers no longer have time, or burn out. At the other
end of the spectrum, even projects with many active contributors can grind to a halt with the contributors all work for
the same employer, and that employer changes their business priorities. Investment can dry up or the licence can change.
After all, the business environment for open source is tough these days.

What can be done?

The classic solution for increasing a team’s bus number is to use pair programming to share knowledge. In the
asynchronous and distributed world of open source, pair programming can work, but it’s harder – and it can’t fix
changing business realities or hostile licence changes.

This talk will discuss some of the strategies used by the Quarkus team to help ensure our open source community is
prepared … for almost anything. These include

- Using GitHub organisations to allow independent contributions with a ‘safety’ backup if maintainers disappear
- Productising dependencies so that anything in the stack can be rebuilt to address vulnerabilities; this helps with
  security, and also helps with investment
- Joining the Commonhaus foundation to ensure Quarkus can’t ever be owned by a single company

Some of these have been easy, some have been tough (the logistics of moving to a foundation are not for the
faint-hearted). In this talk, Holly and Sanne will reflect on what’s worked well, what’s transferrable, and how all of
us can be prepared for the future of open source.