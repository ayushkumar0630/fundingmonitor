<template>
  <div class="dashboard">
    <div class="side-nav-container">
        <side-nav :currentPage="curentPageName"></side-nav>
       </div> <div class=" dash-container">

<div class="s-row section-100 no-header">
  <div class="col-100">
    <div class="col-container">
      <div class="pie-graph-box">
        <div class="box clearfix">
          <div class="col-detail">
            <div class="detail">
               <div class="number-label">Goal</div>
              <div class="number">1,000,000</div>
            </div>
          </div>
          <div class="col-graph">
            <div class="graph"><apexchart type=pie width=360px height=100% :options="chartOptions" :series="series" /></div>
          </div>
          <div class="col-detail">
            <div class="detail">
               <div class="number-label">Goal</div>
              <div class="number">1,000,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="s-row section-100">
  <div class="section-header">   
    <div class="section-title">Follow up needed</div>
  </div>
  <div class="col-100">
    <div class="col-container">
      <div class="slider-box">
        <div class="slider-window">
           <vue-custom-scrollbar class="scroll-area" :settings="settings">
          <ul class="slider">
            <li>
              <div class="slide">
                <div class="slide-item">
                  <div class="item-title">Title</div>
                  <div class="item-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="slide">
                <div class="slide-item">
                  <div class="item-title">Title</div>
                  <div class="item-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="slide">
                <div class="slide-item">
                  <div class="item-title">Title</div>
                  <div class="item-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="slide">
                <div class="slide-item">
                  <div class="item-title">Title</div>
                  <div class="item-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="slide">
                <div class="slide-item">
                  <div class="item-title">Title</div>
                  <div class="item-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="slide">
                <div class="slide-item">
                  <div class="item-title">Title</div>
                  <div class="item-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
           </vue-custom-scrollbar>
        </div>
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
      
      <div class="bar-chart-col">
        <div class="bar-chart">
           <apexchart type=bar width=100% height=100% :options="chartOptions" :series="seriesBar" />
        </div>
      </div>
      <div class="bar-desc-col">
        <div class="bar-desc">
          <div class="bar-title">Title Here</div>
          <div class="bar-p">
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
             </div>
        </div>
      </div>
      </div>
      </div>
  </div>
  <div class="col-50">
    
    <div class="col-50-container">
    <div class="col-container clearfix">
      <div class="image-col">
        <div class="image">
          
                  <img src="../assets/globe.png" alt="">
        </div>
      </div>
      <div class="img-desc-col">
        <div class="img-desc">
          <div class="img-title">Title Here</div>
          <div class="img-p">
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  name: "home",
  data() {
    return {
      curentPageName:"home",
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
          sideNav:Sidenav,
          vueCustomScrollbar
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

        .pie-graph-box{
        .box{
          width: 80%;
          height: 100%;
          margin:0 auto;
        .col-detail{ width: 30%; height: 100%; float: left;
        .detail{
          
          width: 100%;
          height: 100%;
          padding: 10px;

          .number-label{
      text-align: center;
          font-size: 36px;
    font-weight: 600;
    line-height: 54px;
    color: #5a5a5a;
    margin-top:24px;
    }

    .number{
      text-align: center;
          font-size: 36px;
    font-weight: 600;
    line-height: 34px;
    color: #808080;
    }
        }}
        .col-graph{width: 40%; height: 100%; float: left;
        .graph{
          width: 100%;
          height: 100%;
          padding: 10px;
          *{
            height: 100%;
            margin:0 auto !important;
          }
        }
        }
        }}
    }
    }

    &.no-header{
      .col-100{
    height: 100%;
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
  overflow: hidden;
  .bar-title{
    font-weight: 600;
  }
  .bar-p{
  p{
    font-size: 14px;
  }
  }
}

}

.image-col{
  width: 30%;
    height: 100%;
  float: left;
  .image{
    width:100%;
    height: 100%;
    padding: 10px;    
    position: relative;
    img{
          width: 100%;
    max-width: 148px;
    /* height: auto; */
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    }
  }
}
.img-desc-col{
  width: 70%;
    height: 100%;
  float: left;
  .img-desc{
    width:100%;
    height: 100%;
    padding: 10px;
    overflow: hidden;

    .img-title{
      font-weight: 600;
    }

  }
}


  }


.slider-box{
  width: 100%;
  height: 100%;
.slider-window{
  
  width: 100%;
  height: 100%;
      .scroll-area {
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
}
.slider{
  width: max-content;
  height: 100%;
  padding-left: 0;
  li{
    list-style-type:none;
    display: inline-block;

     &:first-child{
    .slide-item{
    margin-left: 6px;
  }
  }
  &:last-child{
    .slide-item{
    margin-right: 6px;
  }
  }

  }
.slide{
  width: 300px;
  height: 100%;
  padding: 6px 6px 6px 0;

  
.slide-item{
      border: 1px solid #c5c5c5;
    padding: 6px 10px;
  .item-title{ font-size: 16px; font-weight: 600;}
  .item-description{ color: #5c5c5c;}

  }

  

 

  }
  }
  }
  }

}
</style>

