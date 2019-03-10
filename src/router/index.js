import Vue from 'vue'
import Router from 'vue-router'
import master from '@/components/master'
import signin from '@/components/signin'
import dashboard from '@/components/dashboard'
import signup from '@/components/signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'master',
      component: master
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})
