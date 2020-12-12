<template>
    <div id="signIn">
        <h2> {{ greeting1 }} </h2>
        <h3> {{ greeting2 }} </h3>
        <form class="log-in-form mt-2">
            <label for="username">Username: </label>
            <input type="text" name="username" max="8" v-model="username" required>
            
            <label for="email">Email: </label>
            <input type="text" name="email" min="5" v-model="email" required>
            
            <label for="password">Password: </label>
            <input type="password" name="password" min="6" max="12" v-model="password" required>
            
            <router-link to="/profile"><button class="btn" type="button">Sign Up</button></router-link>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return{
            greeting1: 'Welcome to Groupmania!',
            greeting2: 'Please sign up below',
            username: '',
            email: '',
            password: ''
        }
    }
}
</script>

<style lang="scss">
    .log-in-form {
        display: flex;
        flex-flow: column;
        margin-bottom: 5px;
    }
    .log-in-form input {
        margin-bottom: 10px;
        border: outset 2px rgb(30, 200, 212);
        background-color: lightgray;
    }
    button {
        margin-top: 20px;
        padding: 10px;
        background-color: rgb(30, 200, 212);
        font-weight: bold;
    }
</style>

