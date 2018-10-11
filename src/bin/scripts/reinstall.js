const path = require("path")
const debug = require("debug")("upgrade")

const { appDir } = require("../utils/path")
const { rimraf } = require("../utils/fs")
const { spawn } = require("../utils/spawn")
const { setupProcess, getInstallCommand } = require("../utils/app")
const { logMessage } = require("../utils/log")

setupProcess()

logMessage("Removing /node_modules")
rimraf(path.join(appDir, "node_modules"))

const installCommand = getInstallCommand()
debug("Install command: %j", installCommand)
spawn(installCommand, { exitOnComplete: true })
