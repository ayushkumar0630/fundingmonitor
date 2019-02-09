<template>
    <div id="Footer">
        <footer class="container py-5">
            <div class="row">
                <div class="col-md">
                <h4>FundingMonitor</h4>
                <small class="d-block mb-3 text-muted">©2019</small>
                </div>
                <div>
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                    <li><router-link class="text-muted" to="/contact">Contact</router-link></li>
                    <li><router-link class="text-muted" to="/team">Team</router-link></li>
                    <li><router-link class="text-muted" to="/privacy">Privacy</router-link></li>
                </ul>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
