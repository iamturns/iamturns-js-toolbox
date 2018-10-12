const { produce } = require("immer")

const defaultConfig = {
	linters: {},
}

const createLintStagedConfig = ({
	skipDoctoc = false,
	skipFormat = false,
	skipLint = false,
	skipTest = false,
} = {}) =>
	[
		skipDoctoc ? null : addLinterDoctoc,
		skipFormat ? null : addLinterFormat,
		skipLint ? null : addLinterLint,
		skipTest ? null : addLinterTest,
	]
		.filter(Boolean)
		.reduce((config, fn) => fn(config), defaultConfig)

const addLinterDoctoc = config =>
	addLinter(config, "README.md", [
		"npx doctoc --maxlevel 3 --notitle",
		"git add",
	])

const addLinterFormat = config =>
	addLinter(config, "**/*.{js,jsx,ts,tsx,css,scss,less,json,md,yml,yaml,qgl}", [
		"npm run format --",
		"git add",
	])

const addLinterLint = config =>
	addLinter(config, "**/*.{js,jsx,ts,tsx}", ["npm run lint --"])

const addLinterTest = config =>
	addLinter(config, "**/*.{js,jsx,ts,tsx}", [
		"npm run test -- --bail --findRelatedTests --",
	])

const addLinter = (config, glob, commands) =>
	produce(config, newConfig => {
		/* eslint-disable no-param-reassign */
		if (!newConfig.linters.hasOwnProperty(glob)) {
			newConfig.linters[glob] = []
		}
		newConfig.linters[glob] = [...newConfig.linters[glob], ...commands]
		/* eslint-enable no-param-reassign */
	})

module.exports = {
	createLintStagedConfig,
}
