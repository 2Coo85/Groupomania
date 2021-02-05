<template>
    <div>
        <h1>Sales and Marketing</h1>
        <create-post/>
        <div v-for="post in allPosts" :key="post.title">
            <Post :post="post"/>
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
    allPosts () {
      return this.$store.getters.getPostsByDept('Sales and Marketing')
    },
    ...mapState([
      'posts'
    ])
  }
}
</script>
