<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="signin-wrapper">
          <div class="signin clearfix">
            <div class="about">
               <vue-particles 
               color="#ff9400"
              :particleOpacity="1"
              :particlesNumber="250"
              shapeType="circle"
              :particleSize="4"
              linesColor="#ff9400"
              :linesWidth="1"
              :lineLinked="true"
              :lineOpacity="1"
              :linesDistance="100"
              :moveSpeed="1"
              :hoverEffect="false"
              hoverMode="grab"
              :clickEffect="false"
              clickMode="push"
               ></vue-particles>
            </div>
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
                  <div class="input-label">First Name</div>
                  <div class="input-text">
                    <input type="text" name id class="text" v-model="first_name">
                  </div>
                </div>
                <div class="input-container">
                  <div class="input-label">Last Name</div>
                  <div class="input-text">
                    <input type="text" name id class="text" v-model="last_name">
                  </div>
                </div>
                <div class="input-container">
                  <div class="input-label">Email</div>
                  <div class="input-text">
                    <input type="text" name id class="text" v-model="email">
                  </div>
                </div>
                <div class="input-container">
                  <div class="input-label">Password</div>
                  <div class="input-text">
                    <input type="password" name id class="text" v-model="password">
                  </div>
                </div>
                <div class="input-container">
                  <div class="input-label">Confirm Password</div>
                  <div class="input-text">
                    <input type="password" name id class="text" v-model="password_confirm">
                  </div>
                </div>
                <div class="input-container">
                  <div class="input-label">Company Name</div>
                  <div class="input-text">
                    <input type="text" name id class="text" v-model="company">
                  </div>
                </div>
                <div class="input-container">
                  <p id="feedback" v-if="feedback"> {{ feedback }} </p>
                </div>
                <div class="input-container">
                  <input type="button" value="Sign Up" class="btn-signin" @click="signup">
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
import Vue from 'vue'
import VueParticles from 'vue-particles'
import firebase from 'firebase'

Vue.use(VueParticles)

export default {
  name: "signup",
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirm: null,
      company: null,
      feedback: null
    };
  },
  methods:{
    signup: function(){
      if (this.password != this.password_confirm){
        console.log(this.feedback)
        this.feedback = "Oops Passwords Aren't The Same"
        console.log(this.feedback)
      }
      else if (!this.email | !this.password | !this.company | !this.first_name | !this.last_name) {
        this.feedback = "Looks Like You Forgot A Field"
      }
      else{
        this.feedback = null
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
          alert("Account Created!")
          this.$router.push('signin')
        }).catch(err => {
          this.feedback = err.message
        })

      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.signin-wrapper {
  .signin {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    // border: 1px solid #ffffff;
    border-radius: 6px;
    margin: 3% auto;
    margin-bottom: 60px;
    @media only screen and (min-width: $break-x-large) {
   
    width: 60%;
  }
    .about {
      position: relative;
      width: 40%;
      height: 780px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      background-color: #ffba5a;
      background-position: -306px center;
      background-size: cover;
      float: left;


  @media only screen and (max-width: $break-x-large) {
   display:none;
  }
      .particles-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

#particles-js {
  width: 100%;
  height: 100%;
}
    }

    .signin-container {
      width: 60%;
      float: left;
      padding: 40px 80px;
      @media only screen and (max-width: $break-x-large) {
padding: 40px;
    width: 100%;
      }
       @media only screen and (max-width: $break-xx-large) {         
padding: 40px;
       }

.login-title{
     width: fit-content;
    margin: 0 auto;
    margin-top: 0px;
    margin-bottom: 26px;
  .logo-container{
    width: 100%;
    .logo{    
      display: inline-block;
    vertical-align: middle;
    margin-top: 6px;
    margin-right: 8px;

    }
    .name{
         display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    font-weight: 600;
    color: #6e6e6e;
    }
  }
}
    }

    .btn-signin{
      border: none;
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
      padding: 12px 38px;
    margin-top: 20px;
    margin-bottom: 10px;
        background: #ff9400  !important;
        cursor: pointer;

        &:hover{
          box-shadow: 0px 0px 8px #f0751f;
        }
    }

    .link-forgot{
      color: #8b8b8b;
    font-size: 14px;
    margin-top: 10px;
    float: right;

      &:hover{
        color:#333;
      }
    }


  }
}

.form-group {
  display: block;
  .input-container {
    margin-bottom: 10px;
    .input-label{
          margin-bottom: 10px;
    color: #607080;
    }
    .input-text {
      .text {
        border: 1px solid #a6b4c2;
        border-radius: 4px;
        padding: 8px;
        width: 100%;
        line-height: 24px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        padding: 10px;    height: 42px;
    box-sizing: border-box;

    &:focus{
          outline: none;
    border-color: #ffa87a;
    box-shadow: 0px 0px 6px rgba(242, 108, 22, 0.39);
    }
      }
    }
  }
}
#feedback{
  color: red;
  text-align: center;
}
</style>

