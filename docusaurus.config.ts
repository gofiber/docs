import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
    title: 'Fiber',
    tagline: 'An online API documentation with examples so you can start building web apps with Fiber right away!',
    url: 'https://docs.gofiber.io',
    // url: 'https://gofiber.github.io',
    baseUrl: process.env.BASE_URL || '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'gofiber',
    projectName: 'docs',
    future: {
        v4: true,
        experimental_faster: true,
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    markdown: {
        mermaid: true,
    },
    plugins: [
        'docusaurus-plugin-sass',
        require.resolve('./llms-plugin.js'),
        [require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                indexBlog: false,
                docsRouteBasePath: '/',
            },
        ],
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
                    // ...(process.env.NODE_ENV === 'production' ? [
                    //     {
                    //         from: '/home',
                    //         to: 'https://gofiber.io',
                    //     }
                    // ] : []),
                ],
                createRedirects(existingPath: string) {
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
                    href: "img/favicon.png",
                },
                    {
                        tagName: "link",
                        rel: "manifest",
                        href: "manifest.json", // your PWA manifest
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
                editUrl: (params: { docPath: string }) => {
                    return 'https://github.com/gofiber/contrib/edit/main/' + params.docPath;
                },
                editCurrentVersion: true,
                sidebarPath: require.resolve('./default_sidebars'),
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
                editUrl: (params: { docPath: string }) => {
                    return 'https://github.com/gofiber/storage/edit/main/' + params.docPath;
                },
                editCurrentVersion: true,
                sidebarPath: require.resolve('./default_sidebars'),
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
                editUrl: (params: { docPath: string }) => {
                    return 'https://github.com/gofiber/template/edit/master/' + params.docPath;
                },
                editCurrentVersion: true,
                sidebarPath: require.resolve('./default_sidebars'),
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
                editUrl: (params: { docPath: string }) => {
                    return 'https://github.com/gofiber/recipes/edit/master/' + params.docPath;
                },
                editCurrentVersion: true,
                sidebarPath: require.resolve('./default_sidebars'),
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
                    sidebarPath: require.resolve('./default_sidebars'),
                    // disabled until we make a redirect to the respective source repository
                    // editUrl: 'https://github.com/gofiber/fiber/edit/master/',
                    editUrl: (params: { docPath: string; version?: string }) => {
                        // console.log(params);
                        if (params.version === 'current') {
                            return 'https://github.com/gofiber/fiber/edit/main/docs/' + params.docPath;
                        }
                        return undefined;
                    },
                    sidebarItemsGenerator: async function ({defaultSidebarItemsGenerator, ...args}: {
                        defaultSidebarItemsGenerator: (...args: any[]) => Promise<any>;
                        [key: string]: any
                    }) {
                        // filter partials from sidebar
                        return (await defaultSidebarItemsGenerator(args)).filter((item: any) => !(item.label === 'partials' || item.id === 'partials'));
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
    themes: ['@inkeep/docusaurus/chatButton', '@docusaurus/theme-mermaid'],

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
                additionalLanguages: ['json', 'diff', 'go'],
            },
            inkeepConfig: {
                chatButtonType: 'PILL', // RECTANGLE_SHORTCUT, ICON, or PILL
                baseSettings: {
                    // see https://docusaurus.io/docs/deployment#using-environment-variables to use docusaurus environment variables
                    apiKey: process.env.INKEEP_API_KEY, // required
                    integrationId: process.env.INKEEP_INTEGRATION_ID, // required
                    organizationId: process.env.INKEEP_ORGANIZATION_ID, // required
                    primaryBrandColor: "#00acd7", // required -- your brand color, the widget color scheme is derived from this
                    organizationDisplayName: "GoFiber",
                    theme: {
                        // stylesheetUrls: ['/path/to/stylesheets'], // optional
                        syntaxHighlighter: {
                            lightTheme: lightCodeTheme, // optional -- pass in the Prism theme you're using
                            darkTheme: darkCodeTheme, // optional -- pass in the Prism theme you're using
                        },
                    },
                },
                aiChatSettings: {
                    chatSubjectName: "Fiber",
                    // optional settings
                    botAvatarSrcUrl: "/img/logo.svg", // optional -- use your own bot avatar
                    botAvatarDarkSrcUrl: "/img/logo-dark.svg", // optional -- use your own bot avatar
                    getHelpCallToActions: [
                        {
                            name: "Discord",
                            url: "https://gofiber.io/discord",
                            icon: {
                                builtIn: "FaDiscord",
                            },
                        },
                        {
                            name: "GitHub",
                            url: "https://github.com/gofiber/fiber",
                            icon: {
                                builtIn: "FaGithub",
                            },
                        },
                    ],
                    quickQuestions: [
                        "How to create custom error handler?",
                        "How can I use live reload?",
                        "Which template engines does Fiber support?",
                    ],
                },
            },
        }),
};

export default config;
