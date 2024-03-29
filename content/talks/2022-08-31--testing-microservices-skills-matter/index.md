---
author: holly cummins
category: microservices
type: talk
event: Skills Matter Java Forum
title: Uh, Does This Thing Actually Work? Modern Microservices Testing
slides:
  url: https://speakerdeck.com/hollycummins/uh-does-this-thing-actually-work-modern-microservices-testing
video:
  url: https://www.youtube.com/watch?v=vts6TdJch3M
code:
  - title: "Example Pact contract testing application"
    url: "https://github.com/holly-cummins/house-of-microservices-quarkus-contract-testing-sample"
tweets:
  - https://twitter.com/skillsmatter/status/1564981556040564736?s=21&t=sC13HWh-VPD1MLfuBjHCqg
  - https://twitter.com/holly_cummins/status/1564991413749702657?s=21&t=sC13HWh-VPD1MLfuBjHCqg

---
To realise the promise of microservices, individual services must be independently deployable, and they should be deployed often. 
But that’s easier said than done. 
Releases take confidence. 
How does a business achieve enough confidence to release often without getting bogged down in manual QA bottlenecks? 
Is automating tests too expensive? How do services know if they’ve made a breaking change? 
If the individual microservices all work, does that mean the system works? 
This talk discuss microservices testing strategies and explore some of the modern tools which make testing easier and better. 
And there’s a demo: Holly will show Pact contract testing, test containers, and Quarkus’s continuous testing and dev services support.