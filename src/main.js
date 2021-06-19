// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import QS from 'qs'
import apis from './request/apis'
import './assets/css/main.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$api = apis

Vue.use(QS)

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
