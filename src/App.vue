<template>
  <div id="app">
    <section class="left_side">
      <router-view/>
    </section>
    <section class="right_side">
      <div class="nav_title">
        <nav>ABOUT THE AUTHOR</nav>
        <div class="me">
          <img class="portrait" src="./assets/images/avatar.jpg" @click="toBackHome('Home')"/>
          <p class="introduce">
            {{ person.description }}
          </p>
        </div>
        <nav class="nav">NAVIGATION</nav>
        <div class="contianer">
          <ul >
            <li v-for="item of titleList" :key="item.id" @click="toURL(item.title)">
              <span>{{ item.title }}</span>
            </li>
          </ul>
        </div>
        <div class="other">
          <ul>
            <li @click="toArticleEdit()">新建文章</li>
          </ul>
        </div>
      </div>
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
      ],
      person: {}
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
    },
    toBackHome (name) {
      this.$router.push({
        name: name
      })
    },
    toArticleEdit () {
      this.$router.push({
        name: 'ArticleEdit'
      })
    }
  },
  // ajax请求获取页面初始化数据，后续封装http请求
  mounted: function () {
    this.$http({
      method: 'get',
      url: '/api/v1/person/resume',
      data: {}
    }).then((result) => {
      this.person = result.data.data
      console.log(this.person)
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
  width: 1120px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  margin: auto;
}
nav {
  display: inline-block;
  border-bottom: 3px solid #eee;
  font-weight: 600;
  font-size: 1.2em;
  margin-bottom: 10px;
}
.right_side {
  padding: 2em 2em 2em 4em;
  box-sizing: border-box;
  font-size: 14px;
  width: 265px;
  height: calc(100% - 30px);
  font-family: Angelina, Tahoma;
  border-right: 2px solid #eee;
  background: #fff;
}
.me {
  margin: 10px auto;
}
.me>.portrait {
  display: block;
  width: 180px;
  height: 180px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.me>p {
  margin: 2em 0;
  font-size: 1.2em;
  line-height: 1.2em;
}
.contianer {
  border-bottom: 1px solid #eee;
}
.contianer>ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: block;
}
.contianer>ul li {
  position: relative;
  display: block;
  margin: 1.5em 0;
}

.left_side {
  flex: 1;
  padding: 1em 1em;
  overflow: hidden;
}

.other ul {
  list-style: none;
  padding: 0;
}
</style>
