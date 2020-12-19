<template>
  <div class="container">
      <Post v-if="department === 'Design'"/>
  </div>
</template>

<script>
import Post from '../components/post'
import { mapState } from 'vuex';

export default {
  components: {
    Post
  },
  computed:{
    ...mapState({
      posts: 'posts',
      department: 'department',
      numOfComments: 'numOfComments'
    })
  }
}
</script>