import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import boking from '@/components/boking_index'
import publics from '@/components/public'
import login from '@/pages/login'
import register from '@/pages/register'
import vueResource from 'vue-resource'

Vue.use(vueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: boking
    },
    {
      path: '/public',
      component: publics
    },
    {
      path: '/public',
      component: publics
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }
  ]
})
