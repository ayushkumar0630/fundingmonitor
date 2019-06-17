<template>
 <div class="dashboard">
    <div class="side-nav-container" v-bind:class="{'on-pop':this.isModalOpen}">
        <side-nav></side-nav>
       </div> <div class=" dash-container"  v-bind:class="{'on-pop':this.isModalOpen}">
         

                <div class="list-header clearfix">
<div class="header-col-6">
  <div class="header-title">Investors</div>
</div>
<div class="header-col-6">
  <div class="header-search clearfix">
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
                    <div class="gird-button-container">
                      <input type="button" value="" class="add-item"  v-on:click="openModal">
                    </div>
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

 <transition name="fade">
                    <div class="popup-modal"  v-if="isModalOpen">
                     
                      <div class="modal-overlay">
                      <div class="modal-overlay-fixed"  v-on:click="this.closeModal">

                      </div>
                      </div>
                       <transition name="slide-fade">
                      <div class="modal-container" v-if="isPopUpOpen">
                        <div class="modal-box">
                          <div class="modal-header">
                            <div class="modal-title">Add Investor</div>
                            <div class="modal-close">
                              <div class="modal-close-btn" v-on:click="closeModal"></div>
                            </div>
                          </div>
                          <div class="modal-body">
<div class="modal-body-container">
  <div class="input-container">
    <input type="text" name="" id="" class="input-box" placeholder="Investor Name">
  </div>
    <div class="input-container">
    <input type="text" name="" id="" class="input-box" placeholder="Contact Name">
  </div>
    <div class="input-container">
    <input type="text" name="" id="" class="input-box" placeholder="Contact Email">
  </div>
    <div class="input-container">
    <input type="text" name="" id="" class="input-box" placeholder="Address">
  </div>
    <div class="input-container clearfix">
      <div class="input-col-6">
      <div class="col-container">
    <input type="text" name="" id="" class="input-box" placeholder="State">
      </div>
      </div>
       <div class="input-col-6">
       <div class="col-container">
    <input type="text" name="" id="" class="input-box" placeholder="City">
      </div>
      </div>
  </div>
     <div class="input-container">
    <input type="text" name="" id="" class="input-box" placeholder="Money Pledge">
  </div>
     <div class="input-container">
    <input type="text" name="" id="" class="input-box" placeholder="Money Expected">
  </div>
  <div class="button-container">
    <input type="button" value="Save" class="btn-save">
  </div>
</div>
                          </div>
                        </div>
                      </div>
                       </transition>
                    </div>
                  </transition>
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
      isModalOpen:false,
      isPopUpOpen:false
    };
  },
        components:{
          sideNav:Sidenav
        },
  created: function() { 
  
      this.$emit("setDashStyle",true);
  },
  methods:{
    openModal:function(){
      this.isModalOpen=true;
      this.$emit("isBlur",this.isModalOpen);
      let self=this;
      setTimeout(function(){
      self.isPopUpOpen=true;
      },50);
      
    },
    closeModal:function(){          
      this.isPopUpOpen=false;
      let self=this;
      setTimeout(function(){
        self.isModalOpen=false;        
        self.$emit("isBlur",self.isModalOpen); 
      },100);
    }
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
.list-header{
  width: 100%;
  height: 66px;
}
    .list-container{
      position:absolute;
      width:100%;
      height: calc(100% - 66px);
      padding: 10px;

      .list-container-inner{
        border: 1px solid #d4d4d4;
        border-radius: 3px;
            overflow: auto;
    position: relative;
    height: 100%;

    .gird-button-container{
    position: fixed;
    bottom: 24px;
    right: 44px;
    width: 54px;
  height:54px;
  border-radius: 100%;
  background-image: linear-gradient(to right top, #fe6d56, #fe7a4c, #fc8742, #f89539, #f2a233);
  box-shadow: 0px 0px 8px #ffc1a9;
input[type='button']{
  border:none;
  width: 54px;
  height:54px;
  cursor: pointer;
  background-image: url('../assets/icon-add-user.png');   
   background-color: transparent;
    background-repeat: no-repeat;
    background-size: 42%;
    background-position: center;
  border-radius: 100%;
  outline:none;

}
    }
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
              padding: 18px 10px 10px 10px;
          font-size: 26px;
          color: #fe6d56;
          font-weight: 600;
        }
        .header-search{
           padding-top: 9px;
           width: 360px;
           float: right;
          .search-box-container{
                padding: 10px;
                  width: 300px;
                float: left;
            position: relative;
            .search-icon{
              width: 24px;
              height: 24px;
              background-image: url('../assets/icon-search.png');
              background-repeat: no-repeat;
background-size: 80%;
    background-repeat: no-repeat;
    position: absolute;
    top: 19px;
    left: 22px;
    z-index: 1;
            }
            .search-box{
                  position: relative;
    width: 100%;
    padding: 6px;
    border: none;
    border: 1px solid #cccccc;
    border-radius: 3px;
    padding-left: 40px;
    border-radius: 4px;
              &:focus{
                box-shadow: 0px 0px 3px #f88744;
    border-color: #f88744;
    outline: none;
              }
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
  background-image:url('../assets/filter-search-filter.svg');
  background-repeat: no-repeat;
  cursor: pointer;
}
          }
        }


        
      }
    }


  }


