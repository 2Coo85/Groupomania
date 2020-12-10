<template>
    <nav class="navbar m-2 menuBar">
        <router-link to="/">Home </router-link>
        <router-link to="/account"> User Account</router-link>
    </nav>
</template>

<style lang="scss">
     .menuBar {
        background-color: rgb(30, 200, 212);
        color: black;
        border: solid 1px lightgray;
        margin-bottom: 1%;
        display: flex;
        flex-flow: row;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.1em;
        padding: 5px;
     }
     
</style>