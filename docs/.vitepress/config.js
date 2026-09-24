export default {
  base: "/",
  title: "Feather Framework",
  description: "A modular, open-source RedM framework for server owners and developers.",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "64x64", href: "/logo.png" },
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
      { text: "Set up", link: "/guide" },
      { text: "Documentation", link: "/api" },
      { text: "Roadmap", link: "/roadmap" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/FeatherFramework" },
      { icon: "discord", link: "https://discord.gg/zBCPbPJGZw" },
    ],
    sidebar: {
      "/api": [
        {
          text: "Documentation",
          items: [
            { text: "Overview", link: "/api" },
            { text: "Stable Error Codes", link: "/api/Error-Codes" },
          ],
        },
        {
            text: "Database",
            collapsed: false,
            items: [
                { text: "MySQL", link: "/api/Mysql" },
            ],
        },
        {
          text: "Framework Core",
          collapsed: false,
          items: [
            { text: "Core Reference", link: "/api/resources/Core" },
            { text: "Initialization", link: "/api/Initialize" },
            { text: "Locale", link: "/api/Locale" },
            { text: "RPC", link: "/api/RPC" },
            { text: "Events", link: "/api/Events" },
          ],
        },
        {
          text: "Framework Resources",
          collapsed: false,
          items: [
            { text: "Admin", link: "/api/resources/Admin" },
            { text: "Character", link: "/api/resources/Character" },
            { text: "HUD", link: "/api/resources/HUD" },
            { text: "Inventory", link: "/api/Inventory" },
            { text: "Menu v2", link: "/api/resources/Menuv2" },
            { text: "Legacy: Menu v1", link: "/api/resources/Menuv1" },
            { text: "Notify", link: "/api/resources/Notify" },
            { text: "PVP", link: "/api/resources/PVP" },
            { text: "Roles", link: "/api/resources/Roles" },
            { text: "Routing", link: "/api/resources/Routing" },
            { text: "Settings", link: "/api/resources/Settings" },
            { text: "Versioner", link: "/api/resources/Versioner" },
            { text: "World", link: "/api/resources/World" },
          ],
        },
        {
          text: "Developer Toolkit",
          collapsed: false,
          items: [
            { text: "Toolkit Overview", link: "/api/toolkit/Overview" },
            { text: "Models & Entities", link: "/api/toolkit/Models-and-Entities" },
            { text: "Blips", link: "/api/toolkit/Blips" },
            { text: "Controls & Keys", link: "/api/toolkit/Controls-and-Keys" },
            { text: "Prompts", link: "/api/toolkit/Prompts" },
            { text: "Rendering & Clipboard", link: "/api/toolkit/Rendering-and-Clipboard" },
          ],
        },
        {
          text: "Legacy & Review",
          collapsed: true,
          items: [
            { text: "REVIEW — Discord Webhooks", link: "/api/Discord-Webhooks" },
            { text: "REVIEW — Files", link: "/api/Files" },
            { text: "REVIEW — Math", link: "/api/Math" },
            { text: "REVIEW — User", link: "/api/User" },
            { text: "REVIEW — Useful Links", link: "/api/Useful-Links" },
            { text: "ProgressBar", link: "/api/Progressbar" },
          ],
        },
      ],
    },
    footer: {
      message: "Open source under the GNU General Public License v3.0.",
      copyright: 'Copyright © 2023-present <a href="https://github.com/FeatherFramework">Feather Framework contributors</a>',
    },
  },
};
