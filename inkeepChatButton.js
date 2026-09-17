
    const inkeepChatButtonScript = document.createElement("script");
    inkeepChatButtonScript.type = "module";
    inkeepChatButtonScript.src = 'https://unpkg.com/@inkeep/uikit-js@0.3.19/dist/embed.js';
    inkeepChatButtonScript.integrity = 'sha384-NrApcNv8E5NXyoaHq8Zbyi9byJkCkCJ7BZJRlZ+8ELzfp0qgixQYy4FXfkJcVkn3';
    inkeepChatButtonScript.crossOrigin = "anonymous";
    document.body.appendChild(inkeepChatButtonScript);
    inkeepChatButtonScript.addEventListener("load", function () {
      const inkeepConfigChatButton = {"chatButtonType":"PILL","baseSettings":{"apiKey":"c9e29ebd3a3c9588d26875b9d5bfe99780bff263d5d6d16f","integrationId":"cm49kaiya002f100mfrefwqi9","organizationId":"org_lP9lAKQHbzCfNcXw","primaryBrandColor":"#00acd7","organizationDisplayName":"GoFiber","theme":{"syntaxHighlighter":{"lightTheme":{"plain":{"color":"#393A34","backgroundColor":"#f6f8fa"},"styles":[{"types":["comment","prolog","doctype","cdata"],"style":{"color":"#999988","fontStyle":"italic"}},{"types":["namespace"],"style":{"opacity":0.7}},{"types":["string","attr-value"],"style":{"color":"#e3116c"}},{"types":["punctuation","operator"],"style":{"color":"#393A34"}},{"types":["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],"style":{"color":"#36acaa"}},{"types":["atrule","keyword","attr-name","selector"],"style":{"color":"#00a4db"}},{"types":["function","deleted","tag"],"style":{"color":"#d73a49"}},{"types":["function-variable"],"style":{"color":"#6f42c1"}},{"types":["tag","selector","keyword"],"style":{"color":"#00009f"}}]},"darkTheme":{"plain":{"color":"#F8F8F2","backgroundColor":"#282A36"},"styles":[{"types":["prolog","constant","builtin"],"style":{"color":"rgb(189, 147, 249)"}},{"types":["inserted","function"],"style":{"color":"rgb(80, 250, 123)"}},{"types":["deleted"],"style":{"color":"rgb(255, 85, 85)"}},{"types":["changed"],"style":{"color":"rgb(255, 184, 108)"}},{"types":["punctuation","symbol"],"style":{"color":"rgb(248, 248, 242)"}},{"types":["string","char","tag","selector"],"style":{"color":"rgb(255, 121, 198)"}},{"types":["keyword","variable"],"style":{"color":"rgb(189, 147, 249)","fontStyle":"italic"}},{"types":["comment"],"style":{"color":"rgb(98, 114, 164)"}},{"types":["attr-name"],"style":{"color":"rgb(241, 250, 140)"}}]}}}},"aiChatSettings":{"chatSubjectName":"Fiber","botAvatarSrcUrl":"/img/logo.svg","botAvatarDarkSrcUrl":"/img/logo-dark.svg","getHelpCallToActions":[{"name":"Discord","url":"https://gofiber.io/discord","icon":{"builtIn":"FaDiscord"}},{"name":"GitHub","url":"https://github.com/gofiber/fiber","icon":{"builtIn":"FaGithub"}}],"quickQuestions":["How to create custom error handler?","How can I use live reload?","Which template engines does Fiber support?"]}};
      (function listenerFunction({ inkeepConfig, componentType }) {
  if (!inkeepConfig) {
    throw new Error(
      "Configuration Error: inkeepConfig is missing in the Docusaurus configuration file."
    );
  }

  let inkeepWidget = null;
  const isChatButtonType = componentType === "ChatButton";

  const renderWidgets = () => {
    const inkeepWidgetContainer = isChatButtonType ? undefined : document.getElementById("inkeepSearchBar");

    if (isChatButtonType) {
      const backToTopButtonOffset =
        inkeepConfig.chatButtonType === "RECTANGLE_SHORTCUT"
          ? "6.8rem"
          : "5.4rem";
      const backToTopButton = document.querySelector(
        ".theme-back-to-top-button"
      );
      if (backToTopButton) {
        backToTopButton.style.bottom = backToTopButtonOffset;
      }
    }

    const shouldRender = !inkeepWidget && (isChatButtonType || inkeepWidgetContainer);

    const config = {
      componentType,
      targetElement: inkeepWidgetContainer,
      colorModeSync: {
        observedElement: document.documentElement,
        isDarkModeCallback: (observedElement) =>
          observedElement.dataset.theme === "dark",
        colorModeAttribute: "data-theme",
      },
      properties: {
        ...inkeepConfig,
        baseSettings: {
          ...inkeepConfig.baseSettings,
          theme: {
            ...(inkeepConfig.baseSettings?.theme || {}),
            components: {
              SearchBarTrigger: {
                defaultProps: {
                  size: "shrink",
                },
              },
              ...(inkeepConfig.baseSettings?.theme?.components || {}),
            },
          },
        },
        modalSettings: inkeepConfig.modalSettings,
        searchSettings: inkeepConfig.searchSettings,
        aiChatSettings: inkeepConfig.aiChatSettings,
      },
    };

    if (shouldRender) {
      inkeepWidget = Inkeep().embed(config);
    }
  };

  renderWidgets();

  // not totally sure this is necessary anymore but leaving for now just in case
  const observer = new MutationObserver(() => {
    renderWidgets();
  });

  observer.observe(document.documentElement, { attributes: true });
})({
        inkeepConfig: inkeepConfigChatButton,
        componentType: 'ChatButton',
      })
    })
  