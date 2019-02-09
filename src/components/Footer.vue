<template>
    <div id="Footer">
        <footer class="py-5" id="globalfooter">
            <div class="row">
                <div class="col-sm">
                    <router-link class="text-muted" to="/contact">Contact</router-link>
                </div>
                <div class="col-sm">
                    <router-link class="text-muted" to="/team">Team</router-link>
                </div>
                <div class="col-sm">
                    <router-link class="text-muted" to="/"><img src="@/assets/fundingmonitor.png" class="img-responsive-footer" alt=""/></router-link>
                </div>
                <div class="col-sm">
                    <router-link class="text-muted" to="/privacy">Privacy</router-link>
                </div>
                <div class="col-sm">
                    <router-link class="text-muted" to="/signin">Sign In</router-link>
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
#globalfooter{
  background-color: white;
  width: 100%;
  margin-right: 0px;
  margin-left: 0px;
  height: 25px;
}
.img-responsive-footer{
    height: auto;
    width: auto;
    max-height: 50px;
    max-width: 50px;
}
</style>
