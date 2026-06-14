import type {PluginModule} from '@docusaurus/types';

// Simple Analytics: privacy-friendly, cookieless analytics. The script is only
// injected in production builds; Simple Analytics additionally ignores localhost
// on its own. SPA navigation is tracked automatically.
const simpleAnalyticsPlugin: PluginModule<void> = () => {
    return {
        name: 'simple-analytics-plugin',
        injectHtmlTags() {
            if (process.env.NODE_ENV !== 'production') {
                return {};
            }
            return {
                headTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            async: true,
                            src: 'https://scripts.simpleanalyticscdn.com/latest.js',
                        },
                    },
                ],
                postBodyTags: [
                    {
                        tagName: 'noscript',
                        innerHTML:
                            '<img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" />',
                    },
                ],
            };
        },
    };
};

export default simpleAnalyticsPlugin;
