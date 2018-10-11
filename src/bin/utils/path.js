const path = require("path")
const debug = require("debug")("utils:path")

const { pkgPath } = require("./pkg")

const appDir = path.dirname(pkgPath)
debug("appDir: %s", appDir)

module.exports = {
	appDir,
}
