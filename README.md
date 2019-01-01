**WARNING!**

This package is **deprecated**.

Features have been migrated to [create-iamturns-app](https://github.com/iamturns/create-iamturns-app) and [iamturns-scripts](https://github.com/iamturns/iamturns-scripts).

---

# iamturns-js-toolbox

> Toolbox for my JavaScript projects

- Sensible default configs for Jest, Prettier, and lint-staged
- Useful scripts: format, lint, validate, upgrade, reinstall, and reset
- TypeScript supported

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Configs](#configs)
  - [Jest](#jest)
  - [Prettier](#prettier)
  - [lint-staged](#lint-staged)
- [Scripts](#scripts)
  - [iamturns-js-toolbox format](#iamturns-js-toolbox-format)
  - [iamturns-js-toolbox lint](#iamturns-js-toolbox-lint)
  - [iamturns-js-toolbox validate](#iamturns-js-toolbox-validate)
  - [iamturns-js-toolbox pre-commit](#iamturns-js-toolbox-pre-commit)
  - [iamturns-js-toolbox upgrade](#iamturns-js-toolbox-upgrade)
  - [iamturns-js-toolbox reinstall](#iamturns-js-toolbox-reinstall)
  - [iamturns-js-toolbox reset](#iamturns-js-toolbox-reset)
- [Inspiration](#inspiration)
- [Credits](#credits)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```bash
npm install iamturns-js-toolbox --save-dev
```

## Configs

### Jest

- Collect coverage from src/
- TypeScript support
- Web mode, enables jsdom and sets testURL

Example `jest.config.js` file:

```javascript
const { createJestConfig } = require("iamturns-js-toolbox")

module.exports = createJestConfig({
  srcPath: "app", // default = 'src'/
  web: true, // default = false
})
```

### Prettier

- Default settings with exceptions:
  - No semi colons
    - Why include an unnecessary character at the end of every line? Break the habit (automatically)!
  - Trailing commas
    - Helps with git merging and conflict resolution
- Ensure .editorconfig is parsed as YAML

Example `prettier.config.js` file:

```javascript
// Some settings automatically inherited from .editorconfig

const { createPrettierConfig } = require("iamturns-js-toolbox")

module.exports = createPrettierConfig()
```

### lint-staged

- Format, lint, and test staged files
- README.md changed? Update "Table of Contents" (using [doctoc](https://github.com/thlorenz/doctoc))

Example `lint-staged.config.js` file:

```javascript
const { createLintStagedConfig } = require("iamturns-js-toolbox")

module.exports = createLintStagedConfig({
  skipDoctoc: true, // default = false
  skipFormat: true, // default = false
  skipLint: true, // default = false
  skipTest: true, // default = false
})
```

## Scripts

### iamturns-js-toolbox format

1. Run Prettier on all supported files (js, ts, css, json, md, yaml, etc).

2. Run ESLint with `--fix` to automatically fix any linting issues.

Note: _all_ files will be formatted. Use a [.prettierignore file](https://prettier.io/docs/en/ignore.html) to prevent formatting specific files or directories.

Example `.prettierignore` file:

```text
/node_modules
/package-lock.json
```

### iamturns-js-toolbox lint

Run ESLint on all supported files.

Note: _all_ files will be linted. Use an [.eslintignore file](https://eslint.org/docs/user-guide/configuring#eslintignore) to prevent linting specific files or directories.

Example `.eslintignore` file:

```text
/node_modules
```

### iamturns-js-toolbox validate

Concurrently run `lint`, `test`, and `build` commands.

### iamturns-js-toolbox pre-commit

Run [lint-staged](https://github.com/okonet/lint-staged), then run `build` command.

Note: `lint-staged` requires a [configuration file](https://github.com/okonet/lint-staged#configuration).

### iamturns-js-toolbox upgrade

1. Update `/node_modules` and `/package-lock.json` according to semver rules defined in `/package.json` files.

   This is a safe operation (assuming dependencies correctly follow semantic versioning).

2. Once complete, check for outdated dependencies (outside of semver rules in `/package.json`), and interactively select dependencies to update.

### iamturns-js-toolbox reinstall

Remove `/node_modules` and reinstall.

### iamturns-js-toolbox reset

Reset to a fresh git checkout and reinstall.

## Inspiration

- [kcd-scripts](https://github.com/kentcdodds/kcd-scripts)
- [react-scripts](https://github.com/facebook/create-react-app/tree/next/packages/react-scripts)

## Credits

Authored and maintained by Matt Turnbull ([iamturns.com](https://iamturns.com) / [@iamturns](https://twitter.com/iamturns))

To all [contributors](https://github.com/iamturns/iamturns-js-toolbox/graphs/contributors) (if you exist) - thank you!

## License

Open source software [licensed as MIT](https://github.com/iamturns/iamturns-js-toolbox/blob/master/LICENSE).
