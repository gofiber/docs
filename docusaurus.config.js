// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fiber',
  tagline: 'An online API documentation with examples so you can start building web apps with Fiber right away!',
  url: 'https://docs.gofiber.io',
  baseUrl: '/',
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
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          if (existingPath.includes('/v1.x')) {
            return [
              existingPath.replace('/v1.x', '/v/1.x'),
            ];
          }
          return undefined;
        },
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],

      },
    ],
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
          // disabled until we make a redirect to the respective source repository
          // editUrl: 'https://github.com/gofiber/docs/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: "Next",
            },
          },
          lastVersion: "v2.x",
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
          srcDark: 'img/logo-dark.svg'
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
            to: 'https://github.com/gofiber/awesome-fiber',
            label: '😎 Awesome List',
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
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      announcementBar: {
        id: 'announcement-1',
        content: '🌟 If you like Fiber, don\'t forget to give us a star on <a href="https://github.com/gofiber/fiber">Github</a> 🌟',
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
