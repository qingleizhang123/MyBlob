<template>
  <ul class="article_list">
    <li>
      <time>5 Nonember 2020</time>
      <h3><a>深入理解js事件循环机制(Node.js篇)</a></h3>
      <p class="excerpt">在上一篇已经介绍了事件循环机制和一些相关概念，但主要是针对浏览器端的研究，在Node.js环境是否也一样？本文会以Node.js为运行环境继续介绍。</p>
    </li>
    <li>
      <time>4 Nonember 2020</time>
      <h3><a>深入理解js事件循环机制(浏览器篇)</a></h3>
      <p class="excerpt">众所周知js是单线程语言，却可以很好的处理多个异步请求，其中的运行机制是怎样的呢？浏览器和nodejs的处理方式是一样的吗？</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ArticleOverview'
}
</script>

<style scope>
.article_list {
  list-style: none;
}
.article_list li {
    padding: 1em;
    border-bottom: 1px dashed #cdcdcd;
    overflow: hidden;
    box-sizing: border-box;
}
.article_list li time {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: Angelina, Tahoma;
}
.article_list h3 {
    display: inline-block;
    margin-left: 2em;
}
.article_list .excerpt {
    font-size: .8em;
    color: #999;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
