---
layout: page
title: Roadmap
# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Feather Roadmap
  - - meta
    - property: og:description
      content: A roadmap for the RedM Feather Framework
  - - meta
    - property: og:image
      content: https://avatars.githubusercontent.com/u/140788019?s=200&v=4
  - - meta
    - name: title
      content: Feather Roadmap
  - - meta
    - name: twitter:card
      content: https://avatars.githubusercontent.com/u/140788019?s=200&v=4
  - - link
    - rel: icon
      type: image/png
      href: logo.png
---

<script setup>

const roadmap = [
    {
        circle: "Jan",
        title: 'January 2024',
        objectives: [
            {
                icon: 'milestone',
                header: 'Releases to Alpha',
                sub_objects: [
                    {
                        icon:  'default',
                        header: 'Feather Core'
                    },
                    {
                        icon:  'default',
                        header: 'Feather Admin'
                    },
                    {
                        icon:  'default',
                        header: 'Feather Recipe'
                    }
                ]
            },
            {
                icon:  'start',
                header: 'Feather Inventory Begins Development'
            }
        ]
    },
    {
        circle: "Feb",
        title: 'February 2024',
        objectives: [
            {
                icon:  'default',
                header: 'Feather Character Continues Development'
            },
            {
                icon:  'default',
                header: 'Feather Inventory Continues Development'
            }
        ]
    },
    {
        circle: "Mar",
        title: 'March 2024',
        objectives: [
             {
                icon:  'default',
                header: 'Feather Character Continues Development'
            },
            {
                icon:  'default',
                header: 'Feather Inventory Continues Development'
            }
        ]
    },
    {
        circle: "Apr",
        title: 'April 2024',
        objectives: [
            {
                icon:  'default',
                header: 'Feather Character Continues Development'
            },
            {
                icon:  'default',
                header: 'Feather Inventory Continues Development'
            }
        ]
    },
    {
        circle: "May",
        title: 'May 2024',
        objectives: [
            {
                icon:  'start',
                header: 'Feather Weapons begins development'
            },
            {
                icon:  'default',
                header: 'Feather Character Continues Development'
            },
            {
                icon:  'default',
                header: 'Feather Inventory Continues Development'
            }
        ]
    },
    {
        circle: "Jun",
        title: 'June 2024',
        objectives: [
            {
                icon: 'milestone',
                 header: 'Releases to Alpha',
                sub_objects: [
                    {
                        icon:  'default',
                        header: 'Feather Character'
                    },
                    {
                        icon:  'default',
                        header: 'Feather Inventory'
                    },
                    {
                        icon:  'default',
                        header: 'Feather Weapons by end of the month'
                    }
                ]
            }
        ]
    },
    {
        circle: "Jul",
        title: 'July 2024',
        objectives: [
            {
                
                icon: 'milestone',
                header: 'Feather Menu 2.0',
                sub_objects: [
                    {
                        icon:  'default',
                        header: 'Combine feather-progressbars into Feather Menu'
                    },
                    {
                        icon:  'default',
                        header: 'Custom Fonts'
                    },
                    {
                        icon:  'default',
                        header: 'Custom Themes'
                    }
                ]
            },
            {
                icon: 'milestone',
                header: 'Feather Framework enters Beta and releases to the public!'
            },
            {
                icon:  'default',
                header: 'All Feather documentation updated'
            },
            {
                icon:  'start',
                header: 'Begin porting all BCC scripts to Feather'
            },
            {
                icon:  'start',
                header: 'Create new Feather + BCC recipe'
            }
        ]
    },
    {
        circle: "Aug",
        title: 'August 2024',
        objectives: []
    },
    {
        circle: "Sep",
        title: 'September 2024',
        objectives: []
    },
    {
        circle: "Oct",
        title: 'October 2024',
        objectives: [
            {
                icon:  'default',
                header: 'First candidate date for Feather Framework full release out of Beta'
            }
        ]
    },
    {
        circle: "Nov",
        title: 'November 2024',
        objectives: [
        ]
    },
    {
        circle: "Dec",
        title: 'December 2024',
        objectives: [
            {
                icon:  'default',
                header: 'Second candidate date for Feather Framework full release out of Beta'
            },
            {
                icon:  'default',
                header: 'Apply for txadmin recipe listing'
            }
        ]
    }
]
</script>

<!-- component -->
<div class="container mx-auto w-full h-full">
  <div class="relative wrap overflow-hidden p-4 md:p-10 h-full">
    <div class="border-2-2 absolute border-opacity-80 border-primary h-full border" style="left: 50%"></div>
    <div v-for="(rm, index) in roadmap" :key="index">
        <div :class="`mb-8 flex justify-between items-center w-full ${index%2 ? 'right-timeline' : 'flex-row-reverse left-timeline' }`">
            <div class="order-1 w-5/12"></div>
            <div style="margin-left: 1px; background-color: var(--vp-c-bg);" class="z-20 flex items-center order-1 shadow-xl w-10 h-10 md:w-20 md:h-20 rounded-full border-2 border-primary">
                <div class="mx-auto font-semibold text-sm md:text-lg" style="color: var(--vp-c-text-1);">{{rm.circle}}</div>
            </div>
            <div :class="`order-1 bg-slate-800 rounded-lg shadow-xl w-5/12 px-4 py-2 md:px-6 md:py-4 border-2 border-primary`">
                <h3 :class="`mb-3 font-bold text-white text-sm md:text-xl `">{{rm.title}}</h3>
                <ul>
                    <li v-for="(objective, i) in rm.objectives" :key="i" class="mb-4">
                        <div class="flex items-top">
                            <svg v-if="objective.icon == 'default'" class="w-4 h-4 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ff79ba" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            <svg  v-if="objective.icon == 'milestone'" class="w-4 h-4 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ff79ba" d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1V345.8c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V400 334 64 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9v65.5L64 252.6V318l48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3V238.7l38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9v66.7l-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8v71.4c21.8 1.9 43.3 6.7 64 14.4V244.2l22.7 6.7c13.5 4 27.3 6.4 41.3 7.4V194c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12v-62c-13-3.8-25.8-8.8-38.2-15c-8.2-4.1-16.9-7-25.8-8.8v72.4c-13-.4-26 .8-38.7 3.6L128 173.2V98L64 114v73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2V251.9l-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5v77.4zm64-149.4V115.4c-20.9 6.1-42.4 9.1-64 9.1V194c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z"/></svg>
                            <svg v-if="objective.icon == 'start'" class="w-4 h-4 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ff79ba" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
                            <span :class="`text-xs md:text-sm text-white leading-snug tracking-wide text-opacity-100`">{{objective.header}}</span>
                        </div>
                        <ul class="ml-2 md:ml-4">
                            <li v-for="(sub, i) in objective.sub_objects" :key="i" class="flex items-top mt-2 md:mt-4">
                                <svg class="w-4 h-4 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#3eb5d9" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"/></svg>
                                <span :class="`text-xs md:text-sm text-white leading-snug tracking-wide text-opacity-100`">{{sub.header}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</div>
