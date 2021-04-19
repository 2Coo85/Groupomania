<template>
    <div>
        <div class="card" id="userComments" style="display: flex; flex-flow: column-reverse nowrap">
            <div class="mt-2">
                <div class="d-flex flex-row p-3">
                    <div class="w-100">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-row align-items-center"> <span class="mr-2">{{ comment.username }}</span></div>
                            </div>
                            <p class="text-justify comment-text mb-0">{{ comment.commentText }}</p>
                            <div class="d-flex flex-row user-feed"> <span class="wish"><i class="fa fa-heartbeat mr-2"></i>24</span> <span class="ml-3"><i class="fa fa-comments-o mr-2"></i><button type="submit" @click="addComment(), submitComment()">Reply</button></span> </div>
                        </div>
                   </div>
            </div>
            </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['comment', 'postId'],
  computed: {
    ...mapGetters([
      'getPostId'
    ])
  },
  methods: {
    async addComment () {
      try {
        if (this.commentText) {
          await this.$store.dispatch('addNewComment', {
            postId: this.$store.state.posts.id,
            userId: this.$store.state.user._id,
            username: this.$store.state.user.username,
            department: this.$store.state.user.department,
            commentText: this.commentText
          }).then(
            () => {
              console.log('New Comment added')
            }
          )
          this.$store.dispatch('loadAllComments')
          this.commentText = ''
          console.log(this.postId)
        } else {
          this.commentText = ''
        }
      } catch (error) {
        console.log(error)
      }
    },
    submitComment () {
      try {
        const userCommenting = this.$store.state.user.userId
        const userCommented = this.$store.state.posts.userCommented.push(userCommenting)
        console.log(userCommented)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
