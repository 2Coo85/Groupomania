<template>
  <div class="container">
      <Post v-if="department === 'Accounting'"/>
  </div>
</template>

<script>
import Post from '../components/post'
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  components: {
    Post
  },
  computed:{
    ...mapGetters([
      'getPostbyDept',
    ]),
    allPosts(){
      return this.getPostbyDept('Accounting');
    },
    ...mapState([
      'posts',    
    ])
  },
  methods: {
    async createPost() {
      try{
        if (this.content) {
          this.content = '';
          this.$store.dispatch('allPosts');
        } else {
          this.$store.dispatch('allPosts');
          this.content = '';
      }
    } catch (error){
      this.file = null;
      this.content = '';
      console.log(error);
    }
  }
}
}
</script>