import Layout from '@theme/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Media from '../components/home/Media';
import Support from '../components/home/Support';
import { useEffect } from "react";

import styles from './home.module.css';
void styles;

function useGlobalStriping() {
    useEffect(() => {
        const run = () => {
            const nodes = Array.from(
                document.querySelectorAll<HTMLElement>('[data-stripe]')
            );
            nodes.forEach((el, i) => {
                el.classList.toggle('stripe-even', i % 2 === 0);
                el.classList.toggle('stripe-odd',  i % 2 === 1);
            });
        };
        const mo = new MutationObserver(run);
        mo.observe(document.body, { childList: true, subtree: true });
        run();
        return () => mo.disconnect();
    }, []);
}


export default function Home() {
    useGlobalStriping();

    return (
        <Layout
            title="Fiber"
            description="An Express-inspired web framework written in Go."
            wrapperClassName="fiber-home"
        >
            <Hero />
            <Features />
            <Support />
            <Media />
        </Layout>
    );
}
