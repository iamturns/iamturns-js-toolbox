const { produceLintStagedConfig } = require("./src")

module.exports = produceLintStagedConfig()

// CONFIG OVERRIDE EXAMPLE

// module.exports = produceLintStagedConfig(config => {
/* eslint-disable no-param-reassign */
// config.exampleOverride = true
/* eslint-enable no-param-reassign */
// })
