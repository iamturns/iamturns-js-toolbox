const prettierExtensions = [
	"css",
	"gql",
	"graphql",
	"html",
	"js",
	"json",
	"jsx",
	"less",
	"md",
	"mdx",
	"scss",
	"ts",
	"tsx",
	"vue",
	"yaml",
	"yml",
]

const prettierFilesGlob = `**/*.{${prettierExtensions.join(",")}}`

module.exports = {
	prettierExtensions,
	prettierFilesGlob,
}
