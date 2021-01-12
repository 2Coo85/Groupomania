<template>
<div>
    <nav class="menuBar navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="/">Groupomania</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <b-nav-item-dropdown id="dropdown-dropright" dropright text="Department" toggle-class="nav-link-custom" right>
                    <b-link :to="'/departments/departments[1]'">{{ departments[1] }}</b-link>
                    <b-link :to="'/departments/departments[0]'">{{ departments[0] }}</b-link>
                    <b-link :to="'/departments/departments[2]'">{{ departments[2] }}</b-link>
                    <b-link :to="'/departments/departments[3]'">{{ departments[3] }}</b-link>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="My Account" dropright right>          
                    <b-dropdown-item href="/account">User Profile</b-dropdown-item>
                    <b-dropdown-item href="/readPosts">Posts Read</b-dropdown-item>
                </b-nav-item-dropdown>
                
                <CreatePost/>
                <li class="nav-item">
                    <a class="nav-link" href="/logIn">Log Out</a>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
import CreatePost from './createPost';
import {mapState, mapGetters} from 'vuex';

export default {
    components: {
        CreatePost
    },
    computed: {
      ...mapState([
        'departments'
    ]),
    ...mapGetters([
        'getDepartments'
    ])  
    }
    
}
</script>

<style lang="scss">
     .menuBar {
        background-color: rgb(189, 241, 243);
        color: black;
        border-bottom: solid 3px #c2565d;
        margin-bottom: 1%;
        display: flex;
        flex-flow: row;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.1em;
        padding: 5px;
     }
     
</style>