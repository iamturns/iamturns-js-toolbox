const crossSpawn = require("cross-spawn")

const debug = require("debug")("utils:spawn")

function spawn(
	{ cmd, args, options = { stdio: "inherit" } },
	{ exitOnComplete = false, exitOnError = true } = {},
) {
	debug("Spawning command: %s", cmd)
	debug("Args: %j", args)
	debug("Options: %j", options)
	debug("Exit on complete: %j", exitOnComplete)
	debug("Exit on error: %j", exitOnError)

	const response = crossSpawn.sync(cmd, args, options)
	debug("Response status: %j", response.status)

	if (shouldExit(exitOnComplete, exitOnError, response)) {
		debug("shouldExit = true")
		process.exit(response.status)
	}

	return response
}

function shouldExit(exitOnComplete, exitOnError, response) {
	if (exitOnComplete) {
		return true
	}
	return exitOnError && response.status !== 0
}

module.exports = {
	spawn,
}
