# iamturns-js-toolbox

> Toolbox for my JavaScript projects

- Sensible default configs for lint-staged (more coming soon)
- Useful scripts: format, lint, validate, pre-commit, upgrade, reinstall, reset

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Configs](#configs)
  - [Overriding config](#overriding-config)
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

Exported from main package:

- `produceLintStagedConfig()`

### Overriding config

```javascript
produceExampleConfig(config => {
	// https://github.com/mweststrate/immer
	/* eslint-disable no-param-reassign */
	config.exampleOverride = true
	delete config.exampleOverride
	/* eslint-enable no-param-reassign */
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
