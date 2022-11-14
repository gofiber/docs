// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fiber',
  tagline: 'An online API documentation with examples so you can start building web apps with Fiber right away!',
  url: 'https://gofiber.github.io', // TODO: Change here before merging
  baseUrl: '/docs/', // TODO: Change here before merging
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'gofiber',
  projectName: 'docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/'
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gofiber/docs/edit/docusaurus-migration/', // TODO: Change here before merging
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: "v2.x",
            },
          },
          lastVersion: "current",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Fiber Logo',
          src: 'img/logo.svg',
        },
        items: [{
            to: 'https://gofiber.io',
            label: '🏠 Home',
            position: 'left',
          },
          {
            to: 'https://gofiber.io/support',
            label: '☕ Donate',
            position: 'left',
          },
          {
            to: 'https://github.com/gofiber/recipes',
            label: '🍳 Examples',
            position: 'left',
          },
          {
            to: 'https://gofiber.io/discord',
            label: '💬 Chat',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },

          {
            href: "https://github.com/gofiber/fiber",
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository',
          }
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      announcementBar: {
        id: 'announcement-1',
        content: 'Test announcement!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;