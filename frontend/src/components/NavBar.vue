<template>
    <div id="main-nav">
        <b-navbar>
            <b-navbar-brand href="/">
                <img src="">Groupomania
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-dropdown text="Dept" right>
                    <b-dropdown-item href="/salesMarketing">Sales and Marketing</b-dropdown-item>
                    <b-dropdown-item href="/retailops">Retail Operations</b-dropdown-item>
                    <b-dropdown-item href="/hr">HR</b-dropdown-item>
                    <b-dropdown-item href="/management">Management</b-dropdown-item>
                </b-dropdown>

                <b-dropdown text="User" right>
                    <b-dropdown-item href="/settings">Account</b-dropdown-item>
                    <b-dropdown-item href="/savedPosts">Saved Posts</b-dropdown-item>
                </b-dropdown>
                <b-dropdown text="Create Post" right>
                    <b-card-body>
                        <b-form>
                            <p>Username: </p>
                            <label for="department">Dept</label>
                            <select name="department">
                                <option value="HR">HR</option>
                                <option value="SalesMarketing">Sales and Marketing</option>
                                <option value="retailOps">Retail Operations</option>
                                <option value="management">Management</option>
                            </select>
                            <label for="title">Title: </label>
                            <input type="text" name="title">
                            <label for="content">Content</label>
                            <textarea name="content" rows="15" cols="30" placeholder="What's on your mind?...."></textarea>
                            <button type="button" @click="createNewPost">Submit Post</button>
                        </b-form>
                    </b-card-body>
                </b-dropdown>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  methods: {
    createNewPost () {
      this.$store.dispatch('createPost')
    }
  },
  computed: {
    ...mapState([
      'posts',
      'department'
    ]),
    ...mapGetters([
      'getUserName'
    ])
  }
}
</script>

<style lang="scss">
    #main-nav{
        background-color: #dadada;
        color: black;
        border: #d1515a 2px solid;
    }
</style>
