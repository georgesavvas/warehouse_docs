// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Warehouse',
  tagline: 'Asset Library',
  favicon: 'img/favicon.ico',
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
  ],

  url: 'http://warehouse.electrictheatre.tv',
  baseUrl: '/docs/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Warehouse Logo',
          src: 'img/logo_type.png',
          href: 'http://warehouse.electrictheatre.tv',
          target: "_self",
          style: {height: "60px"},
        },
        items: [
          // {
          //   type: "custom-login",
          //   position: "right",
          //   itemProp: 44,
          // },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["python"],
      },

      metadata: [
        {name: "referrer", content: "strict-origin-when-cross-origin"},
      ],
    }),
  // headTags: [
  //   {
  //     tagName: 'link',
  //     attributes: {
  //       AccessControlAllowOrigin: "*",
  //       crossorigin: "anonymous",
  //     },
  //   },
  // ]
};

module.exports = config;
