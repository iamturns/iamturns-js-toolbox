/**
 * # comment-ignore-output
 * We are only *attempting* to fix lint problems
 * Any errors encountered should be ignored here
 * Only the separate `lint` command should display errors
 */

const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/app")

setupProcess()

const prettierResult = spawn({
	cmd: "npx",
	args: [
		"prettier",
		"--write",
		"**/*.{js,jsx,ts,tsx,css,scss,less,json,md,yml,yaml,qgl}",
	],
})

spawn(
	{
		cmd: "npm",
		args: ["run", "lint", "--", "--fix"],
		options: {
			// Refer to: comment-ignore-output
			stdio: "ignore",
		},
	},
	// Refer to: comment-ignore-output
	{ exitOnError: false },
)

process.exit(prettierResult.status)
