const { isGitClean } = require("../utils/app")
const { logError } = require("../utils/log")

const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/app")
const { getInstallCommand } = require("../utils/commands")

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

spawn(getInstallCommand(), { exitOnComplete: true })
