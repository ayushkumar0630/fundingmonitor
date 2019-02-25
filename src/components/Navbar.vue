<template>
  <div class="navbar">
    <nav>
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
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
nav{
  box-shadow: none;
}
.nav-wrapper {
  // background-color: #fce4c4;
      background-color: #ffffff;
    border-bottom: 1px solid #eaeaea;

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
    color: #c98122 ;
    }
  }

  
}
.sub-nav{
    li{
     a{
       span{
         display: inline-block;
      color: #c98122  !important;    
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