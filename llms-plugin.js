import path from 'node:path';
import fs from 'node:fs';

export default async function pluginLlmsTxt(context) {
    return {
        name: "llms-txt-plugin",
        loadContent: async () => {
            const { siteDir } = context;
            const contentDir = path.join(siteDir, "docs");
            const allMdx = [];

            // recursive function to get all mdx files
            const getMdxFiles = async (dir) => {
                const entries = await fs.promises.readdir(dir, { withFileTypes: true });

                for (const entry of entries) {
                    const fullPath = path.join(dir, entry.name);
                    if (entry.isDirectory()) {
                        await getMdxFiles(fullPath);
                    } else if (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")) {
                        const content = await fs.promises.readFile(fullPath, "utf8");
                        allMdx.push(content);
                    }
                }
            };

            await getMdxFiles(contentDir);
            return { allMdx };
        },
        postBuild: async ({ content, routes, outDir }) => {
            const { allMdx } = content;

            // Write concatenated MDX content
            const concatenatedPath = path.join(outDir, "llms-full.txt");
            await fs.promises.writeFile(concatenatedPath, allMdx.join("\n\n---\n\n"));

            // console.log('routes', routes);
            // we need to dig down several layers:
            // find PluginRouteConfig marked by plugin.name === "docusaurus-plugin-content-docs"
            const docsPluginRouteConfigs = routes.filter(
                (route) => route.plugin.name === "docusaurus-plugin-content-docs"
            );
            // console.log('docsPluginRouteConfigs', docsPluginRouteConfigs);

            const docsRecords = docsPluginRouteConfigs.map((config) => {
                return config.routes.filter((r) => r?.props?.version)
                    .filter((r) => r?.priority !== undefined)
                    .map((route) => {
                        const currentVersionDocsRoutes = route.props.version.docs;

                        return Object.entries(currentVersionDocsRoutes).map(([path, record]) => {
                            return `- [${record.title}](${path}): ${record.description}`;
                        });
                    }).flat();
            }).flat();

            // Build up llms.txt file
            const llmsTxt = `# ${context.siteConfig.title}\n\n## Docs\n\n${docsRecords.join("\n")}`;

            // Write llms.txt file
            const llmsTxtPath = path.join(outDir, "llms.txt");
            await fs.promises.writeFile(llmsTxtPath, llmsTxt);
        },
    };
}
