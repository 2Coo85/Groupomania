<template>
    <div>
        <template>
          <h1>Human Resources</h1>
        </template>
        <Post/>
    </div>
</template>

<script>
import Post from '../components/Post'

export default {
  components: {
    Post
  },
  props: ['title', 'department', 'username', 'body', 'comments']
}
</script>

<style lang="scss">
    #comment-card {
        width: 500px;
    }
</style>
