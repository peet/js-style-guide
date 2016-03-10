# eslint-config-awesome

[![npm version](https://badge.fury.io/js/eslint-config-awesome.svg)](http://badge.fury.io/js/eslint-config-awesome)

This package provides Peet's .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-awesome

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-awesome eslint-plugin-react eslint`
2. add `"extends": "awesome"` to your .eslintrc

### eslint-config-awesome/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-awesome eslint`
2. add `"extends": "awesome/base"` to your .eslintrc

See [the Javascript styleguide](https://github.com/peet/js-style-guide) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
