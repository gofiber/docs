import React from 'react';
import clsx from 'clsx';
import DocVersionBanner from '@theme-original/DocVersionBanner';
import { ThemeClassNames } from '@docusaurus/theme-common';
import type DocVersionBannerType from '@theme/DocVersionBanner';
import type {WrapperProps} from '@docusaurus/types';
import { useActiveDocContext, useActivePlugin } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof DocVersionBannerType>;

const multiRepoPkg = ['contrib', 'storage', 'template'];

// Extract package name from version string: "v3/zap_v1.x.x" → "zap", "otelfiber_v2.x.x" → "otelfiber"
const getPackageName = (version: string): string => {
    const lastSegment = version.includes('/') ? version.split('/').pop()! : version;
    return lastSegment.split('_')[0];
};

// Find the best matching version for a package, preferring prefixed versions and highest versions
const findBestVersion = (versions: string[], packageName: string): string | undefined => {
    return versions
        .filter((v) => getPackageName(v) === packageName)
        .sort((a, b) => {
            const aHasPrefix = a.includes('/');
            const bHasPrefix = b.includes('/');
            // Prefer prefixed versions
            if (aHasPrefix !== bHasPrefix) return aHasPrefix ? -1 : 1;
            // Compare prefix numbers (v3 > v2)
            if (aHasPrefix && bHasPrefix) {
                const aPrefix = parseInt(a.split('/')[0].replace(/\D/g, ''), 10) || 0;
                const bPrefix = parseInt(b.split('/')[0].replace(/\D/g, ''), 10) || 0;
                if (aPrefix !== bPrefix) return bPrefix - aPrefix;
            }
            // Compare package version numbers (v2.x.x > v1.x.x)
            const aVer = parseInt((a.split('_').pop() ?? '').replace(/\D/g, ''), 10) || 0;
            const bVer = parseInt((b.split('_').pop() ?? '').replace(/\D/g, ''), 10) || 0;
            return bVer - aVer;
        })[0];
};

export default function DocVersionBannerWrapper(props: Props): JSX.Element | null {
    const plugin = useActivePlugin();
    const docContext = useActiveDocContext(plugin?.pluginId);
    const currVersion = docContext?.activeVersion?.name;
    const versionBasePath = docContext?.activeVersion?.path?.split('/')?.filter(Boolean)?.[0];

    // multi package logic
    if (plugin?.pluginId !== 'default' && versionBasePath && multiRepoPkg.includes(versionBasePath)) {

        const possiblePackage = docContext?.activeDoc?.id?.split('/')?.[0];
        const alternativePackageVersion = findBestVersion(Object.keys(docContext?.alternateDocVersions ?? {}), possiblePackage ?? '');
        if (alternativePackageVersion && alternativePackageVersion !== currVersion) {
            const currVersionPackage = getPackageName(currVersion ?? '');
            const expectedPathForCurrentVersion = docContext?.activeVersion?.docs?.find((item: {id: string}) => item.id === `${currVersionPackage}/${currVersionPackage}`);
            const title = useDocusaurusContext()?.siteConfig?.title || 'Fiber';
            return (
                <div
                    className={clsx(
                        ThemeClassNames.docs.docVersionBanner,
                        'alert alert--warning margin-bottom--md margin-between',
                    )}
                    role="alert">
                    {currVersion === 'current' &&
                        <div>
                            This is unreleased documentation for {title} Next <b>{possiblePackage}</b> version.
                        </div>
                    }
                    <div>
                        For up-to-date documentation, see the <a href={docContext.alternateDocVersions[alternativePackageVersion].path}>latest version ({alternativePackageVersion})</a>.
                    </div>
                    {expectedPathForCurrentVersion?.path &&
                        <div >
                            For the current choosen version documentation, see the <a href={expectedPathForCurrentVersion.path}>{currVersionPackage} link</a>.
                        </div>
                    }
                </div>
            );
        }

        return null;
    }
  return (
    <>
      <DocVersionBanner {...props} />
    </>
  );
}
