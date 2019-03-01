import Vue from 'vue'
import Router from 'vue-router'
import Article_list from '@/page/Article_list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Article_list',
      component: Article_list
    }
  ]
})