<template>
  <div id="app">
    <navbar />
    <router-view/>
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

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
#app{
   display: flex;
  flex-flow: column;
  height: 100%;
}

</style>
