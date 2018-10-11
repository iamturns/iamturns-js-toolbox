const { isYarn } = require("./app")

function getInstallCommand(useYarn = isYarn()) {
	if (useYarn) {
		return {
			cmd: "yarn",
		}
	}
	return {
		cmd: "npm",
		args: ["install"],
	}
}

module.exports = {
	getInstallCommand,
}