.on-pop{
      -webkit-filter: blur(5px);
    filter: blur(5px);
}


        .popup-modal{
          position:absolute;
          width:100%;
          height: 100%;
          top:0;
        .modal-overlay{
        
          position: fixed;
          top:0;
          width:100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.05);
          z-index: 1;
          .modal-overlay-fixed{
            position:fixed;
            width:100%;
          height: 100%;
          z-index: 1;
          }
        }
        .modal-container{
          position: fixed;
          margin: auto;
      top: 0; left: 0; bottom: 0; right: 0;
          width: 34%;
              height: fit-content;
    border-radius: 6px;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.5);
    
          background-color: #ffffff;    z-index: 2;
        .modal-box{
.modal-header{
      padding: 10px 15px;
  .modal-title{
    font-size: 20px;
    color: #ff6b13;
    font-weight: 600;

  }
.modal-close{
 
.modal-close-btn{
      width: 24px;
    height: 24px;
    margin-top: 3px;
  border-radius: 100%;
  cursor: pointer;
  background-image: url('../assets/icon-close.png');
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fb6912;   
   background-size: 40%;
    float: right;
}
}
}
.modal-body{
    padding: 15px;
  .modal-body-container{
    .input-container{
        
        padding: 10px 0;
    width: 100%;
    
    input{
      border:none;
      border:1px solid #cecece;
      width: 100%;
      padding: 8px 10px; 
      border-radius: 3px;

      &:focus{
            box-shadow: 0px 0px 3px #f88744;
    border-color: #f88744;
    outline: none;
      }
    }

    .input-col-6{
      width: 50%;
      float: left;
       &:first-child{
      .col-container{
       
          padding-right: 5px;
        }
       }
        &:last-child{
          .col-container{
       
          padding-left: 5px;
        }
        }
      }
    }

    .button-container{
          padding-top: 10px;
    text-align: right;
      input[type='button']{
        background-color: #ff6b13;
    border: none;
    padding: 10px 28px;
    border-radius: 4px;
    color: #ffffff;
    outline: none;
    cursor: pointer;
      }
    }
    }
  }
}
        }}
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  // transition: all .2s ease;
  animation: bounce-in .1s;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  // transform: translateY(-20px);
  animation: bounce-out .1s;
  opacity: 0;
}


.bounce-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
.bounce-enter {
  animation: bounce-in .1s;
}
.bounce-leave {
  animation: bounce-out .1s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.98);
  }
}
</style>

