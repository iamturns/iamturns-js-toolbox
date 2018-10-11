/**
 * # Usage
 * format [...files]
 */

/**
 * # comment-ignore-output
 * We are only *attempting* to fix lint problems
 * Any errors encountered should be ignored here
 * Only the separate `lint` command should display errors
 */

const yargsParser = require("yargs-parser")

const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/app")

setupProcess()

const args = process.argv.slice(2)
const argsParsed = yargsParser(args)
const argFiles = argsParsed._
const prettierFiles =
	argFiles.length !== 0
		? argFiles
		: ["**/*.{js,jsx,ts,tsx,css,scss,less,json,md,yml,yaml,qgl}"]

const formatResult = spawn({
	cmd: "npx",
	args: ["prettier", "--write", "--", ...prettierFiles],
})

spawn(
	{
		cmd: "npm",
		args: ["run", "lint", "--", "--fix", "--", ...argFiles],
		options: {
			// Refer to: comment-ignore-output
			stdio: "ignore",
		},
	},
	// Refer to: comment-ignore-output
	{ exitOnError: false },
)

process.exit(formatResult.status)
