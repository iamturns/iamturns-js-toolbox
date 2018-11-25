#!/usr/bin/env node

const path = require("path")
const debug = require("debug")("index")

const { setupProcess } = require("./utils/app")
const { spawn } = require("./utils/spawn")
const { logMessage, logError } = require("./utils/log")

function getScriptPath(scriptName) {
	try {
		const relativeScriptPath = path.join(__dirname, "./scripts", scriptName)
		return require.resolve(relativeScriptPath)
	} catch (error) {
		return undefined
	}
}

function launch() {
	const [executor, bin, script, ...args] = process.argv

	const logUsage = () => {
		logMessage(`Usage: ${bin} [script] [--flags]`)
	}

	debug("Executor: %s", executor)
	debug("Bin: %s", bin)
	debug("Script: %s", script)
	debug("Args: %j", args)

	if (!script) {
		logUsage()
		process.exit(0)
	}

	const scriptPath = getScriptPath(script)
	if (!scriptPath) {
		logError(`Unknown script "${script}".`)
		logMessage()
		logUsage()
		process.exit(1)
	}

	const scriptCommand = {
		cmd: executor,
		args: [scriptPath, ...args],
	}

	spawn(scriptCommand, { exitOnComplete: true })
}

setupProcess()
launch()
