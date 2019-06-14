<template>
  <div class="dashboard">
    <div class="container-fluid">
      <div class="row">
        <side-nav></side-nav>
        <div class="dash-container">
              <div class="view-container">
              <div class="view-container-outer">
              <div class="view-container-inner">
                <div class="list-header clearfix">
<div class="header-col-6">
  <div class="header-title">Investors</div>
</div>
<div class="header-col-6">
  <div class="header-search">
    <div class="search-box-container">
      <div class="search-icon"></div>
     <input  class="search-box" type="text" name="" id="" placeholder="Search">
    </div>
    <div class="filter-container">
      <input type="button" class="btn-filter" value="">
    </div>
  </div>
</div>

                </div>
                <div class="list-container">
                  <div class="list-container-inner">
                    <div class="list-set">
                      <ul class="list-items">
                        <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                        <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                         <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                         <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                         <li class="list-item">
                          <div class="item-container">
                            <div class="item-details">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
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
  name: "investors",
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
        margin-left: 237px;
    height: 100%;
    position: absolute;
    overflow: auto;

.view-container{}
    .list-container{
      .list-container-inner{
        border: 1px solid #d4d4d4;
        border-radius: 3px;
        .list-set{
          .list-items{
            padding-left: 0px;
            >.list-item{
              list-style-type: none;
              .item-container{
                padding:10px;
    border-bottom: 1px solid #dedede;
              }
            }
          }
        }
      }
    }
    .list-header{
      .header-col-6{
        width: 50%;
        float: left;

        .header-title{
          padding: 10px;
          font-size: 40px;
          color: #f88744;
          font-weight: 600;
        }
        .header-search{
          .search-box-container{
                padding: 10px;
              width: 90%;
                float: left;
            position: relative;
            .search-icon{
              width: 30px;
              height: 30px;
              background-image: url('../assets/icon-search.png');
              background-repeat: no-repeat;
              position: absolute;
              top:20px;
              left:20px;
              z-index: 1;
            }
            .search-box{
              position: relative;
              width: 100%;
              padding:10px;
              border:none;
              border:1px solid #cccccc;
              border-radius: 3px;
              padding-left: 40px;
            }
          }
          .filter-container{
float: left;
    padding: 10px 0;
    width: 10%;
.btn-filter{
  width: 30px;
  height: 30px;
  background-color: transparent;
  border:none;
  margin-top:4px;
  margin-left: 4px;
  background-image:url('../assets/icon-filter.png');
  background-repeat: no-repeat;
  cursor: pointer;
}
          }
        }


        
      }
    }


  }


}
</style>

