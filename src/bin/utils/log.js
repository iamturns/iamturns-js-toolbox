function logMessage(...args) {
	// eslint-disable-next-line no-console
	console.log(...args)
}

function logError(...args) {
	// eslint-disable-next-line no-console
	console.error(...args)
}

module.exports = {
	logMessage,
	logError,
}
