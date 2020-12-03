<template>
    <div>
        <header>
            <img src="icon-left-font.png">
            <router-link to="/signUp"  class="active">Sign Up</router-link>
            <router-link to="/logIn">Log In</router-link>
        </header>
        <br>
        <form>
            <label for="username">Username</label>
            <input type="text" name="username" max="8" v-model="username" required>
            <label for="email">Email: </label>
            <input type="text" name="email" min="5" v-model="email" required>
            <label for="password">Password: </label>
            <input type="password" name="password" min="6" max="12" v-model="password" required>
            <button class="btn" type="button">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Welcome to Groupmania!',
    data() {
        return{
            username: '',
            email: '',
            password: ''
        }
    }
}
</script>