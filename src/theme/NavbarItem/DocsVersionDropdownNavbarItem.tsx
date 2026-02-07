import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {useActiveDocContext} from '@docusaurus/plugin-content-docs/client';

type DocsVersionDropdownNavbarItemProps = React.ComponentProps<typeof DocsVersionDropdownNavbarItem> & {
    docsPluginId?: string;
};

export default function DocsVersionDropdownNavbarItemWrapper(props: DocsVersionDropdownNavbarItemProps) {
    const { docsPluginId } = props;

    const { activeDoc } = useActiveDocContext(docsPluginId);
    if (!activeDoc) {
        return null;
    }

    return <DocsVersionDropdownNavbarItem {...props} />;
}
