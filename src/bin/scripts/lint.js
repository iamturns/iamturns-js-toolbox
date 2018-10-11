/**
 * # Lint
 * lint [...files]
 */

const yargsParser = require("yargs-parser")

const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/app")

setupProcess()

const args = process.argv.slice(2)
const argsParsed = yargsParser(args)
const argFiles = argsParsed._
const lintArgs =
	argFiles.length !== 0
		? // Files are passed in, use args as provided
		  args
		: // Supplement args with all files
		  [...args, "--", "./"]

spawn(
	{
		cmd: "npx",
		args: ["eslint", ...lintArgs],
	},
	{
		exitOnComplete: true,
	},
)
