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

## 2、ES5的 forEach, map 方法的实现

有些项目仅使用es5， 写多了es6发现很多常用到的不方便使用，所以可以给项目添加一下

```javascript

//foreach
Array.prototype.forEach = function(fn) {
  if (this.length === 0) {
    return;
  }
  for (var i=0;i<this.length;i++) {
    fn(this[i], i, this)
  }
}

//map
Array.prototype.map = function(fn, context) {
  if (this.length === 0) {
    return;
  }
  var arr = [];
  for (var i=0;i<this.length;i++) {
      arr.push(fn.call(context, this[i], i, this))
  }
  return arr;
}

//find
Array.prototype.find = function(cb){
	for(var i = 0 ; i < this.length; i++){
		if(cb(this[i])){
			return this[i];
		}
	}
	return null
}
```

## 3、Date拓展

常用的Date扩展，时间格式化

```javascript
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2020-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2020-7-2 8:9:4.18 
Date.prototype.Format = function(fmt) {
	var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" +
        o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
```