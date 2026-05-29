import React from 'react';
import clsx from 'clsx';
import DocVersionBanner from '@theme-original/DocVersionBanner';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type DocVersionBannerType from '@theme/DocVersionBanner';
import type {WrapperProps} from '@docusaurus/types';
import {useActiveDocContext, useActivePlugin} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {findBestVersion, friendlyLabel, getPackageName} from '../versionUtils';

type Props = WrapperProps<typeof DocVersionBannerType>;

const multiRepoPkg = ['contrib', 'storage', 'template'];

export default function DocVersionBannerWrapper(props: Props): JSX.Element | null {
    // All hooks run unconditionally and in a stable order (React rules of hooks).
    const plugin = useActivePlugin();
    const docContext = useActiveDocContext(plugin?.pluginId);
    const {siteConfig} = useDocusaurusContext();
    const title = siteConfig?.title || 'Fiber';

    const currVersion = docContext?.activeVersion?.name;
    const versionBasePath = docContext?.activeVersion?.path?.split('/')?.filter(Boolean)?.[0];
    const pluginId = plugin?.pluginId;

    // multi package logic
    if (pluginId !== 'default' && versionBasePath && multiRepoPkg.includes(versionBasePath)) {
        const possiblePackage = docContext?.activeDoc?.id?.split('/')?.[0];
        const alternativePackageVersion = findBestVersion(
            Object.keys(docContext?.alternateDocVersions ?? {}),
            possiblePackage ?? '',
        );

        if (alternativePackageVersion && alternativePackageVersion !== currVersion) {
            const currVersionPackage = getPackageName(currVersion ?? '');
            const expectedPathForCurrentVersion = docContext?.activeVersion?.docs?.find(
                (item: {id: string}) => item.id === `${currVersionPackage}/${currVersionPackage}`,
            );
            const latestLabel = friendlyLabel(alternativePackageVersion, pluginId);
            return (
                <div
                    className={clsx(
                        ThemeClassNames.docs.docVersionBanner,
                        'alert alert--warning margin-bottom--md margin-between',
                    )}
                    role="alert">
                    {currVersion === 'current' && (
                        <div>
                            This is unreleased documentation for the {title} <b>{possiblePackage}</b> package (Next).
                        </div>
                    )}
                    <div>
                        The latest documentation for <b>{possiblePackage}</b> is{' '}
                        <a href={docContext.alternateDocVersions[alternativePackageVersion].path}>
                            {latestLabel}
                        </a>.
                    </div>
                    {expectedPathForCurrentVersion?.path && (
                        <div>
                            To stay on the selected version, see the{' '}
                            <a href={expectedPathForCurrentVersion.path}>{currVersionPackage} docs</a>.
                        </div>
                    )}
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
