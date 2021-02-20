<template>
    <div id="main-nav">
        <b-navbar id="app-navbar">
            <b-navbar-brand href="/home"><b-img :src="require('../assets/icon.jpg')" height="50"></b-img>
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-dropdown text="Departments" right class="mr-3">
                    <b-dropdown-item href="/salesMarketing">Sales and Marketing</b-dropdown-item>
                    <b-dropdown-item href="/retailops">Retail Operations</b-dropdown-item>
                    <b-dropdown-item href="/hr">HR</b-dropdown-item>
                    <b-dropdown-item href="/management">Management</b-dropdown-item>
                </b-dropdown>
                <b-dropdown text="User" right class="mr-3">
                    <b-dropdown-item href="/settings">Account</b-dropdown-item>
                    <b-dropdown-item href="/savedPosts">Saved Posts</b-dropdown-item>
                    <b-dropdown-item @click="logOut">Log Out</b-dropdown-item>
                </b-dropdown>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

export default {
  data () {
    return {
      posts: [],
      department: []
    }
  },
  methods: {
    logOut () {
      this.$swal({
        title: 'Log Off?',
        showCancelButton: true,
        confirmButtonText: 'Log Off',
        cancelButtonText: 'Cancel'
      }).then(
        (result) => {
          if (result.value) {
            this.$swal('Logged Out!', 'See you again soon', 'success')
            this.$store.commit('logout')
            this.$router.push('/')
          } else {
            this.$swal('Cancelled', 'info')
          }
        }
      )
    }
  }
}
</script>

<style lang="scss">
    #main-nav{
        color: black;
        border-bottom: #d1515a 5px solid;
    }
    #app-navbar {
        background: linear-gradient(120deg,  #ced6dd, #091f43)
    }
</style>
