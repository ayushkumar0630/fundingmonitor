<template>
 <div class="signin">
  <form class="form-signin" id="signinform">
      <img class="mb-4" src="@/assets/fundingmonitor.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign in</button>
      <span>or <router-link to="/signin">Sign Up</router-link></span>
      </form>
 </div>
</template>
<script>
export default {
  name: 'signin',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
#signinform{
  box-sizing: border-box;
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 50px auto;
}
#inputPassword{
  margin-bottom: 16px;
}

</style>
