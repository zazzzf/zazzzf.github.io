---
title: web笔记
date: 2020-03-25
categories:
  - 笔记
tags:
  - 笔记
  - 标签
  - html
---

::: tip

本文主要为日常遇到问题的笔记，方便查找

:::

<!-- more -->

## 1、加载外站图片

加载外站图片时，大部分站点有防盗链，我们可以在 img标签中加入 referrerpolicy="no-referrer" 属性来防止跨域问题；

```html
<img src="xxx" referrerpolicy="no-referrer">
```
