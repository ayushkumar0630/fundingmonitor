import Vue from 'vue'
import Router from 'vue-router'
import master from '@/components/master'
import signin from '@/components/signin'
import dashboard from '@/components/dashboard'
import signup from '@/components/signup'
import home from '@/components/home'
import investors from '@/components/investors'
import template from '@/components/template'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'master',
      component: master
    },
    {
      path: '*',
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
      component: dashboard,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/investors',
      name: 'investors',
      component: investors
    },
    {
      path: '/template',
      name: 'template',
      component: template
    }
  ]
})

router.beforeEach((to, from, next) => {

  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser){
    next({
      path: '/signin'
    });
  }
  else {
    next();
  }

});

export default router;