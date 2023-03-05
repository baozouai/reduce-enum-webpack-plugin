
<p align="center">
<h1 align="center">reduce-enum-webpack-plugin</h1>
</p>

<div align="center">


 [![NPM version][npm-image]][npm-url] ![NPM downloads][download-image]

[npm-image]: https://img.shields.io/npm/v/reduce-enum-webpack-plugin.svg?style=flat-square
[npm-url]: http://npmjs.org/package/reduce-enum-webpack-plugin


[download-image]: https://img.shields.io/npm/dm/reduce-enum-webpack-plugin.svg?style=flat-square
[download-url]: https://npmjs.org/package/reduce-enum-webpack-plugin


</div>

English | [中文](./README-zh_CN.md)
## About

A Webpack Plugin to reduce ts enum to js artifacts

eg:

before add plugin：
```ts
enum Status {
  PAID,
  UN_PAID
}

// =>

var Status;
(function (Status) {
  Status[Status.PAID = 0] = 'PAID'
  Status[Status.UN_PAID = 1] = 'UN_PAID'
})(Status || (Status = {}))
```

after add plugin：
```ts
enum Status {
  PAID,
  UN_PAID
}

// =>

var Status = {
  PAID: 0,
  UN_PAID: 1
}
```

`ts
## 📦  Install

```sh
pnpm add reduce-enum-webpack-plugin -D
# or
yarn add reduce-enum-webpack-plugin -D
# or
npm i reduce-enum-webpack-plugin -D
```

##  🔨 Usage

```js
const RuduceEnumWebpackPlugin = require('reduce-enum-webpack-plugin').default

// webpack.config.js

module.exports = {

  plugins: [
    isProduction && new RuduceEnumWebpackPlugin()
  ],
}
```
## 📄 License

reduce-enum-webpack-plugin is [MIT licensed](./LICENSE).