const { produce } = require("immer")

const lintStagedConfig = {
	concurrent: false,
	linters: {
		"README.md": ["npx doctoc --maxlevel 3 --notitle", "git add"],
		"**/*.{js,jsx,ts,tsx,css,scss,less,json,md,yml,yaml,qgl}": [
			"npm run format --",
			"git add",
		],
		"**/*.{js,jsx,ts,tsx}": [
			"npm run lint --",
			"npm run test -- --bail --findRelatedTests",
		],
	},
}

const produceLintStagedConfig = (producer = () => {}) =>
	produce(lintStagedConfig, producer)

module.exports = {
	lintStagedConfig,
	produceLintStagedConfig,
}
