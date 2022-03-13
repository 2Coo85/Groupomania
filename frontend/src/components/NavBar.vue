<template>
    <div id="main-nav">
        <b-navbar id="app-navbar">
            <b-navbar-brand href="/main"><b-img :src="require('../assets/icon.jpg')" height="50"></b-img>
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
                    <b-dropdown-item> <router-link :to="{ name: 'Settings', params: { id: user.userId, user: user } }">Account</router-link></b-dropdown-item>
                    <b-dropdown-item @click="logOut">Log Out</b-dropdown-item>
                </b-dropdown>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  prop: ['user'],

  data () {
    return {
      posts: [],
      department: []
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    logOut () {
      this.$swal({
        title: 'Log Off?',
        icon: 'question',
        toast: false,
        position: 'top',
        showCancelButton: true
      }).then(
        (result) => {
          if (result.value) {
            this.$swal('Logged Out!', '', 'success')
            this.$store.commit('logout')
            this.$router.push('/')
          } else {
            this.$swal('Cancelled', '', 'info')
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
