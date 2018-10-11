// @TODO add --skip-build
// Don't worry for now, put on roadmap

const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/app")

setupProcess()

spawn({
	cmd: "npx",
	args: ["lint-staged"],
})

spawn(
	{
		cmd: "npm",
		args: ["run", "build"],
	},
	{
		exitOnComplete: true,
	},
)
