// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

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
    future: {
        experimental_faster: true,
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [
        require.resolve('docusaurus-lunr-search'),
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [
                    {
                        from: ['/-middleware', '/middleware'],
                        to: '/category/-middleware',
                    },
                    {
                        from: '/routing',
                        to: '/guide/routing',
                    },
                    {
                        from: '/ctx',
                        to: '/api/ctx',
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
                    href: "/img/favicon.png",
                },
                    {
                        tagName: "link",
                        rel: "manifest",
                        href: "/manifest.json", // your PWA manifest
                    },
                    {
                        tagName: "meta",
                        name: "theme-color",
                        content: "rgb(0, 172, 215)",
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
                sidebarPath: require.resolve('./default_sidebars.js'),
                showLastUpdateAuthor: false,
                showLastUpdateTime: true,
            }),
        ],
        [
            '@docusaurus/plugin-content-docs',
            ({
                id: 'storage',
                path: 'docs/storage',
                routeBasePath: 'storage',
                editUrl: (params) => {
                    return 'https://github.com/gofiber/storage/edit/main/' + params.docPath;
                },
                editCurrentVersion: true,
                sidebarPath: require.resolve('./default_sidebars.js'),
                showLastUpdateAuthor: false,
                showLastUpdateTime: true,
            }),
        ],
        [
            '@docusaurus/plugin-content-docs',
            ({
                id: 'template',
                path: 'docs/template',
                routeBasePath: 'template',
                editUrl: (params) => {
                    return 'https://github.com/gofiber/template/edit/master/' + params.docPath;
                },
                editCurrentVersion: true,
                sidebarPath: require.resolve('./default_sidebars.js'),
                showLastUpdateAuthor: false,
                showLastUpdateTime: true,
            }),
        ],
        [
            '@docusaurus/plugin-content-docs',
            ({
                id: 'recipes',
                path: 'docs/recipes',
                routeBasePath: 'recipes',
                editUrl: (params) => {
                    return 'https://github.com/gofiber/recipes/edit/master/' + params.docPath;
                },
                editCurrentVersion: true,
                sidebarPath: require.resolve('./default_sidebars.js'),
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
                    sidebarPath: require.resolve('./default_sidebars.js'),
                    // disabled until we make a redirect to the respective source repository
                    // editUrl: 'https://github.com/gofiber/fiber/edit/master/',
                    editUrl: (params) => {
                        // console.log(params);
                        if (params.version === 'current') {
                            return 'https://github.com/gofiber/fiber/edit/main/docs/' + params.docPath;
                        }
                        return undefined;
                    },
                    sidebarItemsGenerator: async function ({defaultSidebarItemsGenerator, ...args}) {
                        // filter partials from sidebar
                        return (await defaultSidebarItemsGenerator(args)).filter((item) => !(item.label === 'partials' || item.id === 'partials'));
                    },
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
                    versions: {
                        current: {
                            label: "Next",
                        },
                    },
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
                    srcDark: 'img/logo-dark.svg',
                },
                items: [
                    {
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
                            label: '🧬 Contrib',
                            docsPluginId: 'contrib',
                        }, {
                            type: 'docsVersion',
                            label: '📦 Storage',
                            docsPluginId: 'storage',
                        }, {
                            type: 'docsVersion',
                            label: '️📄️ Template',
                            docsPluginId: 'template',
                        }],
                    },
                    {
                        to: 'https://gofiber.io/support',
                        label: '☕ Donate',
                        position: 'left',
                    },
                    {
                        type: 'docsVersion',
                        docsPluginId: 'recipes',
                        label: '🍳 Recipes',
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
                        className: 'fiber-versions',
                        // dropdownItemsBefore: [{type: 'html', value: '<div class="dropdown__link">Fiber Versions</div>'}],
                    },
                    {
                        type: 'docsVersionDropdown',
                        position: 'right',
                        dropdownActiveClassDisabled: true,
                        docsPluginId: 'contrib',
                        className: 'contrib-versions',
                        // dropdownItemsBefore: [{type: 'html', value: '<div class="dropdown__link">Contrib Versions</div>'}],
                    },
                    {
                        type: 'docsVersionDropdown',
                        position: 'right',
                        dropdownActiveClassDisabled: true,
                        docsPluginId: 'storage',
                        className: 'storage-versions',
                        // dropdownItemsBefore: [{type: 'html', value: '<div class="dropdown__link">Storage Versions</div>'}],
                    },
                    {
                        type: 'docsVersionDropdown',
                        position: 'right',
                        dropdownActiveClassDisabled: true,
                        docsPluginId: 'template',
                        className: 'template-versions',
                        // dropdownItemsBefore: [{type: 'html', value: '<div class="dropdown__link">Template Versions</div>'}],
                    },
                    {
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub Repository',
                        items: [
                            {
                                label: '🚀 Fiber',
                                href: 'https://github.com/gofiber/fiber',
                            },
                            {
                                label: '🧬 Contrib',
                                href: 'https://github.com/gofiber/contrib',
                            },
                            {
                                label: '📦 Storage',
                                href: 'https://github.com/gofiber/storage',
                            },
                            {
                                label: '📄️ Template',
                                href: 'https://github.com/gofiber/template',
                            },
                            {
                                label: '🍳️ Recipes',
                                href: 'https://github.com/gofiber/recipes',
                            },
                        ],
                    },
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
                additionalLanguages: ['json', 'diff'],
            },
        }),
};

module.exports = config;
