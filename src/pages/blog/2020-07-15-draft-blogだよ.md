---
templateKey: blog-post
title: draft blogだよ
date: 2020-07-15T02:42:52.448Z
description: 必須項目を減らさなkyな
featuredpost: true
featuredimage: /img/flavor_wheel.jpg
tags:
  - script
  - style
  - inline
---
branch変更したから、それでどうにかなるわけではない\
ここにhtml書いたらどうなるの？

<p>

ここは記事内で書いているpタグの中ですそういうとこだぞ

</p>

<b>htmlタグいけるね</b>

`codeとしてエスケープもできる<div className="reactClass" />`

<ul class="hogelist">

<li> リストをliタグで</li>

<li> bodyにstyleタグを書いても反映される。優秀か。

<li class="js-control"> bodyにscriptかいたらどうなるのっと</li>

</ul>

<style>

.hogelist{

background-color: #ededed;

}

</style>

<script>

var testElement = document.querySelector('.js-control');

testElement.style.color = 'blue';

</script>