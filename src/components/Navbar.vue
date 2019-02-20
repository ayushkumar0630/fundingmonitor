<template>
    <div class="navbar">
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo <img src="../assets/fundingmonitor.png" alt=""></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link :to="{ name: 'signin'}">Sign In</router-link></li>
            </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-wrapper{
  background-color: #013e4e;
}
</style>