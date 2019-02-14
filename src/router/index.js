import Vue from 'vue'
import Router from 'vue-router'
import master from '@/components/master'
import signin from '@/components/signin'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
    }
  ]
})
