<template>
  <div class="home">
    <h1>Welcome to Groupomania</h1>
    <CreatePost/>
    <div v-for="post in allPosts" :key="post.title">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
import Post from '../components/Post'
import { mapState } from 'vuex'
import CreatePost from '../components/CreatePost.vue'

export default {
  components: {
    Post,
    CreatePost
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
  mounted () {
    this.$store.dispatch('loadAllPosts')
  }
}
</script>
