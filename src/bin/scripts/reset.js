const debug = require("debug")("reset")

const { isGitClean } = require("../utils/app")
const { logError } = require("../utils/log")

const { spawn } = require("../utils/spawn")
const { setupProcess, getInstallCommand } = require("../utils/app")

setupProcess()

if (!isGitClean()) {
	logError("Unable to run command when git repository has uncommitted changes.")
	process.exit(1)
}

spawn({
	cmd: "git",
	args: ["clean", "-dfx"],
})

spawn({
	cmd: "git",
	args: ["reset", "--hard"],
})

const installCommand = getInstallCommand()
debug("Install command: %j", installCommand)
spawn(installCommand, { exitOnComplete: true })
