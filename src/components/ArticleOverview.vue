<template>
  <ul class="article_list">
    <li v-for="item of list" :key="item.id">
      <time>{{ item.date }}</time>
      <h3><a @click="getDetailArticle(item.id)">{{ item.title }}</a></h3>
      <p class="excerpt">{{ item.abstract }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ArticleOverview',
  data () {
    return {
      list: [{id: 1, date: '5 November 2020', title: '深入理解js事件循环机制(Node.js篇)', abstract: '在上一篇已经介绍了事件循环机制和一些相关概念，但主要是针对浏览器端的研究，在Node.js环境是否也一样？本文会以Node.js为运行环境继续介绍。'}, {
        id: 2, date: '4 November 2020', title: '深入理解js事件循环机制(浏览器篇)', abstract: '众所周知js是单线程语言，却可以很好的处理多个异步请求，其中的运行机制是怎样的呢？浏览器和nodejs的处理方式是一样的吗？'}, {
        id: 3, date: '3 November 2020', title: 'javascript之原型与原型链', abstract: 'js中一切皆对象，而对象又分为普通对象和函数对象，函数对象都有一个prototype属性，指向它的原型对象。'}]
    }
  },
  methods: {
    getDetailArticle (id) {
      this.$router.push({
        name: 'ArticleDetail',
        query: {
          titleId: id
        }
      })
    }
  },
  mounted: function () {
    const articleId = this.$route.query.titleId
    this.$http({
      method: 'get',
      url: '',
      data: {
        articleId: articleId
      }
    }).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    })
  }
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
