<template>
    <div class="nav-dash">
      <section class="section-nav">
      <div class="container-fluid">
        <div class="row">
     <b-navbar toggleable="lg" type="light" variant="info" class="nav-wrapper">
    <b-navbar-brand href="#" class="brand">
      <router-link :to="{ name: 'master'}" class="brand-logo">
       <a>
          <img src="../assets/fundingmonitor.svg" alt width="40px">
          <span>Funding Monitor</span>
        </a>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">

       
         <b-nav-item >
          <router-link :to="{ name: 'signin'}" class="user">
           <div>
            <span class="icon user"></span>
            <span class="label" style="color: #6e6e6e">SIGN IN</span>
           </div>
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div></div></section></div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'
import { db } from '@/firebaseconf.js'
 
export default {
  name: "navbar",
  data() {
    return {
      first_name: null,
      last_name: null
    };
  },
  // methods: {
  //   beforeCreate() {
  //     let curr_user = firebase.auth().currentUser
  //     this.first_name = db.collections('Users').get
  //   },
  // }
};
</script>
<style lang="scss" scoped>
@import './node_modules/bootstrap/scss/bootstrap';
@import './node_modules/bootstrap-vue/src/index.scss';
@import '../scss/common.scss';
nav{
  box-shadow: none;
}

.section-nav{  
      background-color: #ffffff !important;
    border-bottom: 1px solid #eaeaea;    
}

.bg-info{
  
      background-color: #ffffff !important;
   width: 100%;
}
.nav-wrapper {
padding: 0px;

.brand{
  padding:10px;
  width:236px;
  margin-right: 0px;
  .brand-logo {
    img {
      display: block;
      float: left;
      margin: 0 12px 0 0;
    }
    span {
      font-size: 18px;
      display: block;
      float: left;
      margin-top: 8px;
      
    font-weight: 500;
    color: #6e6e6e ;
    }
  }
}
  
}
.sub-nav{
    li{
     a{
       span{
           
       }

     
     } 
    }
  }

  .user{
   .icon{
        margin-right:10px;
        width:30px;
        height:30px;
 display: inline-block;
      color: #6e6e6e  !important;    
    vertical-align: middle;  
        &.user{
          background-image: url("../assets/icon-user.svg");
          background-repeat: no-repeat;
        }
      }
      .label{
            margin-top: 4px;
    display: block;
    float: right;
      }
      }

      .navbar-expand-lg .navbar-nav .nav-link {
    font-weight: 500;
    font-size: 14px;
    color: #333;
    color: #8d949f;
}
</style>