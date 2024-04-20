import React from 'react';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

export default function Reference({children, id}) {
    const brokenLinks = useBrokenLinks();
    brokenLinks.collectAnchor(id);

    return (
        <>
            <div id={id} className={'reference anchor'}>{children}<Link to={'#' + id} className={'hash-link'}></Link></div>
        </>
    );
}
