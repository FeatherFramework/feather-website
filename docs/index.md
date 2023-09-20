---
layout: home
title: Home

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Feather Framework
  - - meta
    - property: og:description
      content: Unlock Boundless Possibilities with Feather Framework
  - - meta
    - property: og:image
      content: https://avatars.githubusercontent.com/u/140788019?s=200&v=4
  - - meta
    - name: title
      content: Feather Framework
  - - meta
    - name: description
      content: Unlock Boundless Possibilities with Feather Framework
  - - meta
    - name: twitter:card
      content: https://avatars.githubusercontent.com/u/140788019?s=200&v=4
  - - link
    - rel: icon
      type: image/png
      href: logo.png

# Hero section
hero:
  name: Feather Framework
  text: Unlock Boundless Possibilities for your server
  image:
    src: /logo2.png
    alt: Feather Framework logo
  tagline: Where Passion Meets Code, and Community Thrives
  actions:
    - theme: brand
      text: Get Started
      link: /guide
    - theme: alt
      text: View on GitHub
      link: https://github.com/FeatherFramework

# Features section
features:
  - icon: 🎨
    title: Unleash Infinite Creativity
    details: With our framework, customization knows no bounds. Craft a unique experience that mirrors your vision, effortlessly.
  - icon: 🤝
    title: Building Dreams Together
    details: Join a thriving community where passionate scripters unite. Share knowledge, pool resources, and create something extraordinary.
  - icon: ⚡
    title: Power and Performance Unleashed
    details: Our framework is finely tuned for optimal performance. Elevate your server's capabilities and deliver an unparalleled gaming experience.
---

<script setup>
  const actionClicked = () => {
    window.open('https://github.com/FeatherFramework', "_blank");
  }

</script>

<div class="max-w-xl rounded-lg overflow-hidden mx-auto my-20">
  <div class="text-center flex items-center justify-center">
    <div class="max-w-md">
      <img src="/oss.png" class="mx-auto min-w-20 prevent-select"/>
      <h1 class="text-5xl font-bold prevent-select tert-clip">Open Source. Free. Always.</h1>
      <p class="py-6 prevent-select">Our RedM roleplay scripts are made and maintained purely as a labor of love, driven by the community with passion for roleplaying and the desire to share our creations with others. We offer them freely and as a way to contribute to the community and help others explore and enjoy the art of roleplaying and programming.</p>
      <button class="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-full" @click="actionClicked">Help Contribute</button>
    </div>
  </div>
</div>
