const configJest = require("./config/jest.js")
const configLintStaged = require("./config/lint-staged.js")
const configPrettier = require("./config/prettier.js")

module.exports = {
	...configJest,
	...configLintStaged,
	...configPrettier,
}
