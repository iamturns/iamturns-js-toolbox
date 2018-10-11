const path = require("path")
const fs = require("fs")
const { execSync } = require("child_process")

const { appDir } = require("./path")

function setupProcess() {
	// Makes the script crash on unhandled rejections instead of silently
	// ignoring them. In the future, promise rejections that are not handled will
	// terminate the Node.js process with a non-zero exit code.
	process.on("unhandledRejection", err => {
		throw err
	})
}

function isYarn() {
	const yarnLockPath = path.join(appDir, "yarn.lock")
	return fs.existsSync(yarnLockPath)
}

function isGitClean() {
	const gitStatus = execSync("git status --porcelain")
	return gitStatus.length === 0
}

module.exports = {
	setupProcess,
	isYarn,
	isGitClean,
}
