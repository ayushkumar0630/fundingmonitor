<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <footer class="container py-5">
      <div class="row">
        <div class="col-md">
          <h4>FundingMonitor</h4>
          <small class="d-block mb-3 text-muted">©2019</small>
        </div>
        <div>
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="/contact">Contact</a></li>
            <li><a class="text-muted" href="/team">Team</a></li>
            <li><a class="text-muted" href="/privacy">Privacy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
