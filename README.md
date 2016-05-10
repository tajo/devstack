# React-Webpack-Babel-ESLint

There is a [Czech article](http://www.dzejes.cz/prvni-dev-stack.html) with detailed description of this devstack. It was created mainly for education purposes but it can be used as a bootstrap for real-world application. It is quite simplified and cutting-edge.

## Prerequisites

Download and install [node.js](http://nodejs.org) version 6+. I recommend to use [Node Version Manager](https://github.com/creationix/nvm).

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