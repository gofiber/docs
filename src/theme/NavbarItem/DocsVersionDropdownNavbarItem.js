import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {useActiveDocContext} from '@docusaurus/plugin-content-docs/client';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
    const { docsPluginId } = props;

    const { activeDoc } = useActiveDocContext(docsPluginId);
    if (!activeDoc) {
        return null;
    }

    return <DocsVersionDropdownNavbarItem {...props} />;
}
