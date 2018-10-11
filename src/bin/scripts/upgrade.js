const path = require("path")
const debug = require("debug")("upgrade")

const { appDir } = require("../utils/path")
const { rimraf } = require("../utils/fs")
const { spawn } = require("../utils/spawn")
const { setupProcess, isYarn, getInstallCommand } = require("../utils/app")
const { logMessage } = require("../utils/log")

setupProcess()

// Cache isYarn before removing lock files
const isYarnResponse = isYarn()

logMessage(
	`
# Step 1

Upgrading dependencies based on semver rules defined in package.json files
This is a safe operation (assuming dependencies correctly follow semantic versioning)
`,
)

logMessage("Removing lock file(s)")
rimraf(path.join(appDir, "package-lock.json"))
rimraf(path.join(appDir, "yarn.lock"))

logMessage("Removing /node_modules")
rimraf(path.join(appDir, "node_modules"))

logMessage("Reinstalling dependencies")
const installCommand = getInstallCommand(isYarnResponse)
debug("Install command: %j", installCommand)
spawn(installCommand)

logMessage(
	`
# Step 2

Checking for outdated dependencies (outside of semver rules in package.json)
`,
)

spawn(
	{
		cmd: "npm-check",
		args: [
			"--update",
			"--skip-unused", // unused module checking is unreliable
		],
	},
	{ exitOnComplete: true },
)
