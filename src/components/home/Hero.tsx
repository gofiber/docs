import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './Hero.module.scss';
import shared from './shared.module.scss';
import BrowserWindow from './BrowserWindow';

const exampleCode = `package main

import (
    "log"

    "github.com/gofiber/fiber/v3"
)

func main() {
    app := fiber.New()

    app.Get("/", func (c *fiber.Ctx) error {
        return c.SendString("Hello, World!")
    })

    log.Fatal(app.Listen(":3000"))
}`;

export default function Hero() {
    return (
        <section className={styles.hero} data-stripe>
            <div className={shared.mid}>
                <div className={shared.center}>
                    <h1 className={styles.title}>An Express-inspired web framework<br />written in Go.</h1>
                    <p className={styles.subtitle}>
                        Fiber is a Go web framework built on top of Fasthttp, the <strong>fastest</strong> HTTP engine for Go.
                        It's designed to <strong>ease</strong> development with <strong>performance</strong> in mind.
                    </p>
                </div>

                <div className={styles.heroExample}>
                    <div className={styles.codeCol}>
                        <CodeBlock language="go">{exampleCode}</CodeBlock>
                    </div>
                    <div className={styles.arrow}>→</div>
                    <div className={styles.previewCol}>
                        <BrowserWindow url="http://localhost:3000">
                            <pre>Hello, World!</pre>
                        </BrowserWindow>
                    </div>
                </div>

                <div className={styles.ctaRow}>
                    <a className={styles.cta} href="https://docs.gofiber.io/">Get Started →</a>
                    <span className={styles.orScroll}>…or scroll to learn more.</span>
                </div>
            </div>
        </section>
    );
}
