<template>
  <div id="app">
    <section class="left_side">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="vertical"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">个人中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">文章类别</template>
        <el-menu-item index="2-1">随感</el-menu-item>
        <el-menu-item index="2-2">旅行</el-menu-item>
        <el-menu-item index="2-3">音乐</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">技术</template>
          <el-menu-item index="2-4-1">Angular</el-menu-item>
          <el-menu-item index="2-4-2">Vue</el-menu-item>
          <el-menu-item index="2-4-3">React</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">文章管理</el-menu-item>
    </el-menu>
    </section>
    <section class="right_side">
      <p>
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
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
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
  width: 60%;
  margin: auto;
  min-height: 100%;
  position: relative;
  padding-bottom: 2em;
  display: flex;
}
.left_side {
  float: left;
  width: 220px
}
.right_side {
  flex: 13;
  padding: 1em 2em;
  overflow: hidden;
}
</style>
