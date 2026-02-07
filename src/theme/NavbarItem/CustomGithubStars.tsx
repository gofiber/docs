import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Link from '@docusaurus/Link';
import type {ComponentProps} from 'react';

const DEFAULT_REPO = 'gofiber/fiber';
const GITHUB_API_BASE = 'https://api.github.com/repos/';
const STAR_CACHE_TTL_MS = 60 * 60 * 1000;

type LinkProps = ComponentProps<typeof Link>;
type GitHubApiResponse = {
    stargazers_count?: unknown;
};
type StarCachePayload = {
    value: number;
    fetchedAt: number;
};

type CustomGithubStarsNavbarItemProps = Omit<LinkProps, 'href' | 'target' | 'rel'> & {
    className?: string;
    mobile?: boolean;
    repo?: string;
    href?: string;
    target?: LinkProps['target'];
    rel?: string;
};

function formatStars(count: number): string {
    if (count >= 1_000_000) {
        return `${(count / 1_000_000).toFixed(count >= 10_000_000 ? 0 : 1)}m`;
    }
    if (count >= 1_000) {
        return `${(count / 1_000).toFixed(count >= 100_000 ? 0 : 1)}k`;
    }
    return `${count}`;
}

export default function CustomGithubStarsNavbarItem(props: CustomGithubStarsNavbarItemProps) {
    const {
        className,
        mobile = false,
        repo = DEFAULT_REPO,
        href,
        target = '_blank',
        rel = 'noopener noreferrer',
        ...rest
    } = props;

    const [stars, setStars] = useState<number | null>(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!ExecutionEnvironment.canUseDOM) {
            return undefined;
        }

        const controller = new AbortController();
        const cacheKey = `github-stars:${repo}`;

        const readCachedStars = (): number | null => {
            try {
                const raw = window.localStorage.getItem(cacheKey);
                if (!raw) {
                    return null;
                }
                const parsed = JSON.parse(raw) as Partial<StarCachePayload>;
                if (typeof parsed.value !== 'number' || typeof parsed.fetchedAt !== 'number') {
                    return null;
                }
                if ((Date.now() - parsed.fetchedAt) > STAR_CACHE_TTL_MS) {
                    return null;
                }
                return parsed.value;
            } catch {
                return null;
            }
        };

        const writeCachedStars = (value: number): void => {
            try {
                const payload: StarCachePayload = {
                    value,
                    fetchedAt: Date.now(),
                };
                window.localStorage.setItem(cacheKey, JSON.stringify(payload));
            } catch {
                // Ignore storage errors (private mode/quota).
            }
        };

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

                const data = await response.json() as GitHubApiResponse;
                if (typeof data?.stargazers_count === 'number') {
                    setStars(data.stargazers_count);
                    writeCachedStars(data.stargazers_count);
                } else {
                    setHasError(true);
                }
            } catch (error: unknown) {
                if (!(error instanceof Error) || error.name !== 'AbortError') {
                    setHasError(true);
                }
            }
        }

        const cachedStars = readCachedStars();
        if (cachedStars !== null) {
            setStars(cachedStars);
            return () => {
                controller.abort();
            };
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
