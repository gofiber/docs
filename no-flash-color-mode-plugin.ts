import type {LoadContext, PluginModule} from '@docusaurus/types';

type ThemeConfigWithColorMode = {
    colorMode?: {
        defaultMode?: string;
        respectPrefersColorScheme?: boolean;
    };
};

const noFlashColorModePlugin: PluginModule<void> = (context: LoadContext) => {
    const themeConfig = (context.siteConfig.themeConfig ?? {}) as ThemeConfigWithColorMode;
    const defaultMode = themeConfig.colorMode?.defaultMode ?? 'light';
    const respectPrefers = themeConfig.colorMode?.respectPrefersColorScheme ?? false;

    return {
        name: 'no-flash-color-mode-plugin',
        injectHtmlTags() {
            return {
                headTags: [
                    {
                        tagName: 'style',
                        innerHTML: 'html { visibility: hidden; } html[data-theme] { visibility: visible; }',
                    },
                    {
                        tagName: 'script',
                        innerHTML: `(function() {
  var defaultMode = '${defaultMode}';
  var respectPrefersColorScheme = ${respectPrefers};
  var storageKey = 'theme';
  function getStoredTheme() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (e) {
      return null;
    }
  }
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
    var storedTheme = getStoredTheme();
    var theme = storedTheme || (respectPrefersColorScheme ? getSystemTheme() : defaultMode);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-theme-choice', storedTheme || (respectPrefersColorScheme ? 'system' : defaultMode));
    document.documentElement.style.colorScheme = theme;
    if (document.body) {
      document.body.style.colorScheme = theme;
    }

    var observer = new MutationObserver(function() {
      var newTheme = document.documentElement.getAttribute('data-theme');
      if (newTheme) {
        document.documentElement.style.colorScheme = newTheme;
        if (document.body) {
          document.body.style.colorScheme = newTheme;
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  })();`,
                    },
                ],
            };
        },
    };
};

export default noFlashColorModePlugin;
