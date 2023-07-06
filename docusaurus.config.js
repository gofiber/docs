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
        redirects: [{
            to: '/category/-middleware',
            from: '/-middleware'
          },
          {
            to: '/guide/routing',
            from: '/routing'
          },
          {
            to: '/api/ctx',
            from: '/ctx'
          },
        ],
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
        pwaHead: [{
            tagName: "link",
            rel: "icon",
            href: "/img/favicon.png"
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json" // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(0, 172, 215)"
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'contrib',
        path: 'docs/contrib',
        routeBasePath: 'contrib',
        editUrl: (params) => {
          return 'https://github.com/gofiber/contrib/edit/main/' + params.docPath;
        },
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebarsContrib.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/core',
          routeBasePath: '/',
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // disabled until we make a redirect to the respective source repository
          // editUrl: 'https://github.com/gofiber/fiber/edit/master/',
          editUrl: (params) => {
            // console.log(params);
            if (params.version === 'current') {
              return 'https://github.com/gofiber/fiber/edit/master/docs/' + params.docPath;
            }
            return undefined;
          },
          showLastUpdateAuthor: false,
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
            type: 'doc',
            docId: 'welcome',
            label: '🏠 Home',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: '🧩 Extra',
            position: 'left',
            items: [{
              type: 'docsVersion',
              label: 'Contrib',
              docsPluginId: 'contrib',
            }],
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
