<template>
  <div id="app">
   
<div class="header-container">
   <navbar /></div>
<div class="body-container">
   <router-view/>
</div>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    navbar
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
height: 66px;
    }
    .body-container{
      position: absolute;
      width:100%;
      height: calc(100% - 66px);
    }
}


</style>
