---
type: "talk"
category: "testing"
title: "Uh, Does This Thing Actually Work? Modern Microservices Testing"
event: "J-Spring"
location: Utrecht
slides:
  url: https://speakerdeck.com/hollycummins/uh-does-this-thing-actually-work-modern-microservices-testing-b78a3cbc-2a4e-4725-a17e-ed27c8bc7ddc
code:
  - title: "Example Pact contract testing application"
    url: "https://github.com/holly-cummins/house-of-microservices-quarkus-contract-testing-sample"
tweets:
  - https://www.linkedin.com/feed/update/urn:li:activity:7077377869605138432/
  - https://www.linkedin.com/feed/update/urn:li:activity:7077377869605138432/
  - https://www.linkedin.com/feed/update/urn:li:activity:7077597014753992704/

---
To realise the promise of microservices, individual services must be independently deployable, and they should be deployed often. But that’s easier said than done.
Releases take confidence.

How does a business achieve enough confidence to release often without getting bogged down in manual QA bottlenecks? Is automating tests too expensive? How do services know if they’ve made a breaking change? If the individual microservices all work, does that mean the system works?

This talk discuss microservices testing strategies and explore some of the modern tools which make testing easier and better. And there’s a demo: Holly will show Pact contract testing, test containers, and Quarkus’s continuous testing and dev services support.