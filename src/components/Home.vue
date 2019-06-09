<template>
  <div class="dashboard">
    <div class="container-fluid">
      <diw class="row">
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
                <li><span>Investers</span><span class="arrow"></span></li>
                <li><span>Employees</span><span class="arrow"></span></li>
                <li><span>Statistics</span><span class="arrow"></span></li>
              </ul>
            </div>

            <div class="footer-nav">
              <div class="footer-nav-list">
                <ul class="navs">
                  <li class="clearfix"><span class="icon"><img src="../assets/home-icon.png" alt=""></span><span class="nav-label">Home</span></li>
                  <li class="clearfix"><span class="icon"><img src="../assets/settings-icon.png" alt=""></span><span class="nav-label">Settings</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class=" dash-container">dashboard

         <apexchart type=line height=350 :options="chartOptions" :series="series" />
        </div>
      </diw>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { db } from "@/firebaseconf.js";
export default {
  name: "home",
  data() {
    return {
      series: [{
          name: 'Website Blog',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
          name: 'Social Media',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        chartOptions: {
          stroke: {
            width: [0, 4]
          },
          title: {
            text: 'Traffic Sources'
          },
          // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001',
            '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'
          ],
          xaxis: {
            type: 'datetime'
          },
          yaxis: [{
            title: {
              text: 'Website Blog',
            },

          }, {
            opposite: true,
            title: {
              text: 'Social Media'
            }
          }]
        }
      
    };
  },
  created: function() {
  
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.dashboard {
   flex-grow : 1;
   .container-fluid{
     height: 100%;
    padding: 0px;

     .row{
       height:100%; 
       display: flex;
       width: 100%;;
    padding: 0px;
    margin: 0px;
     }
   }
  .left-menu-wrapper{
    background-color:#f88744;    
    color: #FFFFFF;    
    width: 236px;
    position: relative;
    .account-nav{
      .profile{
        .image-container{
          display: block;
          float: left;

          .img{            
            width: 50px;
            height: 50px;
            border: 3px solid #fff;
            box-shadow: 0px 0px 10px #d65000;
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
          cursor: pointer;
span.arrow {
	width: 10px;
  height: 10px;
	box-sizing: border-box;
	position: absolute;
	right: 10px;
  top: 9px;
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
     }
     }}}}

  }
  .dash-container{
    flex: 1;
  }
}
</style>

