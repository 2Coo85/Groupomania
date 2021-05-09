<template>
<div class="card">
    <router-link :to="'/home'">Back To Home</router-link>
    <h3>{{ post.title }}</h3>
    <b-card-text v-if="post.postText">{{ post.postText }}</b-card-text>
    <b-img class="image" v-else :src="post.imageUrl" alt="media"></b-img>
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
    <div>
        <div>
            <Comments v-for="comment in post.comments" :key="comment.id" :comment="comment" />
        </div>
    </div>
</div>
</template>

<script>
import Comments from '../components/Comments'

export default {
    name: "Post",
    props: ['id', 'post', 'comment'],
    components: {
        Comments
    },
    data () {
        return {
            postSaved: 'not saved',
            commentText: ''
        }
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
                this.$store.dispatch('loadAllComments')
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
