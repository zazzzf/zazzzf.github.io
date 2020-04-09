---
title: Webpack相关
date: 2020-04-09
categories:
  - Vue
  - Webpack
tags:
  - Vue
  - Webpack
next: ./视频播放器.md
---

::: tip

本文主要写一些webpack相关

:::

<!-- more -->

## webpackbar

用于Webpack的优雅进度条

<div>
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <img src="https://raw.githubusercontent.com/nuxt/webpackbar/master/assets/screen1.png">
</div>

### 安装

```sh
npm install webpackbar -D
```

### 在webpack中使用

然后将其作为webpack插件引入到webpack配置中

```javascript

const webpack = require('webpack');
const WebpackBar = require('webpackbar');

module.exports = {
  ...
  plugins: [
    new WebpackBar()
  ]
  ...
};

```

### 在vue.config.js 中配置

```javascript

const WebpackBar = require('webpackbar');

module.exports = {
  ...
  configureWebpack: {
    plugins: [
      new WebpackBar()
    ]
  }
  ...
};

```

### options

常用配置项， 填入的为默认值。

:::tip

具体配置可访问项目github查看[webpackbar](https://github.com/nuxt/webpackbar)

:::

```js
{
    name: "webpack",   //进度条前方显示文字
    color: "green",   //进度条颜色
    profile: false,  // 启用探查器
}
```

