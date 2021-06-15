<template>
  <div id="app">
    <section class="left_side">
      <div class="nav_title">
        <ul >
          <li v-for="item of titleList" :key="item.id" @click="toURL(item.title)">{{ item.title }}</li>
        </ul>
      </div>
    </section>
    <section class="right_side">
      <p>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/articleOverview">Go to Overview</router-link>
        <router-link to="/articleDetail">Go to Detail</router-link>
      </p>
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      titleList: [
        {id: 1, title: 'Angular', children: []},
        {id: 2, title: 'React', children: []},
        {id: 3, title: 'Vue', children: []},
        {id: 4, title: 'Typescript', children: []}
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    // 路由跳转及传参
    toURL (title) {
      this.$router.push({
        name: 'ArticleOverview',
        query: {
          title: title
        }
      })
    }
  },
  // ajax请求获取页面初始化数据，后续封装http请求
  mounted: function () {
    this.$http({
      method: 'get',
      url: '',
      data: {}
    }).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
}
.left_side {
  width: 240px;
  background-color: rgb(84, 92, 100);
}
.nav_title {
  height: 90vh;
}
.nav_title>ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.nav_title>ul>li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: rgb(122,144,158);
}
.el-menu {
  height: 80vh;
}
.right_side {
  flex: 1;
  padding: 1em 1em;
  overflow: hidden;
}
</style>
