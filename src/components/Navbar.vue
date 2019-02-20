<template>
  <div class="navbar">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          <img src="../assets/fundingmonitor.svg" alt width="40px">
          <span>Funding Monitor</span>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link :to="{ name: 'signin'}">Sign In</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
nav{
  box-shadow: none;
}
.nav-wrapper {
  background-color: #ffba5a;

  .brand-logo {
    img {
      display: block;
      float: left;
      margin: 10px 12px;
    }
    span {
      font-size: 18px;
      display: block;
      float: left;
      color: #ffffff;
    }
  }
}
</style>