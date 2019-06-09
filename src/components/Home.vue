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
        }
      
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
       display: flex;
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
    }
  }
}
</style>

