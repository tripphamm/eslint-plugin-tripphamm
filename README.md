# @ejhammond/eslint-plugin

## Usage

> This package is included in [@ejhammond/JSKit](https://github.com/ejhammond/jskit) but can also be installed on its own.

```
yarn add @ejhammond/eslint-plugin
```

Depending on the project, extend `react`, or `node`.

```js
// .eslintrc.js

module.exports = {
  extends: [
    'plugin:@ejhammond/react',
    // or
    'plugin:@ejhammond/node',
  ],
};
```

## Rules

### Base

ESLint recommended and TypeScript-ESLint recommended
Import
Prettier
Jest (\*.spec.{js,jsx,ts,tsx})

### React

Base +

React recommended
React Hooks
JSX A11y

### Node

Base +

Allows `require`
Allows `console.log`
