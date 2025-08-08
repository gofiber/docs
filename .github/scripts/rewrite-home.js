// Usage: node .github/scripts/rewrite-home.js out/index.html
const fs = require('fs');
const DOCS = 'https://docs.gofiber.io/';
const ROOT = 'https://gofiber.io/';
const file = process.argv[2] || 'out/index.html';

let html = fs.readFileSync(file, 'utf8');

// Inject <base> + anti-redirect loader right after <head>
html = html.replace(/<head\b[^>]*>/i, m => `${m}<base href="${DOCS}"><script src="/anti-redirect.js"></script>`);

const toDocs = (p) => (!p || p === '/') ? DOCS : DOCS + String(p).replace(/^\/+/, '');

// Root-absolute attributes -> DOCS (quoted & unquoted)
html = html.replace(
    /\b(href|src|action|poster|content|data-(?:href|src))=(["']?)(\/(?!\/)[^"'\s>]+)/gi,
    (_m, attr, _q, path) => `${attr}="${toDocs(path)}"`
);

// href="/" -> DOCS root (quoted & unquoted)
html = html.replace(/\bhref=(["'])\/\1/gi, (_m, q) => `href="${DOCS}"`)
    .replace(/\bhref=\/(?=[\s>])/gi, 'href="' + DOCS + '"');

// srcset/imagesrcset -> DOCS
const fixSet = (v) => v.replace(/(^|,\s*)(\/(?!\/)[^,\s]+)/g, (_m, pre, p) => pre + toDocs(p));
html = html.replace(/\b(srcset|imagesrcset)=(["'])([^"']+)\2/gi, (_m, attr, q, val) => `${attr}=${q}${fixSet(val)}${q}`);

// inline CSS url(/...) -> DOCS
html = html.replace(/url\((["']?)\/(?!\/)/gi, 'url($1' + DOCS);

// Canonical/OG/Twitter -> ROOT
html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, '')
    .replace(/<meta\s+property=["']og:url["'][^>]*>/i, '')
    .replace(/<meta\s+name=["']twitter:url["'][^>]*>/i, '')
    .replace(/<head\b[^>]*>/i, m => `${m}<link rel="canonical" href="${ROOT}"><meta property="og:url" content="${ROOT}"><meta name="twitter:url" content="${ROOT}">`);

// /home self-links -> DOCS root
html = html.replace(/\bhref=(["'])\/home\/?(#[^"']*)?\1/gi, (_m, q, h) => `href="${DOCS}${h || ''}"`)
    .replace(/\bhref=\/home\/?(#[^\s>"']*)/gi, (_m, h) => `href="${DOCS}${h || ''}"`)
    .replace(/\bhref=(["'])https?:\/\/docs\.gofiber\.io\/home\/?(#[^"']*)?\1/gi, (_m, q, h) => `href="${DOCS}${h || ''}"`)
    .replace(/\bhref=https?:\/\/docs\.gofiber\.io\/home\/?(#[^\s>"']*)/gi, (_m, h) => `href="${DOCS}${h || ''}"`);

// Keep shim on root (don't rewrite it to DOCS)
html = html.replace(/src=(["'])https:\/\/docs\.gofiber\.io\/anti-redirect\.js\1/gi, 'src="/anti-redirect.js"');

fs.writeFileSync(file, html, 'utf8');
