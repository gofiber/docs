// src/components/home/LatestRelease.tsx
import React, { useEffect, useState } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './LatestRelease.module.scss';

const RELEASE_API = 'https://api.github.com/repos/gofiber/fiber/releases/latest';
const CACHE_KEY = 'github-latest-release:gofiber/fiber';
const CACHE_TTL_MS = 60 * 60 * 1000;

type ReleaseInfo = {
    tag: string;
    publishedAt: string;
    url: string;
};

type ReleaseCachePayload = ReleaseInfo & { fetchedAt: number };

export default function LatestRelease() {
    const [release, setRelease] = useState<ReleaseInfo | null>(null);

    useEffect(() => {
        if (!ExecutionEnvironment.canUseDOM) {
            return undefined;
        }

        const controller = new AbortController();

        const readCache = (): ReleaseInfo | null => {
            try {
                const raw = window.localStorage.getItem(CACHE_KEY);
                if (!raw) return null;
                const parsed = JSON.parse(raw) as Partial<ReleaseCachePayload>;
                if (
                    typeof parsed.tag !== 'string' ||
                    typeof parsed.publishedAt !== 'string' ||
                    typeof parsed.url !== 'string' ||
                    typeof parsed.fetchedAt !== 'number'
                ) {
                    return null;
                }
                if (Date.now() - parsed.fetchedAt > CACHE_TTL_MS) return null;
                return { tag: parsed.tag, publishedAt: parsed.publishedAt, url: parsed.url };
            } catch {
                return null;
            }
        };

        const writeCache = (info: ReleaseInfo): void => {
            try {
                const payload: ReleaseCachePayload = { ...info, fetchedAt: Date.now() };
                window.localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
            } catch {
                // Ignore storage errors (private mode/quota).
            }
        };

        async function fetchRelease() {
            try {
                const response = await fetch(RELEASE_API, {
                    signal: controller.signal,
                    headers: { Accept: 'application/vnd.github+json' },
                });
                if (!response.ok) return;
                const data = (await response.json()) as {
                    tag_name?: unknown;
                    published_at?: unknown;
                    html_url?: unknown;
                };
                if (
                    typeof data.tag_name === 'string' &&
                    typeof data.published_at === 'string' &&
                    typeof data.html_url === 'string'
                ) {
                    const info: ReleaseInfo = {
                        tag: data.tag_name,
                        publishedAt: data.published_at,
                        url: data.html_url,
                    };
                    setRelease(info);
                    writeCache(info);
                }
            } catch {
                // Stay silent: the hero simply shows no release line.
            }
        }

        const cached = readCache();
        if (cached) {
            setRelease(cached);
        } else {
            fetchRelease();
        }

        return () => controller.abort();
    }, []);

    if (!release) return null;

    const date = new Date(release.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <p className={styles.release}>
            <a href={release.url} target="_blank" rel="noreferrer" className={styles.badge}>
                <span aria-hidden>🎉</span>
                <span>
                    Latest release: <strong>{release.tag}</strong> ({date})
                </span>
            </a>
        </p>
    );
}
