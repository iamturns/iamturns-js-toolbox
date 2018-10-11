// Some settings automatically inherited from .editorconfig

const { producePrettierConfig } = require("./src")

module.exports = producePrettierConfig(config => {
	// https://github.com/mweststrate/immer
	/* eslint-disable no-param-reassign */
	config.exampleOverride = true
	delete config.exampleOverride
	/* eslint-enable no-param-reassign */
})
