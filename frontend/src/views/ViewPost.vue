<template>
<div class="card post" id="viewPost" img-top>
    <router-link :to="'/main'">Back To Home</router-link>
    <b-button id="editBtn" v-b-modal.editForm>
        <i class="fa fa-edit"></i>
    </b-button>
    <header>
        <h3 id="currentTitle">{{ post.title }}</h3>
        <h5 id="currentDept">{{ post.department }}</h5>
    </header>
    <b-modal id="editForm" title="Edit Post" ok-title="Submit Changes" @ok="saveEdit">
        <b-form>
            <b-file v-if="post.file" @file-update='onNewImage' id="file-input" class="form-control-file"></b-file>
            <input type="text" class="form-control" v-modal="content" />
        </b-form>
    </b-modal>
    <b-card-text id="currentContent" v-if="post.content">{{ post.content }}</b-card-text>
    <b-card id="currentImg" class="image" v-else :img-src="post.file" img-alt="media" img-top></b-card>
    <!-- <b-file v-if="post.file" @file-update='onNewImage' id="file-input" class="form-control-file" disabled></b-file> -->
    <!-- <b-button @click="saveEdit()" id='confirm-edit'>Confirm Changes</b-button> -->
</div>
</template>

<script>
// import EditForm from "../components/EditPost.vue"
import { mapGetters, mapActions } from 'vuex'
import Post from '../components/Post'

export default {
    name: "Post",
    props: ['post', 'user'],
    components: {
        Post
    },
    data () {
        return {
            userId: "",
            postSaved: 'not saved',
            uploadedImage: false,
            title: '',
            department: '',
            content: '',
            file: ''
        }
    },
    computed: {
        ...mapGetters([
            'getUser'
        ]),
        ...mapActions([
            'editPost'
        ]) 
    },
    // mounted () {
    //     const posts = localStorage.getItem('posts')
    //     const singlePost = Object.values(posts)
    //     const user = localStorage.getItem('user')
    //     const currentUser = Object.values(user)
        
    //     if (singlePost.userId != currentUser.userId) {
    //         document.querySelector('#editBtn').style.display = 'none'
    //         document.querySelector('#file-input').style.display = 'none'
    //         document.querySelector('#confirm-edit').style.display = 'none'
    //     } else {
    //         document.querySelector('#editBtn').style.display = 'inline-block'
    //         document.querySelector('#file-input').style.display = 'inline-block'
    //         document.querySelector('#confirm-edit').style.display = 'inline-block'
    //     }
    // },
    methods: {
        isCurrentUser: () => {
            if (post.userId === user.userId) {
                document.querySelector('#editBtn').style.visibility = 'visible'
            } else {
                document.querySelector('#editBtn').style.visibility = 'hidden'
            }
        },
        chooseFile () {
            this.$refs.file.click()
        },
        onNewImage (file) {
            this.onNewImage = file
        },
        async removePost () {
            this.$swal({
                title: 'Do you want to delete your post?',
                text: 'This action can\'t be reversed',
                showCancelButton: true,
                confirmButtonText: 'Delete my post',
                cancelButtonText: 'Cancel deletion'
            }).then(
                (result) => {
                if (result.value) {
                    this.$swal('DELETED', 'You have successfully deleted your post', 'success')
                    this.$store.dispatch('deletePost')
                    this.$router.push('/')
                } else {
                    this.$swal('CANCELLED', 'Your post is still active', 'info')
                }
                }
            )
        },
        async saveEdit () {
            try {
                const post = localStorage.getItem('posts')
                if (this.post.file) {
                if (this.post.file !== false) {
                   
                    await this.$store.dispatch('editPost',
                    {
                        file: this.file,
                    },
                    {
                        headers: {
                        'Content-Type': 'multipart/form-data',
                        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
                        }
                    }).then(
                    () => {
                        console.log('Post and file updated successfully')
                    }
                    )
                    //this.$store.dispatch('loadAllPosts')
                    this.file = false
                    this.content = ''
                } else {
                    this.file = false
                    this.content = ''
                    console.log('invalid')
                }
                } else if (this.content) {
                await this.$store.dispatch('editPost',
                {
                    content: this.content
                }).then(
                    () => {
                    console.log('Post edited successfully')
                    }
                )
                //this.$store.dispatch('loadAllPosts')
                this.content = ''
                } else {
                console.log('not posted')
                this.content = ''
                }
            } catch (error) {
                this.file = null
                this.content = ''
                console.log(error)
                }
            }
        
    }
}
</script>

<style lang="scss">
    // .image {
    //     display: flex;
    //     margin-left: 38%;
    //     margin-bottom: 50px;
    //     margin-top: 30px;
    // }
    #editPost {
        width: 25%;
        position: absolute;
        top: 50%;
        left: 15%;
        padding: 2px;
        font-size: 14px;
        opacity: 0;
        pointer-events: none;
    }
    #editPost:target {
        opacity: 1;
        filter: blur(0);
        animation: drop-down 1.5s ease-in-out forwards;
    }
    #editPost:a{
        pointer-events: all;
    }
    .x{
    position: absolute;
    right: -20px;
    top: -20px;
    padding: 5px;
    border-radius: 50%;
    line-height: .75em;
    width: .75em;
    border: 2px double #ffffff;
    pointer-events: all;
}
</style>
