const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/app")

setupProcess()

spawn(
	{
		cmd: "concurrently",
		args: ["npm:lint", "npm:test", "npm:build", "--kill-others-on-fail"],
	},
	{ exitOnComplete: true },
)
