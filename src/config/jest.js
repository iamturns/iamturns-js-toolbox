const createJestConfig = ({ srcPath = "src/", web = false }) => {
	const config = {
		collectCoverageFrom: [`${srcPath}**/*.{js,jsx,ts,tsx}`],
		moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
		testEnvironment: "node",
		testMatch: [
			`<rootDir>/${srcPath}**/__tests__/**/*.{js,jsx,ts,tsx}`,
			`<rootDir>/${srcPath}**/?(*.)(spec|test).{js,jsx,ts,tsx}`,
		],
		transformIgnorePatterns: [
			"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
		],
	}

	if (web) {
		return {
			...config,
			testEnvironment: "jsdom",
			testURL: "http://localhost",
		}
	}

	return config
}

module.exports = {
	createJestConfig,
}
