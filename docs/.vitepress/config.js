import { getSidebar } from "vitepress-plugin-auto-sidebar";

export default {
  base: "/",
  title: "Feather Framework",
  description: "Feather Framework",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "64x64", href: "/logo.png" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css",
      },
    ],
  ],
  themeConfig: {
    logo: "/logosimple.png",
    editLink: {
      pattern:
        "https://github.com/FeatherFramework/feather-website/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    siteTitle: "Feather Framework",
    outline: "deep",
    nav: [
      { text: "Setup Guide", link: "/guide" },
      { text: "Docs", link: "/api" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/FeatherFramework" },
      { icon: "discord", link: "https://discord.gg/GuwS7Y7PA3" },
    ],
    sidebar: {
      "/api/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api"],
        collapsible: true,
        collapsed: false,
      }),
      "/api": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api"],
        collapsible: true,
        collapsed: false,
      }),
    },
    footer: {
      message: "Released under the GNU General Public License v3.0.",
      copyright: 'Copyright © 2023-present <a class="text-primary" href="https://github.com/BryceCanyonCounty">Bryce Canyon County Scripts</a>',
    },
  },
};
