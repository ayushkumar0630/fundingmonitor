import Vue from 'vue'
import Router from 'vue-router'
import master from '@/components/master'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'master',
      component: master
    }
  ]
})
