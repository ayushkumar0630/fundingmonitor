<template>
  <div id="app">
   
<div class="header-container" v-bind:class="{'on-pop':this.isModalOpen}">
   <navbar :isDashboard="isDashboardView" /></div>
<div class="body-container">
   <router-view  @isBlur="setBlur" @setDashStyle="isDashboard"/>
</div>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  name: 'App',
  data(){
    return{
isModalOpen:false,
isDashboardView:false
    }
  },
  components: {
    navbar
  },
  methods:{
    setBlur:function(modalOpen){
      if(modalOpen){
      this.isModalOpen=true;
      }else{
      this.isModalOpen=false;  
      }
    },
    isDashboard:function(value){
      this.isDashboardView=value;
    }
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
#app{
    position: absolute;
    height: 100%;    
    width: 100%;

    .header-container{
width: 100%;
height: 65px;
    }
    .body-container{
      position: absolute;
      width:100%;
      height: calc(100% - 66px);
    }
    .on-pop{
      -webkit-filter: blur(5px);
    filter: blur(5px);
}

}


</style>
