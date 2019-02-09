<template>
  <div class="hello">
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Funding Monitor</h1>
        <p class="lead font-weight-normal">Say hello to the smarter way to track your company's funding.</p>
        <router-link class="btn btn-outline-secondary" to="/signin">Sign In</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'master',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
