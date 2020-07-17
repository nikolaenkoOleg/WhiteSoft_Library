install: install-deps

run:
	npx webpack-dev-server  --open  --history-api-fallback

install-deps:
	npm ci

build:
	rm -rf dist
	NODE_ENV=production npx webpack

lint:
	npx eslint .
