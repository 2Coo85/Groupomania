<template>
  <div class="container">
    <Post
      v-for="post in posts"
      :department="post.department"
      :username="post.username"
      :title="post.title"
      :body="post.textBody"
      :media="post.mediaUrl"
      :key="post.title"
    />    
  </div>
</template>

<script>
import Post from '../components/post';
import { mapState } from 'vuex';

export default {
  components: {
    Post
  },
  computed:{
    ...mapState({
      posts: 'posts',
      department: 'department'
    })
  }
}
</script>