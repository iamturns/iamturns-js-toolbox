const path = require("path")

const { appDir } = require("../utils/path")
const { rimraf } = require("../utils/fs")
const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/app")
const { getInstallCommand } = require("../utils/commands")
const { logMessage } = require("../utils/log")

setupProcess()

logMessage("Removing /node_modules")
rimraf(path.join(appDir, "node_modules"))

spawn(getInstallCommand(), { exitOnComplete: true })
