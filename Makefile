.PHONY: boot-startup

boot-startup:
	npm install
	npm run docker:start
