import Vue from 'vue'
import Router from 'vue-router'
import master from '@/components/master'
import home from '@/components/home'
import blog from '@/components/blog'
import pricing from '@/components/pricing'
import features from '@/components/features'
import faq from '@/components/faq'
import contact from '@/components/contact'
import signin from '@/components/signin'
import team from '@/components/team'
import privacy from '@/components/privacy'
import signup from '@/components/signup'
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
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: pricing
    },
    {
      path: '/features',
      name: 'features',
      component: features
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})
