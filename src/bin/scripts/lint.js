const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/app")

setupProcess()

spawn(
	{
		cmd: "npx",
		args: ["eslint", "."],
	},
	{
		exitOnComplete: true,
	},
)
