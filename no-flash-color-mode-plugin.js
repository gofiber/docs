export default function noFlashColorModePlugin(context) {
  const defaultMode = context.siteConfig.themeConfig?.colorMode?.defaultMode ?? 'light';
  const respectPrefers = context.siteConfig.themeConfig?.colorMode?.respectPrefersColorScheme ?? false;
  return {
    name: 'no-flash-color-mode-plugin',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'style',
            innerHTML: `html { visibility: hidden; } html[data-theme] { visibility: visible; }`,
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

    var observer = new MutationObserver(function(mutationsList) {
      for (var i = 0; i < mutationsList.length; i++) {
        var mutation = mutationsList[i];
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          var newTheme = document.documentElement.getAttribute('data-theme');
          if (newTheme) {
            document.documentElement.style.colorScheme = newTheme;
          }
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
}
