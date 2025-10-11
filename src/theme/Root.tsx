import React, {type PropsWithChildren, useEffect} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function applyColorScheme(nextTheme: string | null | undefined) {
  if (!ExecutionEnvironment.canUseDOM || !nextTheme) {
    return;
  }

  const resolvedTheme = nextTheme === 'dark' ? 'dark' : 'light';
  document.documentElement.style.colorScheme = resolvedTheme;
  if (document.body) {
    document.body.style.colorScheme = resolvedTheme;
  }
}

export default function Root({children}: PropsWithChildren): JSX.Element {
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return undefined;
    }

    applyColorScheme(document.documentElement.getAttribute('data-theme'));

    const observer = new MutationObserver(() => {
      applyColorScheme(document.documentElement.getAttribute('data-theme'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
