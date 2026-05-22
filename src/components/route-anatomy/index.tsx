import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

// RouteAnatomy renders a multi-line Fiber route declaration where each
// meaningful part is color-coded (matching the Go syntax theme) and links to
// the guide section that explains it. Hovering a part shows its role; clicking
// jumps to that section.
//
// Separators (parentheses, quotes, comma, body) are explicit string
// expressions so the surrounding `white-space: pre` does not pick up stray
// whitespace from the JSX layout.
export default function RouteAnatomy(): JSX.Element {
    return (
        <pre className={styles.anatomy}>
            <Link
                to="#route-handlers"
                className={styles.method}
                aria-label="Routing method: the HTTP verb the route answers"
                title="Routing method: the HTTP verb the route answers"
            >
                app.Get
            </Link>
            {'("'}
            <Link
                to="#paths"
                className={styles.path}
                aria-label="Route path: the resource, in REST terms"
                title="Route path: the resource, in REST terms"
            >
                /users/
            </Link>
            <Link
                to="#parameters"
                className={styles.param}
                aria-label="Route parameter captured from the path"
                title="Route parameter captured from the path"
            >
                :id
            </Link>
            {'", '}
            <Link
                to="#handler-types"
                className={styles.handler}
                aria-label="Handler shape: see the supported handler types"
                title="Handler shape: see the supported handler types"
            >
                func(c fiber.Ctx) error
            </Link>
            {' {\n    return c.SendString("GET /users")\n})'}
        </pre>
    );
}
