<template>
  <main>
    <article>
    <h1>{{ article.title }}</h1>
    <aside>
      <span class="tag" v-for="(value, index) in tagArr" :key="index">{{ value }}</span>
    </aside>
    <div class="seperator"></div>
    <div class="content">
      <p>{{ article.content }}</p>
    </div>
  </article>
  <aside class="panel">
    <div class="panel-btn like-btn"></div>
    <div class="panel-btn comment-btn"></div>
    <div class="panel-btn collect-btn"></div>
  </aside>
  </main>

</template>

<script>
export default {
  name: 'ArticleDetail',
  data () {
    return {
      article: {
        id: 1,
        title: '深入理解js事件循环机制(Node.js篇)',
        tags: 'javascript,eventloop,Node.js',
        content: 'Node.js的事件循环机制发生在各个阶段'
      }
    }
  },
  computed: {
    tagArr: function () {
      return this.article.tags.split(',')
    }
  },
  mounted: function () {
    this.$http({
      method: 'get',
      url: '',
      data: {
        articleId: this.article.id
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
.panel {
  position: fixed;
  margin-left: -7rem;
  top: 22rem;
}
.panel .panel-btn {
    margin-bottom: .75rem;
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
    cursor: pointer;
}
.panel .like-btn {
  background-position: 53% 46%;
  background-image: url('../assets/images/like.svg');
}
.panel .comment-btn {
  background-position: 50% 55%;
  background-image: url('../assets/images/comment.svg');
}
.panel .collect-btn {
  background-position: 53% 46%;
  background-image: url('../assets/images/collect.svg');
}
</style>
