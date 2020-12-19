<template>
<div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="/"><img src="icon.png">Groupomania</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logIn">Log Out</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/account">My Account</a>
                </li>
                <b-nav-item-dropdown id="my-nav-dropdown" text="Department" toggle-class="nav-link-custom" right>
                    <b-dropdown-item>Accounting</b-dropdown-item>
                    <b-dropdown-item>Marketing</b-dropdown-item>
                    <b-dropdown-item>HR</b-dropdown-item>
                    <b-dropdown-item>Design</b-dropdown-item>
                    <b-dropdown-item>Development</b-dropdown-item>
                </b-nav-item-dropdown>
            </ul>
        </div>
    </nav>
</div>
</template>

<style lang="scss">
     .menuBar {
        background-color: rgb(189, 241, 243);
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