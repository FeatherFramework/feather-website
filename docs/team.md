---
layout: page
title: Team
# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Feather Team
  - - meta
    - property: og:description
      content: Unlock Boundless Possibilities with Feather Framework
  - - meta
    - property: og:image
      content: https://avatars.githubusercontent.com/u/140788019?s=200&v=4
  - - meta
    - name: title
      content: Feather Team
  - - meta
    - name: twitter:card
      content: https://avatars.githubusercontent.com/u/140788019?s=200&v=4
  - - link
    - rel: icon
      type: image/png
      href: logo.png
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const developers = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/10902965?v=4',
        name: 'Bytesizd',
        title: 'Lead Developer',
        links: [
          { icon: 'github', link: 'https://github.com/andrewr3k' },
          { icon: 'youtube', link: 'https://www.youtube.com/channel/UCmuccaVOwak0R3m0q9dyodA' }
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/47730893?s=96&v=4',
        name: 'SavSin',
        title: 'Senior Developer',
        links: [
          { icon: 'github', link: 'https://github.com/DavFount' }
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/119366047?v=4',
        name: 'Jake2k4',
        title: 'Developer',
        links: [
          { icon: 'github', link: 'https://github.com/jakeyboi1' },
          { icon: 'youtube', link: 'https://youtube.com/@Jake2k4-id9ym' }
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/37031311?s=96&v=4',
        name: 'Apollyon',
        title: 'Developer',
        links: [
          { icon: 'github', link: 'https://github.com/JusCampin' }
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/82676805?v=4',
        name: 'Jannings',
        title: 'Developer',
        links: [
          { icon: 'github', link: 'https://github.com/BurntJannings' }
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/9192488?v=4',
        name: 'Elzetia',
        title: 'Developer',
        links: [
          { icon: 'github', link: 'https://github.com/elzetia' }
        ]
    }
]
const designers = [
    {
        avatar: 'https://cdn.discordapp.com/attachments/1032364319633063938/1121850274278031451/Lady_Grey_character_portrait_strawberry_blonde_woman_smoking_ba_62316436-149c-48b3-835d-805edd5b4b9e.PNG',
        name: 'Lady Grey',
        title: 'Lead Designer'
    }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead></template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Developers</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="developers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Designers</template>
    <template #lead></template>
    <template #members>
      <VPTeamMembers size="medium" :members="designers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
