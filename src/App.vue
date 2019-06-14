<template>
  <div id="app">
    <!-- <navbar />
    <router-view/> -->

     <div class="table dashboard">
    <div class="table-row navigation">
<navbar />
    </div>
    <div class="table-row  content">
      <div class="content-wrapper">
      <div class="content-wrapper-inner">
  
  <router-view/>
      </div>
      </div>
    </div>
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
    display: table;
    position: absolute;
    height: 100%;    
    width: 100%;
}


.table {
    display: table;
    position:absolute;
    height:100%;
    margin: 0px;

}
.table-row {
    display: table-row;
}

.content{
  height:100%;

  .content-wrapper{
        width: 100%;
    height: 100%;
    position: relative;

    .content-wrapper-inner{
          position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    }
  }
}

</style>
