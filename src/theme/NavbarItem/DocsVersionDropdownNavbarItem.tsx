import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {useActiveDocContext, useVersions} from '@docusaurus/plugin-content-docs/client';
import {
    activePackageName,
    byNewestVersion,
    canonicalPackage,
    friendlyLabel,
    parseVersionEntry,
} from '../versionUtils';

type DocsVersionDropdownNavbarItemProps = React.ComponentProps<typeof DocsVersionDropdownNavbarItem> & {
    docsPluginId?: string;
};

const multiPackagePlugins = ['contrib', 'storage', 'template'];

export default function DocsVersionDropdownNavbarItemWrapper(props: DocsVersionDropdownNavbarItemProps) {
    const {docsPluginId} = props;

    const {activeDoc, activeVersion, alternateDocVersions} = useActiveDocContext(docsPluginId);
    const allVersions = useVersions(docsPluginId);

    if (!activeDoc) {
        return null;
    }

    // Single-product instances (core fiber, recipes) keep the default behaviour.
    if (!docsPluginId || !multiPackagePlugins.includes(docsPluginId)) {
        return <DocsVersionDropdownNavbarItem {...props} />;
    }

    const activeCanonical = canonicalPackage(
        activePackageName(activeDoc.id, activeVersion?.name),
    );

    // Show only the versions that belong to the package the user is reading.
    const relevant = allVersions
        .map((v) => v.name)
        .filter((name) => {
            if (name === 'current') {
                return activeVersion?.name === 'current' || Boolean(alternateDocVersions?.[name]);
            }
            return canonicalPackage(parseVersionEntry(name).pkg) === activeCanonical;
        })
        .sort(byNewestVersion);

    if (relevant.length === 0) {
        return null;
    }

    const versions = Object.fromEntries(
        relevant.map((name) => [name, {label: friendlyLabel(name, docsPluginId)}]),
    );

    // A non-clickable header naming the package, so the dropdown is self-explanatory.
    const packageHeader =
        relevant.length > 1
            ? [{
                  type: 'html' as const,
                  value: `<span class="version-dropdown__package">${activeCanonical}</span>`,
              }]
            : [];

    return (
        <DocsVersionDropdownNavbarItem
            {...props}
            versions={versions}
            dropdownItemsBefore={[...packageHeader, ...(props.dropdownItemsBefore ?? [])]}
        />
    );
}
