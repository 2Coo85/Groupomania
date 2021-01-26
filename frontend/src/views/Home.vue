<template>
  <div class="home">
    <h1>Welcome to Groupomania</h1>
    <form>
      <b-button id="signUp" @click="$bvModal.show('signUp')">Sign Up</b-button>
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
  }
}
</script>
