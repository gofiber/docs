export default function noFlashColorModePlugin(context) {
  const defaultMode = context.siteConfig.themeConfig?.colorMode?.defaultMode ?? 'light';
  const respectPrefers = context.siteConfig.themeConfig?.colorMode?.respectPrefersColorScheme ?? false;
  return {
    name: 'no-flash-color-mode-plugin',
    injectHtmlTags() {
      return {
        headTags: [
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
  var bg = theme === 'dark' ? '#1b1b1d' : '#ffffff';
  document.documentElement.style.backgroundColor = bg;
  document.documentElement.style.colorScheme = theme;
})();`,
          },
        ],
      };
    },
  };
}
