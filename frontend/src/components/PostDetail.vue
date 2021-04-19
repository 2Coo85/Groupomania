<template>
    <b-modal id="post-detail">
        <form>
            <div class="form-group">
                <header>
                    <h6>{{ post.department }} / {{ post.username }}</h6>
                    <h5> {{ post.title }} </h5>
                </header>
            </div>
            <div class="form-group">
                <p>{{ post.content }}</p>
            </div>
            <div class="form-group">
                <textarea v-model="commentText" placeholder="Enter comments here"></textarea>
                <b-button type="submit" @click="addComment()">Submit Comment</b-button>
            </div>
            <div class="form-group">
                <div v-for="comment in comments" :key="comment.postId">
                    <comments :comment="comment"/>
                </div>
            </div>
        </form>
    </b-modal>
</template>

<script>
import Comments from './Comments.vue'
import { mapState } from 'vuex'
export default {
  components: { Comments },
  props: ['post', 'comment'],
  computed: {
    ...mapState([
      'comments'
    ])
  },
  data () {
    return {
      commentText: ''
    }
  }
}
</script>
