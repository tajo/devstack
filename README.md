# React-Webpack-Babel-ESLint

There is a [Czech article](http://www.dzejes.cz/prvni-dev-stack.html) with detailed description of this devstack. It was created mainly for education purposes but it can be used as a bootstrap for real-world application. **It is simple** but powerful.

## Features
- **development mode with vanilla hot reloading**, no hacks (webpack)
- **production build**, minimized by Uglify (webpack)
- loaders for files, less and babel
- **babel es2015** preset for the browser part
- babel node6 preset for the server (node v6 is almost 100% ES2015 compatible)
- **eslint**, using popular ruleset defined by airbnb
- frontend page is served by node.js

## Missing stuff
- React-router
- Redux
- Immutable.js

**The libraries above are awesome, but you don't need them right away**. They bring some complexity and can be confusing if you are just starting with JavaScript. You should check them later. On the other hand, if you want to build a real production app with React, you need to use npm, transpiler (Babel) and bundler (Webpack). Linter (ESLint) is not necessary but it is quite handy and super easy to integrate, so it is included as well.

## Prerequisites

Download and install [node.js](http://nodejs.org) version 6+. I recommend to use [Node Version Manager](https://github.com/creationix/nvm). If you have to use older versions of Node, you should replace `babel-preset-node6` or stop using ES2015 for the server part.

## Download

```shell
git clone https://github.com/tajo/devstack.git
cd devstack
npm install
```

## Development mode

```shell
npm start
open http://localhost:8000
```

## Production mode

```shell
npm run build
npm run server
open http://localhost:8000
```

## ESLint

```shell
npm run lint
```
