import Vue from 'vue'
import Router from 'vue-router'
import master from '@/components/master'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
