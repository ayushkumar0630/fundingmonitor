<template>
  <div class="dashboard">
    <div class="side-nav-container">
        <side-nav :currentPage="curentPageName"></side-nav>
       </div> <div class=" dash-container">

<div class="s-row section-100">
  <div class="section-header">   
    <div class="section-title">Statistics</div>
  </div>
  <div class="col-100">
    <div class="col-container"></div>
  </div>
</div>
<div class="s-row section-50 clearfix">
  <div class="section-header">    
    <div class="section-title">Statistics</div>
  </div>
  <div class="col-50">
    
    <div class="col-50-container">
    <div class="col-container clearfix">
      
      <div class="bar-chart-col">
        <div class="bar-chart">
           <apexchart type=bar width=100% height=100% :options="chartOptions" :series="seriesBar" />
        </div>
      </div>
      <div class="bar-desc-col">
        <div class="bar-desc">
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
             
        </div>
      </div>
      </div>
      </div>
  </div>
  <div class="col-50">
    
    <div class="col-50-container">
    <div class="col-container clearfix">
      </div>
      </div>
  </div>
</div>
<div class="s-row section-50 clearfix">
  <div class="section-header">
    <div class="section-title">Statistics</div>
  </div>
  <div class="col-50">
    
    <div class="col-50-container">
    <div class="col-container clearfix">
      </div>
      </div>
  </div>
  <div class="col-50">
    
    <div class="col-50-container">
    <div class="col-container clearfix">
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
  name: "statistics",
  data() {
    return {
      curentPageName:"statistics",
      series: [40, 60],
        chartOptions: {
          labels: ['Raised', 'Goal'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 100
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
      this.$emit("setDashStyle",true);
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.dashboard {
  position: relative;
  width: 100%;
  height: 100%;

.side-nav-container{
    position: absolute;
        left: 0;
        width:236px;
        height: 100%;
}
  
  .dash-container{  
        position: absolute;
        left: 236px;        
        width: calc(100% - 236px);
        height: 100%;


.section-100{
  width: 100%;
  height: 33.33%;
  .section-header{
    height: 30px;
    .section-title{
          padding-left: 7px;
    font-size: 17px;
    color: #fe6d56;
    font-weight: 500;
    line-height: 34px;
    }
  }
  .col-100{
    padding: 6px;
    padding-bottom: 0px;
    height: calc(100% - 30px);
    .col-container{
    height: 100%;
border:1px solid #dbdbdb;    
        border-radius: 4px;
    }
    }
}

.section-50{
  
  width: 100%;
  height: 33.33%;

  .section-header{
    height: 30px;
    .section-title{
          padding-left: 7px;
    font-size: 17px;
    color: #fe6d56;
    font-weight: 500;
    line-height: 34px;
    }
  }
  .col-50{
    width: 50%;
    height: calc(100% - 30px);
    float: left;
    .col-50-container{
      padding: 6px;
      padding-bottom: 0px;
    height: 100%; 
      .col-container{
        height: 100%;
        border:1px solid #dbdbdb;    
        border-radius: 4px;

    }
    }
    
  }

  .col-50:first-child{
    .col-50-container{
      padding-right: 3px;
    }
  }
   .col-50:last-child{
    .col-50-container{
      padding-left: 3px;
    }
  }
}

.s-row:last-child{
  
  &.section-50{

       .col-50-container{
         padding-bottom: 6px;
       }

    }
}


.bar-chart-col{ width: 50%;
    height: 100%; float: left;
    .bar-chart{
      padding:10px;
      height: 100%;
    }}
.bar-desc-col{ width: 50%;
    height: 100%; float: left;
.bar-desc{
  padding: 10px;
  padding-right: 20px;
  padding-left: 0px;
  height: 100%;
  p{
    font-size: 14px;
  }
}
}





















        .section-1,.section-2,.section-3{
          position:relative;height: 33.33%;
        }
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

.section-wrapper{
      height: 100%;
    padding: 10px 0;
}
  .container-fluid{
    height: 100%;
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

            &.desc-box{
              font-size: 14px;
            }

.box-container{ padding: 0 10px;}
            .img{
              text-align: center;
              img{
                width: 100%;
                max-width: 148px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

