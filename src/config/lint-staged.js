const { produce } = require("immer")

const { prettierFilesGlob } = require("../shared/prettier")

const defaultConfig = {
	linters: {},
}

const addLinter = (config, glob, commands) =>
	produce(config, newConfig => {
		/* eslint-disable no-param-reassign */
		if (!newConfig.linters.hasOwnProperty(glob)) {
			newConfig.linters[glob] = []
		}
		newConfig.linters[glob] = [...newConfig.linters[glob], ...commands]
		/* eslint-enable no-param-reassign */
	})

const addLinterDoctoc = config =>
	addLinter(config, "README.md", [
		"npx doctoc --maxlevel 3 --notitle",
		"git add",
	])

const addLinterFormat = config =>
	addLinter(config, prettierFilesGlob, ["npm run format --", "git add"])

const addLinterLint = config =>
	addLinter(config, "**/*.{js,jsx,ts,tsx}", ["npm run lint --"])

const addLinterTest = config =>
	addLinter(config, "**/*.{js,jsx,ts,tsx}", [
		"npm run test -- --bail --findRelatedTests --",
	])

const createLintStagedConfig = ({
	skipDoctoc = false,
	skipFormat = false,
	skipLint = false,
	skipTest = false,
} = {}) =>
	[
		skipDoctoc ? undefined : addLinterDoctoc,
		skipFormat ? undefined : addLinterFormat,
		skipLint ? undefined : addLinterLint,
		skipTest ? undefined : addLinterTest,
	]
		.filter(Boolean)
		.reduce((config, fn) => fn(config), defaultConfig)

module.exports = {
	createLintStagedConfig,
}
