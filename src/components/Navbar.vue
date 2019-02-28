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
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
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
nav{
  box-shadow: none;
}

.bg-info{
  
      background-color: #ffffff !important;
    border-bottom: 1px solid #eaeaea;
}
.nav-wrapper {

  .brand-logo {
    img {
      display: block;
      float: left;
      margin: 10px 12px;
    }
    span {
      font-size: 18px;
      display: block;
      float: left;
      
    font-weight: 500;
    color: #6e6e6e ;
    }
  }

  
}
.sub-nav{
    li{
     a{
       span{
         display: inline-block;
      color: #6e6e6e  !important;    
    vertical-align: middle;     
       }

      .icon{
        margin-right:10px;
        width:30px;
        height:30px;

        &.user{
          background-image: url("../assets/icon-user.svg");
          background-repeat: no-repeat;
        }
      }
     } 
    }
  }
</style>