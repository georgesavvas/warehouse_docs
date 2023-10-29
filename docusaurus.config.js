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

  url: 'https://github.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  customFields: {
    FEEDBACK_API_URL: process.env.FEEDBACK_API_URL,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
        // title: 'Warehouse',
        hideOnScroll: true,
        logo: {
          alt: 'Warehouse Logo',
          src: 'img/logo_type.png',
          style: {height: "60px"},
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'right',
            label: 'Docs',
          },
          // {
          //   href: '/feedback',
          //   position: 'right',
          //   label: 'Feedback',
          // },
          // {
          //   href: '/issues',
          //   position: 'right',
          //   label: 'Issues',
          // },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
