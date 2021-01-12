<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/navBar'
import {mapState, mapGetters} from 'vuex';
export default {
  components: {
    NavBar 
  },
  mounted() {
    this.$store.dispatch('createPost');
    this.$store.dispatch('allPosts');
  },
  computed: {
    ...mapState([
      'posts',
      'numOfComments'
    ]),
    ...mapGetters([
      'getDepartment',
      'getPostsByDept'
    ])
  }
}
</script>

<style lang="scss">
html, body, #app{
  background-color: #091f43;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
