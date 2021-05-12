<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">个人中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">文章类别</template>
        <el-menu-item index="2-1">Angular</el-menu-item>
        <el-menu-item index="2-2">Vue</el-menu-item>
        <el-menu-item index="2-3">React</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">其他</template>
          <el-menu-item index="2-4-1">ES6</el-menu-item>
          <el-menu-item index="2-4-2">Typescript</el-menu-item>
          <el-menu-item index="2-4-3">Html</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">文章管理</el-menu-item>
    </el-menu>
    <p>
      <router-link to="/">Go to HelloWorld</router-link>
      <router-link to="/hello1">Go to Hello1</router-link>
    </p>
    <router-view/>
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
}
</style>
