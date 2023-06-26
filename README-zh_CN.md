
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


中文 | [英文](./README.md)

## 关于

一个用来减少 ts enum 转 js 产物的 webpack 插件

eg:

没加插件前：
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

加插件后：
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


## 📦  安装

```sh
pnpm add reduce-enum-webpack-plugin -D
# or
yarn add reduce-enum-webpack-plugin -D
# or
npm i reduce-enum-webpack-plugin -D
```

 ## 🔨 使用

```js
const ReduceEnumWebpackPlugin = require('reduce-enum-webpack-plugin').default

// webpack.config.js

module.exports = {

  plugins: [
    isProduction && new ReduceEnumWebpackPlugin()
  ],
}
```
## 📄 License

reduce-enum-webpack-plugin is [MIT licensed](./LICENSE).