import React from 'react';
import DocVersionBanner from '@theme-original/DocVersionBanner';
import {useActivePlugin, useActiveDocContext} from "@docusaurus/plugin-content-docs/lib/client";

export default function DocVersionBannerWrapper(props) {
    const plugin = useActivePlugin();

    if (plugin?.pluginId !== 'default' && useActiveDocContext(plugin.pluginId)?.activeVersion?.name !== 'current') { // deactivate banner for not default
        // TODO: improve banner message with the next possible version
        return null;
    }
    return (
        <>
            <DocVersionBanner {...props} />
        </>
    );
}
