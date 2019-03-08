import Vue from 'vue'
import Router from 'vue-router'
import Article_list from '@/page/Article_list'
import Detail from '@/page/Detail'
import test11 from '@/page/test11'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Article_list',
      component: Article_list
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/test11',
      name: 'test11',
      component: test11
    },
  ]
})
