---
layout: doc
title: API Docs

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Feather Framework Docs
  - - meta
    - property: og:description
      content: Official Feather Framework Documentation
  - - meta
    - property: og:image
      content: https://avatars.githubusercontent.com/u/140788019?s=200&v=4
  - - meta
    - name: title
      content: Official Feather Framework Documentation
  - - meta
    - name: twitter:card
      content: https://avatars.githubusercontent.com/u/140788019?s=200&v=4
  - - link
    - rel: icon
      type: image/png
      href: logo.png
---

# Feather Core Docs <Badge type="warning" text="alpha" />
> Welcome to Feather Core, the beating heart of the Feather Framework; An extraordinary open-source RedM framework designed to bring our ultimate RedM server visions to life.

## Initialize The Core

_This is the first action you must take before using any of our APIs_

```lua
FeatherCore =  exports['feather-core'].initiate()
```

## Help Us Out By Contributing

<div class="max-w-xl rounded-lg overflow-hidden mx-auto my-20">
  <div class="text-center flex items-center justify-center">
    <div class="max-w-md">
      <img src="/oss.png" class="mx-auto min-w-20 prevent-select"/>
      <h1 class="text-5xl font-bold prevent-select tert-clip">Open Source. Free. Always.</h1>
      <p class="py-6 prevent-select">Our framework is made and maintained purely as a labor of love, driven by the community with passion for roleplaying and the desire to share our creations with others. We offer this framework and sctripts freely and as a way to contribute to the community and help others explore and enjoy the art of roleplaying and programming.</p>
      <button class="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-full" @click="actionClicked">Help Contribute</button>
    </div>
  </div>
</div>