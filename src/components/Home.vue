<template>
  <div class="dashboard">
    <div class="container-fluid">
      <div class="row">
        <side-nav></side-nav>
        <div class=" dash-container">
          
          <div class="row">
            <div class="col-md-4">
              <div class="number-label">Goal</div>
              <div class="number">1,000,000</div>
            </div>
            <div class="col-md-4">
              <div class="pie-chart"><apexchart type=pie width=380 :options="chartOptions" :series="series" /></div>
            </div>
            <div class="col-md-4">
              
              <div class="number-label">Raised</div>
              <div class="number">500,000</div>
            </div>
          </div>
          <div class="row-3">
  <div class="section-title">Follow Up Needed</div>
  <div class="section-content">
     <div class="row">
            <div class="col-md-6">
              <div class="box graph-box pull-left">
                <apexchart type=bar width=380 :options="chartOptions" :series="seriesBar" /></div>
                <div class="box desc-box pull-left">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
              </div>
              </div>
             <div class="col-md-6">
              <div class="box graph-box pull-left">
                <div class="img">
                  <img src="../assets/globe.png" alt="">
                </div>
                </div>
                <div class="box desc-box pull-left">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
              </div>
              </div>
          </div>
  </div>
</div>

<div class="row-3">
  <div class="section-title">Statistics</div>
  <div class="section-content">
     <div class="row">
            <div class="col-md-6">
              <div class="box graph-box pull-left">
                <apexchart type=bar width=380 :options="chartOptions" :series="seriesBar" /></div>
                <div class="box desc-box pull-left">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
              </div>
              </div>
             <div class="col-md-6">
              <div class="box graph-box pull-left">
                <div class="img">
                  <img src="../assets/globe.png" alt="">
                </div>
                </div>
                <div class="box desc-box pull-left">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
              </div>
              </div>
          </div>
  </div>
</div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Sidenav from './Sidenav.vue'
import { db } from "@/firebaseconf.js";
export default {
  name: "home",
  data() {
    return {
      series: [40, 60],
        chartOptions: {
          labels: ['Raised', 'Goal'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },seriesBar: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],optionsBar: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      
    };
  },
        components:{
          sideNav:Sidenav
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
       display: -webkit-box;
       width: 100%;;
    padding: 0px;
    margin: 0px;
     }
   }
  
  .dash-container{
    flex: 1;

    .number-label{
      text-align: center;
          font-size: 42px;
    font-weight: 600;
    line-height: 54px;
    color: #5a5a5a;
    margin-top:60px;
    }

    .number{
      text-align: center;
          font-size: 42px;
    font-weight: 600;
    line-height: 48px;
    color: #808080;
    }

    .pie-chart{
          width: fit-content;
    margin: 0 auto;
    height: 260px;
    }
  }


  .follow-up-needs{
      .title{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .contents{
             .slide-container{
                 .scroll-container{
                     .slide-set{
                       width:100%;
                        .venture-item{
                          width: 33.33%;
                          float: left;
                         .item-container{
                           padding: 10px;
                            .title{
                              font-size: 14px;
                            }
                            .description{}
                            }
  }
                     }
                 }
}
}
  }

  .row-3{
    .section-title{
      font-size: 20px;
      font-weight: 600;
      padding-left: 15px;
    }

    .section-content{
      .row{
        .col-md-6{
          padding:0px;

          .box{
            width: 50%;
            float: left;

            .img{
              text-align: center;
              img{
                width: 100%;
                max-width: 200px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

