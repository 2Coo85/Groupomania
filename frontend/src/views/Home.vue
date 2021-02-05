<template>
  <div>
    <b-img :src="require('../assets/icon-left-font-monochrome-white.png')" alt="groupomania logo" width="500" height="100"></b-img>
    <form>
      <h3 class="mt-4 mb-2">New User? Click Here</h3>
      <b-button id="signUp" @click="$bvModal.show('signUp')" class="mb-4">Sign Up</b-button>
      <h3 class="mb-2">Already registered? Click to log in here</h3>
      <b-button id="logIn" @click="$bvModal.show('logIn')">Log In</b-button>
    </form>
    <Login/>
    <Signup/>
  </div>
</template>

<script>
import Login from '../components/LogIn'
import Signup from '../components/Register'

export default {
  components: {
    Login,
    Signup
  },
  data () {
    return {
      oneUser: [],
      email: '',
      department: [],
      password: ''
    }
  }
}
</script>
