<template>
    <div id="post" class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-12">
              <b-card class="mb-1">
                <template v-slot:header>
                    <b-card-header>
                        <header class="0w-100">
                            <div class="ml-3">
                                <router-link id="postTitle" :to="{ name: 'Post', params: { id: post._id, post: post }}"><h6>{{ post.title }}</h6></router-link>
                                <div class="text-muted small mb-1">{{ post.department }} / {{ post.username }}</div>
                            </div>
                        </header>
                    </b-card-header>
                </template>
                    <b-card-body class="mt-1">
                      <div class="form-group post-body">
                        <b-card-text v-if="post.postText">{{ post.postText }}</b-card-text>
                        <b-img class="image" v-else :src="post.imageUrl" alt="media"></b-img>
                      </div>
                    </b-card-body>
                    <div>
                      <b-form class="comment-footer" @submit.prevent='addComment(post._id)'>
                          <b-form-group>
                            <b-form-textarea v-model="commentText" rows="3" placeholder="Enter comments here"></b-form-textarea>
                          </b-form-group>
                          <div>
                            <b-button type="submit" class="form-control btn-submit commentBtn" @submit="addComment">Submit Comment</b-button>
                          </div>
                       </b-form>
                    </div>
                <template v-slot:footer>
                    <div class="form-group">
                      <div>
                        <Comments v-for="comment in post.comments" :key="comment.id"
                        :comment="comment" />
                      </div>
                  </div>
                </template>
              </b-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Comments from './Comments.vue'

export default {
  components: { Comments },
  componets: {
    Comments
  },
  props: ['post', 'comments'],
  data () {
    return {
      commentText: '',
      comment: [],
      title: '',
      postText: '',
      imageUrl: '',
      selectedPost: null
    }
  },
  computed: {
    ...mapGetters([
      'getPostsByDept',
      'getAllPosts'
    ]),
    ...mapState([
      'posts'
    ])
  },
  methods: {
    async addComment (postId) {
      try {
        if (this.commentText !== '') {
          await this.$store.dispatch('addNewComment', {
            postId: postId,
            username: this.$store.state.user.username,
            department: this.$store.state.user.department,
            commentText: this.commentText
          }).then(
            () => {
              console.log('New Comment added')
              console.log(postId)
            }
          )
          this.$store.dispatch('loadAllPosts')
          this.commentText = ''
        } else {
          this.commentText = ''
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
    .card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(209, 81, 90, 0.2), 0 0.9375rem 1.40625rem rgba(9, 31, 67, 0.15), 0 0.25rem 0.53125rem rgba(209, 81, 90, 0.2), 0 0.125rem 0.1875rem rgba(209, 81, 90, 0.2);
        color: black;
    }

    .card-header:first-child {
        border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0
    }
    .post-body {
      border-bottom: solid 0.05px grey;
    }

    .card-header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3.5rem;
        text-transform: uppercase;
        background-color: #d1515a;
        border-bottom: 3px solid rgba(26, 54, 126, 0.125)
    }

    .btn-primary {
        color: #fff;
        background-color: #3f6ad8;
        border-color: #3f6ad8
    }

    .btn {
        font-size: 0.8rem;
        font-weight: 500;
        outline: none !important;
        position: relative;
        transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s
    }

    #postTitle:visited {
        color: #E91E63;
        text-decoration: none !important;
        background-color: transparent
    }
    #post {
        width: 95%;
        box-shadow: 2px 2px 5px gray;
    }
    #postBtn {
        background: none;
        border: none;
        color: #091f43;
        height: 10px;
    }
    .comment-footer {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: flex-start
    }
    .commentBtn {
      pointer-events: auto;
    }
    .image {
      width: 300px;
      height: 200px
    }
</style>
