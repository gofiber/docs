import path from 'node:path';
import fs from 'node:fs';
import type {LoadContext} from '@docusaurus/types';

type DocsIndexRecord = {
    title?: string;
    description?: string;
};

type VersionedDocsRoute = {
    props?: {
        version?: {
            docs?: Record<string, DocsIndexRecord>;
        };
    };
    priority?: number;
};

type PluginRouteConfig = {
    plugin?: {
        name?: string;
    };
    routes?: VersionedDocsRoute[];
};

function isDocsPluginRouteConfig(route: unknown): route is PluginRouteConfig {
    if (!route || typeof route !== 'object') {
        return false;
    }

    const maybeRoute = route as PluginRouteConfig;
    return maybeRoute.plugin?.name === 'docusaurus-plugin-content-docs' && Array.isArray(maybeRoute.routes);
}

const pluginLlmsTxt = async (context: LoadContext) => {
    return {
        name: 'llms-txt-plugin',
        loadContent: async () => {
            const { siteDir } = context;
            const contentDir = path.join(siteDir, 'docs');
            const markdownFiles: string[] = [];

            const collectMarkdownFiles = async (dir: string): Promise<void> => {
                const entries = await fs.promises.readdir(dir, { withFileTypes: true });

                for (const entry of entries) {
                    const fullPath = path.join(dir, entry.name);
                    if (entry.isDirectory()) {
                        await collectMarkdownFiles(fullPath);
                    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
                        markdownFiles.push(fullPath);
                    }
                }
            };

            await collectMarkdownFiles(contentDir);
            markdownFiles.sort();

            return { markdownFiles };
        },
        postBuild: async ({ content, routes, outDir }: {content: {markdownFiles: string[]}; routes: unknown[]; outDir: string}) => {
            const { markdownFiles } = content;

            // Write concatenated markdown content without keeping all file bodies in memory.
            const concatenatedPath = path.join(outDir, 'llms-full.txt');
            const output = fs.createWriteStream(concatenatedPath, { encoding: 'utf8' });
            for (const [index, filePath] of markdownFiles.entries()) {
                const markdown = await fs.promises.readFile(filePath, 'utf8');
                if (index > 0) {
                    output.write('\n\n---\n\n');
                }
                output.write(markdown);
            }
            await new Promise<void>((resolve, reject) => {
                output.end(() => resolve());
                output.on('error', reject);
            });

            // console.log('routes', routes);
            // we need to dig down several layers:
            // find PluginRouteConfig marked by plugin.name === "docusaurus-plugin-content-docs"
            const docsPluginRouteConfigs = routes.filter(isDocsPluginRouteConfig);
            // console.log('docsPluginRouteConfigs', docsPluginRouteConfigs);

            const docsRecords = docsPluginRouteConfigs.map((config) => {
                return (config.routes ?? []).filter((route) => Boolean(route?.props?.version?.docs))
                    .filter((route) => route?.priority !== undefined)
                    .map((route) => {
                        const currentVersionDocsRoutes = route.props?.version?.docs ?? {};

                        return Object.entries(currentVersionDocsRoutes).map(([docPath, record]) => {
                            return `- [${record.title ?? 'Untitled'}](${docPath}): ${record.description ?? ''}`;
                        });
                    }).flat();
            }).flat();

            // Build up llms.txt file
            const llmsTxt = `# ${context.siteConfig.title}\n\n## Docs\n\n${docsRecords.join('\n')}`;

            // Write llms.txt file
            const llmsTxtPath = path.join(outDir, 'llms.txt');
            await fs.promises.writeFile(llmsTxtPath, llmsTxt);
        },
    };
};

export default pluginLlmsTxt;
