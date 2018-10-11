const rimrafPackage = require("rimraf")
const debug = require("debug")("utils:fs")

function rimraf(path) {
	debug("Removing: %s", path)
	rimrafPackage.sync(path)
}

module.exports = {
	rimraf,
}
