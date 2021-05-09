<template>
  <div id="app" class="container-fluid">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  },
  mounted () {
    this.$store.dispatch('loadAllPosts')
  },
  filters: {
    getPostsByDept: state => department => {
      const postByDept = state.posts
        .filter(post => post.department === department)
      return postByDept
    }  
  },
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
  display: flex;
  flex-flow: column wrap;
}

</style>
