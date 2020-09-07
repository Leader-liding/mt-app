import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import indexPage from '@/page/index'
import changecity from '@/page/changeCity'
import goodList from '@/page/goodList'
import login from '@/page/login'
import register from '@/page/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: indexPage
        },
        {
          path: '/changecity',
          name: 'changecity',
          component: changecity
        },
        {
          path: 's/:name',
          name: 'goods',
          component: goodList
        }

      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        }
      ]
    }
  ]
})
