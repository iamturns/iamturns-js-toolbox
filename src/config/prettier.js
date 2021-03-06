const createPrettierConfig = () => ({
	// Why include an unnecessary character at the end of every line? Break the habit (automatically)!
	semi: false,
	// Trailing commas help with git merging and conflict resolution
	trailingComma: "all",
	overrides: [
		{
			files: ".editorconfig",
			options: { parser: "yaml" },
		},
	],
})

module.exports = {
	createPrettierConfig,
}
