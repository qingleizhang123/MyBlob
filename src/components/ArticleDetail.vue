<template>
  <article>
    <h1>深入理解js事件循环机制(Node.js篇)</h1>
    <aside>
      <span class="tag">javascript</span>
      <span class="tag">eventloop</span>
      <span class="tag">Node.js</span>
    </aside>
    <div class="seperator"></div>
    <div class="content">
      <p>Node.js的事件循环机制发生在各个阶段</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleDetail'
}
</script>

<style scope>
article {
    padding: 1.8em;
    background: #fff;
    box-sizing: border-box;
    border: 2px solid #eee;
}
article h1 {
  font-size: 1.4em;
  margin: 0.67em 0;
}
article aside {
  display: block;
}
article aside .tag {
  background: #fbc4a2;
  color: #fff;
  padding: .2em;
  font-size: .8em;
  text-align: center;
  border-radius: 3px;
  margin-right: 0.2em;
}
article p {
  margin: 1em 0;
  text-indent: 1.5em;
}
</style>
