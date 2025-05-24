import React from 'react';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

interface ReferenceProps {
    children: React.ReactNode;
    id: string;
}

export default function Reference({children, id}: ReferenceProps): JSX.Element {
    const brokenLinks = useBrokenLinks();
    brokenLinks.collectAnchor(id);

    return (
        <>
            <div id={id} className={'reference anchor'}>{children}<Link to={'#' + id} className={'hash-link'}></Link></div>
        </>
    );
}
