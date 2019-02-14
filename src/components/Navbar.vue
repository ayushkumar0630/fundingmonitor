<template>
    <div class="navbar">
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
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

<style>
</style>
