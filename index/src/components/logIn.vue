<template>
    <div id="logIn" class="container-fluid">
        <form class="log-in-form"> 
            <label for="username">Username</label>
            <input type="text" name="username" max="8" v-model="username" required>
            <label for="password">Password: </label>
            <input type="password" name="password" min="6" max="12" v-model="password" required>
            <router-link to="/"><button class="btn" type="button">Log In</button></router-link>
        </form>
    </div>
</template>

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