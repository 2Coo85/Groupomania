<template>
<div class="card post" id="viewPost" img-top>
    <router-link :to="'/main'">Back To Home</router-link>
    <b-button id="editBtn" @click="$bvModal.show('editForm')">
        <i class="fa fa-edit"></i>
    </b-button>
    <header>
        <h3 id="currentTitle">{{ post.title }}</h3>
        <h5 id="currentDept">{{ post.department }}</h5>
    </header>
    <b-modal id="editForm" title="Edit Post" ok-title="Submit Changes" @ok="saveEdit">
        <b-form>
            <div>
                <upload-btn class="form-control-file" type="file" id="newFile" name="image" placeholder="Select a file..." form="editForm" plain @click="chooseFile" @file-update="getFile"></upload-btn>
            </div>
            <input id="newText" type="text" class="form-control" v-model="content" disabled/>
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
import { mapGetters } from 'vuex'
import UploadButton from 'vuetify-upload-button'

export default {
    name: "Post",
    props: ['post', 'user'],
    components: {
        'upload-btn': UploadButton
    },
    data () {
        return {
            userId: "",
            postSaved: 'not saved',
            uploadedImage: false,
            title: '',
            department: '',
            content: this.post.content,
            newFile: null
        }
    },
    computed: {
        ...mapGetters([
            'getUser'
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
        getFile (file) {
            this.newFile = file
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
                await this.$store.dispatch('editPost', {
                    postId: this.post._id,
                    newFile: this.newFile,
                    content: ''
                })
                console.log('posted successfully')
            } catch (error) {
                console.log(error)
                console.log('not posted')
            }
            // try {
            //     // const post = localStorage.getItem('posts')
            //     if (this.file) {
            //     if (this.file !== false) {
                   
            //         await this.editPost(
            //         {
            //             file: this.file,
            //         },
            //         {
            //             headers: {
            //             'Content-Type': 'multipart/form-data',
            //             authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
            //             }
            //         }).then(
            //         () => {
            //             console.log('Post and file updated successfully')
            //         }
            //         )
            //         //this.$store.dispatch('loadAllPosts')
            //         this.file = false
            //         this.content = ''
            //     } else {
            //         this.file = false
            //         this.content = ''
            //         console.log('invalid')
            //     }
            //     } else if (this.content) {
            //         document.querySelector('#newText').setAttribute('disabled', false)
            //     await this.editPost(
            //     {
            //         content: document.querySelector('#newText').innerHTML
            //     }).then(
            //         () => {
            //         console.log('Post edited successfully')
            //         }
            //     )
            //     //this.$store.dispatch('loadAllPosts')
            //     this.content = ''
            //     } else {
            //     console.log('not posted')
            //     this.content = ''
            //     }
            // } catch (error) {
            //     this.file = null
            //     this.content = ''
            //     console.log(error)
            //     }
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
