---
author: holly cummins
title: NLJUG academy masterclass – Create Java-based AI applications with Quarkus and LangChain4j
category: ai
type: talk
event: NLJUG
location: Utrecht
slides:
  url: https://speakerdeck.com/hollycummins/create-java-based-ai-applications-with-quarkus-and-langchain4j
code:
  - title: "The samples shown in the talk"
    url: "https://github.com/kdubois/quarkus-langchain4j-samples"
  - title: "A simple application using LangChain4j and Podman AI Lab"
    url: "https://github.com/kdubois/quarkus-langchain4j-samples"
  - title: "A self-paced Quarkus + LangChain4j workshop"
    url: https://cescoffier.github.io/quarkus-langchain4j-workshop/ 
resources:
  - title: "Red Hat Developer Quarkus Tutorial (including AI)"
    url: "https://redhat-developer-demos.github.io/quarkus-tutorial/quarkus-tutorial/17_prompts.html" 
---

Generative AI has taken the world by storm over the last year, and it seems like every executive leader out there is telling us “regular” Java application developers to “add AI” to our applications. Does that mean we need to drop everything we’ve built and become data scientists instead now?

Fortunately, we can infuse AI models built by actual AI experts into our applications in a fairly straightforward way, thanks to some new projects out there. We promise it’s not as complicated as you might think! Thanks to the ease of use and superb developer experience of Quarkus and the nice AI integration capabilities that the LangChain4j libraries offer, it becomes trivial to start working with AI and make your stakeholders happy :)

In this session, you’ll explore a variety of AI capabilities. We’ll start from the Quarkus DevUI where you can try out AI models even before writing any code. Then we’ll get our hands dirty with some code and exploring LangChain4j features such as prompting, chaining, and preserving state; agents and function-calling; enriching your AI model’s knowledge with your own documents using retrieval augmented generation (RAG); and discovering ways to run (and train) models locally using tools like Ollama and/or Podman AI Lab.