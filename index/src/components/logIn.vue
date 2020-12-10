<template>
    <div id="logIn" class="container-fluid">
        <form>
            <label for="username">Username</label>
            <input type="text" name="username" max="8" v-model="username" required>
            <label for="password">Password: </label>
            <input type="password" name="password" min="6" max="12" v-model="password" required>
            <router-link to="/"><button class="btn" type="button">Log In</button></router-link>
        </form>
    </div>
</template>