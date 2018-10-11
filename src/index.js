const configLintStaged = require("./config/lint-staged.js")
const configPrettierStaged = require("./config/prettier.js")

module.exports = {
	...configLintStaged,
	...configPrettierStaged,
}
