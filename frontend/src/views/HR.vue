<template>
    <div>
        <template>
          <h1>Human Resources</h1>
        </template>
        <CreatePost/>
        <div v-for="post in allPosts" :key="post.title">
            <Post :post="post" />
        </div>
    </div>
</template>

<script>
import Post from '../components/Post'
import { mapGetters, mapState } from 'vuex'
import CreatePost from '../components/CreatePost.vue'

export default {
  components: {
    Post,
    CreatePost
  },
  computed: {
    ...mapGetters([
      'getPostsByDept'
    ]),
    allPosts () {
      return this.$store.getters.getPostsByDept('HR')
    },
    ...mapState([
      'posts'
    ])
  }
}
</script>

<style lang="scss">
    #comment-card {
        width: 500px;
    }
</style>
