<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'navbar',
  components: {
    NavBar
  },
  computed: {
    ...mapActions([
      'loadAllPosts',
      'loadAllComments',
      'getUser',
      'getOnePost',
      'addNewComment'
    ]),
    ...mapState([
      'departments',
      'posts',
      'comments',
      'user'
    ])
  }
}
</script>

<style lang="scss">
html, #app {
  background-color: #091f43;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
