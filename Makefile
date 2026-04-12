## help: 💡 Display available commands
.PHONY: help
help:
	@echo '⚡️ GoFiber/Docs Development:'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^/ /'

## install: 📦 Install dependencies
.PHONY: install
install:
	npm install

## dev: 🚀 Start development server
.PHONY: dev
dev:
	npm start

## build: 🏗  Build production site
.PHONY: build
build:
	npm run build

## serve: 🌐 Serve production build locally
.PHONY: serve
serve:
	npm run serve

## spell: 📝 Run spell check on blog and website source
.PHONY: spell
spell:
	npx cspell "blog/**" "src/**" --no-progress

## codespell: 📝 Run codespell on blog and website source
.PHONY: codespell
codespell:
	codespell blog src --ignore-words-list "TE,te"

## markdown: 🎨 Find markdown format issues (Requires markdownlint-cli2)
.PHONY: markdown
markdown:
	@which markdownlint-cli2 > /dev/null || npm install -g markdownlint-cli2
	markdownlint-cli2 "blog/**/*.md"

## lint: 🚨 Run all lint checks (spell + markdown)
.PHONY: lint
lint: spell codespell markdown

## format: 🎨 Fix code format issues
.PHONY: format
format:
	npx prettier --write "src/**/*.{ts,tsx,scss,css,json}" "blog/**/*.md"

## clean: 🧹 Clean build artifacts
.PHONY: clean
clean:
	rm -rf build .docusaurus
