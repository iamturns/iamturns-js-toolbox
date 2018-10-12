const jestConfigDefault = {
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
	moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
	testEnvironment: "node",
	testMatch: [
		"<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
		"<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}",
	],
	transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$"],
}

const jestConfigBrowser = {
	...jestConfigDefault,
	testEnvironment: "jsdom",
	testURL: "http://localhost",
}

const createJestConfig = ({ web = false }) =>
	web ? jestConfigBrowser : jestConfigDefault

module.exports = {
	createJestConfig,
}
