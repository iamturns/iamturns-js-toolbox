const { produceLintStagedConfig } = require("./src")

module.exports = produceLintStagedConfig(config => {
	// https://github.com/mweststrate/immer
	/* eslint-disable no-param-reassign */
	config.exampleOverride = true
	delete config.exampleOverride
	/* eslint-enable no-param-reassign */
})
