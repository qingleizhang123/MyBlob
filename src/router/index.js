import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld1'
import ArticleOverview from '@/components/ArticleOverview'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello1',
      name: 'HelloWorld1',
      component: HelloWorld1
    },
    {
      path: '/articleOverview',
      name: 'ArticleOverview',
      component: ArticleOverview
    },
    {
      path: '/articleDetail',
      name: 'ArticleDetail',
      component: ArticleDetail
    }
  ]
})
