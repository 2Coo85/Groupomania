<template>
    <div id="signUp">
        <header>
            <img src="icon-left-font.png">
            <router-link to="/signUp">Sign Up</router-link>
            <router-link to="/logIn" class="active">Log In</router-link>
        </header>
        <form>
            <label for="username">Username</label>
            <input type="text" name="username" max="8" v-model="username" required>
            <label for="password">Password: </label>
            <input type="password" name="password" min="6" max="12" v-model="password" required>
            <router-link to="/"><button class="btn" type="button">Log In</button></router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Welcome Back! Please Log In',
    data() {
        return{
            username: '',
            password: ''
        }
    }
}
</script>