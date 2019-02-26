<template>
  <div class="container">
    <div class="row">
      <div class="col-md-123">
        <div class="signin-wrapper">
          <div class="signin">
            <div class="about"></div>
            <div class="signin-container">
              <div class="login-title">
                <div class="logo-container clearfix">
                  <span class="logo">
                    <img src="../assets/fundingmonitor.svg" alt width="40px">
                  </span>
                  <span class="name">Funding Monitor</span>
                </div>
              </div>

              <div class="form-group">
                <div class="input-container">
                  <div class="input-label">Username</div>
                  <div class="input-text">
                    <input type="text" name id class="text">
                  </div>
                </div>
                <div class="input-container">
                  <div class="input-label">Password</div>
                  <div class="input-text">
                    <input type="password" name id class="text">
                  </div>
                </div>
                <div class="input-container">
                  <input type="button" value="Sign In" class="btn-signin">
                </div>
                <div class="input-container">
                  <a href="#" class="link-forgot">Forgot Password</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.signin-wrapper {
  .signin {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border: 1px solid #ffffff;
    border-radius: 6px;
    margin: 10% auto;
    width: 60%;
    height: 460px;
    height: 460px;
    .about {
      position: relative;
      width: 40%;
      height: 100%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      background-color: #ffba5a;
      background-position: -306px center;
      background-size: cover;
      float: left;
    }

    .signin-container {
      width: 60%;
      float: left;
      padding: 40px 60px;


.login-title{
  .logo-container{
    width: 100%;
    .logo{
      display: block;
      float: left;
    }
    .name{
      display:block;
      float: left;
    }
  }
}
    }

    .btn-signin{
      border: none;
    background: #ee7a23;
    background: -moz-linear-gradient(left, #ee7a23 0%, #f95300 100%);
    background: -webkit-linear-gradient(left, #ee7a23 0%, #f95300 100%);
    background: linear-gradient(to right, #ee7a23 0%, #f95300 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ee7a23', endColorstr='#f95300', GradientType=1);
    border-color: #ee7a23;
    color: #fff;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    padding: 12px;
    border-radius: 4px;
    outline: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
      padding: 10px 38px;
    margin-top: 10px;
    margin-bottom: 10px;
        background: #f5610c !important;

        &:hover{
          box-shadow: 0px 0px 8px #f0751f;
        }
    }

    .link-forgot{
      float:right;
      color:#333;
      font-size: 12px;

      &:hover{
        color:#333;
      }
    }


  }
}

.form-group {
  .input-container {
    .input-text {
      .text {
        border: 1px solid #a6b4c2;
        border-radius: 4px;
        padding: 8px;
        width: 100%;
        line-height: 24px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        padding: 4px;
    height: 32px;

    &:focus{
          outline: none;
    border-color: #ffa87a;
    box-shadow: 0px 0px 6px rgba(242, 108, 22, 0.39);
    }
      }
    }
  }
}
</style>

