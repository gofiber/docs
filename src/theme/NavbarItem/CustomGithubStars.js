import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Link from '@docusaurus/Link';

const DEFAULT_REPO = 'gofiber/fiber';
const GITHUB_API_BASE = 'https://api.github.com/repos/';

function formatStars(count) {
    if (count >= 1_000_000) {
        return `${(count / 1_000_000).toFixed(count >= 10_000_000 ? 0 : 1)}m`;
    }
    if (count >= 1_000) {
        return `${(count / 1_000).toFixed(count >= 100_000 ? 0 : 1)}k`;
    }
    return `${count}`;
}

export default function CustomGithubStarsNavbarItem(props) {
    const {
        className,
        mobile = false,
        repo = DEFAULT_REPO,
        href,
        target = '_blank',
        rel = 'noopener noreferrer',
        ...rest
    } = props;

    const [stars, setStars] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!ExecutionEnvironment.canUseDOM) {
            return undefined;
        }

        const controller = new AbortController();

        async function fetchStars() {
            try {
                const response = await fetch(`${GITHUB_API_BASE}${repo}`, {
                    signal: controller.signal,
                    headers: {
                        Accept: 'application/vnd.github+json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`GitHub API responded with ${response.status}`);
                }

                const data = await response.json();
                if (typeof data?.stargazers_count === 'number') {
                    setStars(data.stargazers_count);
                } else {
                    setHasError(true);
                }
            } catch (error) {
                if (error?.name !== 'AbortError') {
                    setHasError(true);
                }
            }
        }

        fetchStars();

        return () => {
            controller.abort();
        };
    }, [repo]);

    const countText = stars !== null ? formatStars(stars) : hasError ? '—' : '…';
    const fullCount = stars !== null ? stars.toLocaleString() : undefined;
    const linkHref = href ?? `https://github.com/${repo}`;
    const linkLabel = stars !== null
        ? `Fiber on GitHub (${fullCount} stars)`
        : hasError
            ? 'Fiber on GitHub (star count unavailable)'
            : 'Fiber on GitHub (loading star count)';

    const linkClassName = clsx(
        mobile ? 'menu__link' : 'navbar__item navbar__link',
        'github-stars-navbar-item',
        className,
    );

    return (
        <Link
            {...rest}
            className={linkClassName}
            href={linkHref}
            target={target}
            rel={rel}
            aria-label={linkLabel}
            title={stars !== null ? `${fullCount} GitHub stars` : undefined}
        >
            <span className="github-stars-navbar-item__icon" aria-hidden="true">⭐</span>
            <span className="github-stars-navbar-item__count">{countText}</span>
        </Link>
    );
}
