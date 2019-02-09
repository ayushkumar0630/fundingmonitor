<template>
    <div id="Navbar">
        <nav class="site-header sticky-top py-1" id="globalnav">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <a class="py-2" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                </a>
                <a class="py-2 d-none d-md-inline-block" href="/blog" id="navlinks">Blog</a>
                <a class="py-2 d-none d-md-inline-block" href="/pricing" id="navlinks">Pricing</a>
                <a class="py-2 d-none d-md-inline-block" href="/features" id="navlinks">Features</a>
                <a class="py-2 d-none d-md-inline-block" href="/faq" id="navlinks">FAQ</a>
                <a class="py-2 d-none d-md-inline-block" href="/contact" id="navlinks">Contact</a>
                <a class="py-2 d-none d-md-inline-block" href="/signin" id="navlinkssign">Sign In</a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#globalnav{
  background-color: #665c84;
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
  color: white;
}
#signin{
  text-emphasis: bold;
  color: red;
}
#navlinks{
  color: #fbeed7;
}
#navlinkssign{
  color: #fbeed7;
  font-weight: bold;
}
</style>
