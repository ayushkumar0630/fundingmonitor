<template>
    <div class=" left-menu-wrapper">
          <div class="account-nav clearfix">
            <div class="profile">
              <div class="image-container">
              <div class="img" style="background-image:url('/static/img/Ayush.206ac7e.jpg')">
              </div>
              </div>
              <div class="name">
                Ayush Kumar
              </div>
            </div>
          </div>

          <div class="dashboard-nav">
            <div class="navigation-set">
              <ul class="navs">
                <li v-bind:class="{'active':currentPage=='investors'}" ><router-link to="/investors"><span>Investers</span><span class="arrow"></span></router-link></li>
                <li v-bind:class="{'active':currentPage=='employees'}"><router-link to="/employees"><span>Employees</span><span class="arrow"></span></router-link></li>
                <li v-bind:class="{'active':currentPage=='statistics'}"><router-link to="/statistics"><span>Statistics</span><span class="arrow"></span></router-link></li>
              </ul>
            </div>

            <div class="footer-nav">
              <div class="footer-nav-list">
                <ul class="navs">
                  <li class="clearfix"><router-link to="/home"><span class="icon"><img src="../assets/home-icon.png" alt=""></span><span class="nav-label">Home</span></router-link></li>
                  <li class="clearfix"><span class="icon"><img src="../assets/settings-icon.png" alt=""></span><span class="nav-label">Settings</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
props:{
  currentPage:{
    default:"investors",
    type:String
  }
}
}
</script>

<style lang="scss">
.left-menu-wrapper{
  background-image: linear-gradient(to right top, #fe6d56, #fe7a4c, #fc8742, #f89539, #f2a233);
    background-color:#f88744;    
    color: #FFFFFF;    
    width: 236px;
        position: absolute;
    height: 100%;
    .account-nav{
      .profile{
        .image-container{
          display: block;
          float: left;

          .img{            
            width: 50px;
            height: 50px;
            border: 2px solid #fff;
            border-radius: 100px;
            background-size: cover;
            margin-left: 10px;
            margin-top: 10px;
          }
        }
        .name{
          display:block;
          float: left;
          padding-top: 20px;
          padding-left: 10px;
          font-weight: 500; 
        }
      }
    }


    .dashboard-nav{
      .navigation-set{
            padding: 0 10px;
    margin-top: 50%;
      .navs{
        display:block;
        padding-left:0px;
        li{
          list-style-type: none;
          position: relative;
          font-size: 16px;    
          margin: 8px 0;
          padding: 2px 10px;
          cursor: pointer;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;

          &.active{
            -webkit-transition: all 0.3s;
          transition: all 0.3s;
          padding: 2px 14px;
          background-color: rgba(255, 255, 255, 0.2);
          /* padding: 2px 14px; */
          border-radius: 20px;
          }
          &:hover{            
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
          padding: 2px 14px;
          background-color: rgba(255, 255, 255, 0.2);
          /* padding: 2px 14px; */
          border-radius: 20px;
          span.arrow {       
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
	        // right: 18px;
            }
          }
          a{
            color: #ffffff;
            text-decoration: none;
          display: block;
            &:hover{
              text-decoration: none;
            }
          }
          span.arrow {
            width: 10px;
            height: 10px;
            box-sizing: border-box;
            position: absolute;
            right: 14px;
            top: 10px;
            transform: rotate(45deg);
            
            &::before {
              content: '';
              width: 100%;
              height: 100%;
              border-width: 2px 2px 0 0;
              border-style: solid;
              border-color: #fafafa;
              transition: .2s ease;
              display: block;
              transform-origin: 100% 0;
            }

	
	&:after {
		content: '';
		float: left;
		position: relative;
		top: -100%;
		width: 100%;
		height: 100%;
		border-width: 0 2px 0 0;
		border-style: solid;
		border-color: #fafafa;
		transform-origin: 100% 0;
		transition:.2s ease;
	}

	
}
        }
      }}}

     .footer-nav{
       position: absolute;
       bottom: 0;
     .footer-nav-list{
       padding: 10px;
     .navs{
       padding-left: 0px;
       margin-bottom: 0px;
       li{ 
         list-style-type:none;
         padding:6px 0;
         cursor: pointer;

     .icon{ 
       img{
         width: 26px; 
         } 
       display: block;
       float: left;}
     .nav-label{
       margin-left: 10px;
       display: block;
       float: left;
       line-height: 30px;
       color: #ffffff !important;
       text-decoration: none;
     }
     }}}}

  }
</style>
