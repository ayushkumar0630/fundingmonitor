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

</style>
