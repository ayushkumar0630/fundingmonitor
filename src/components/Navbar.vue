<template>
  <!-- <div class="navbar"> -->
    <!-- <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          <img src="../assets/fundingmonitor.svg" alt width="40px">
          <span>Funding Monitor</span>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down sub-nav">
          <li>
            <router-link :to="{ name: 'signin'}" class="link"><span class="icon user"></span><span class="label">Sign In</span></router-link>
          </li>
        </ul>
      </div>
    </nav> -->
  <!-- </div> -->
    <div>
      <section class="section-nav">
      <div class="container-fluid">
        <div class="row">
     <b-navbar toggleable="lg" type="light" variant="info" class="nav-wrapper">
    <b-navbar-brand href="#">
       <a href="#" class="brand-logo">
          <img src="../assets/fundingmonitor.svg" alt width="40px">
          <span>Funding Monitor</span>
        </a>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">DOCS</b-nav-item>
        <b-nav-item href="#" >PRICING</b-nav-item>
        <b-nav-item href="#" >FEATURES</b-nav-item>
        <b-nav-item href="#" >FAQ</b-nav-item>
        <b-nav-item href="#" >BLOG</b-nav-item>
        <b-nav-item href="#" >FREE TOOLS</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

       
         <b-nav-item href="#" ><div class="user"><span class="icon user"></span><span class="label">SIGN IN</span></div></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div></div></section></div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "navbar",
  data() {
    return {};
  }
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