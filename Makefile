.PHONY: boot-startup

boot-startup:
	npm install --legacy-peer-deps
	npm run docker:start
