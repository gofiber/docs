import React from 'react';
import clsx from 'clsx';
import DocVersionBanner from '@theme-original/DocVersionBanner';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useActivePlugin, useActiveDocContext} from "@docusaurus/plugin-content-docs/lib/client";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const multiRepoPkg = ['contrib', 'storage', 'template'];

export default function DocVersionBannerWrapper(props) {
    const plugin = useActivePlugin();
    const docContext = useActiveDocContext(plugin.pluginId);
    const currVersion = docContext?.activeVersion?.name;
    const versionBasePath = docContext?.activeVersion?.path?.split('/')?.filter(Boolean)?.[0];

    // multi package logic
    if (plugin?.pluginId !== 'default' && multiRepoPkg.includes(versionBasePath)) {

        const possiblePackage = docContext?.activeDoc?.id?.split('/')?.[0];
        const alternativePackageVersion = Object.keys(docContext?.alternateDocVersions)?.find((versionName) => versionName.indexOf(possiblePackage) === 0);
        if (alternativePackageVersion && alternativePackageVersion !== currVersion) {
            const currVersionPackage = currVersion?.split('_')?.[0];
            const expectedPathForCurrentVersion = docContext?.activeVersion?.docs?.find((item) => item.id === `${currVersionPackage}/${currVersionPackage}`);
            const title = useDocusaurusContext()?.siteConfig?.title || 'Fiber';
            return (
                <div
                    className={clsx(
                        ThemeClassNames.docs.docVersionBanner,
                        'alert alert--warning margin-bottom--md',
                    )}
                    role="alert">
                    <div>
                        This is unreleased documentation for {title} Next <b>{possiblePackage}</b> version.
                    </div>
                    <div className="margin-top--md">
                        For up-to-date documentation, see the <a href={docContext.alternateDocVersions[alternativePackageVersion].path}>latest version ({alternativePackageVersion})</a>.
                    </div>
                    {expectedPathForCurrentVersion?.path &&
                        <div className="margin-top--md">
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
