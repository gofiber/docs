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

// Parse version entry: "v3_zap_v1.x.x" → { prefix: 3, pkg: "zap", version: 1 }
// "otelfiber_v2.x.x" → { prefix: -1, pkg: "otelfiber", version: 2 }
const parseVersionEntry = (entry: string): { prefix: number; pkg: string; version: number } => {
    const versionMatch = entry.match(/_v(\d+)\.x\.x$/);
    const version = versionMatch ? parseInt(versionMatch[1], 10) : 0;
    const rest = versionMatch ? entry.slice(0, versionMatch.index!) : entry;

    const prefixMatch = rest.match(/^v(\d+)_(.+)$/);
    if (prefixMatch) {
        return { prefix: parseInt(prefixMatch[1], 10), pkg: prefixMatch[2], version };
    }
    return { prefix: -1, pkg: rest, version };
};

const getPackageName = (version: string): string => parseVersionEntry(version).pkg;

// Find the best matching version for a package, preferring prefixed versions and highest versions
const findBestVersion = (versions: string[], packageName: string): string | undefined => {
    return versions
        .filter((v) => parseVersionEntry(v).pkg === packageName)
        .sort((a, b) => {
            const av = parseVersionEntry(a);
            const bv = parseVersionEntry(b);
            // Prefer higher prefix (prefixed > unprefixed, v3 > v2)
            if (av.prefix !== bv.prefix) return bv.prefix - av.prefix;
            // Then higher package version (v2.x.x > v1.x.x)
            return bv.version - av.version;
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
