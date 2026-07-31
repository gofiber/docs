# Don't Send a PR to Update Docs Files

The documentation content is written in the source repos and synced into this repo, so any
change to `docs/core`, `docs/contrib`, `docs/storage`, `docs/template`, `docs/recipes` or their
`versioned_docs` copies is overwritten by the next sync. Send those pull requests to the repo
the page comes from:

| Page on docs.gofiber.io | Source repo | Path |
| --- | --- | --- |
| API, guides, built-in middleware | https://github.com/gofiber/fiber | `docs/` |
| Contrib middleware | https://github.com/gofiber/contrib | `v3/<module>/README.md` |
| Storage drivers | https://github.com/gofiber/storage | `<driver>/README.md` |
| Template engines | https://github.com/gofiber/template | `<engine>/README.md` |
| Recipes | https://github.com/gofiber/recipes | `<recipe>/README.md` |

Any PR that edits those folders here won't be accepted.

Everything about the website itself is welcome: Docusaurus setup, build and deployment,
homepage, layout and styling, navigation, sidebars, versioning, search, blog posts and the
components in `src/`.

## What does this PR change?
