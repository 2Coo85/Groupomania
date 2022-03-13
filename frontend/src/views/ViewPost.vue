<template>
<div class="card post" id="currentPost" img-top>
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
                <upload-btn class="form-control-file" type="file" id="file" name="image" form="editForm" plain @click="chooseFile" @file-update="getFile"></upload-btn>
            </div>
            <input id="newText" type="text" class="form-control" v-model.lazy="content"/>
        </b-form>
    </b-modal>
    <b-card-text id="currentContent" v-if="post.content">{{ post.content }}</b-card-text>
    <b-card id="currentImg" class="image" v-else :img-src="post.file" img-alt="media" img-top></b-card>
    <b-button id="deletePost" class="btn btn-default" @click="removePost(id)">Delete Post</b-button>
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
    props: ['post'],
    components: {
        'upload-btn': UploadButton
    },
    data () {
        return {
            postSaved: 'not saved',
            uploadedImage: false,
            title: this.post.title,
            department: this.post.department,
            content: this.post.content,
            file: this.post.file,
            postUrl:null,
            id: ''
        }
    },
    computed: {
        ...mapGetters([
            'getUser'
        ])
    },
    // mounted () {
    //     this.postUrl = this.$route.params.id
        
    // },
    created () {
        this.id = this.$route.params.id
    },
    methods: {
        isCurrentUser: () => {
            if (post.userId === user.userId) {
                document.querySelector('#editBtn').style.visibility = 'visible'
            } else {
                document.querySelector('#editBtn').style.visibility = 'hidden'
            }
        },
        getcontent () {
            this.content
        },
        chooseFile () {
            this.$refs.file.click()
        },
        getFile (file) {
            const fr = new FileReader()
            fr.readAsDataURL(file)
            fr.addEventListener('load', () => {
            this.uploadedImage = fr.result
            this.file = file
            })
        },
        removePost () {
            
            this.$swal({
                title: 'Do you want to delete your post?',
                text: 'This action can\'t be reversed',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete my post',
                cancelButtonText: 'Cancel deletion'
            }).then(
                (result) => {
                if (result.value) {
                    console.log('checking remove post')
                    console.log(this.id)
                    this.$store.dispatch('deletePost', this.id)
                    this.$router.push('/main')
                    this.$store.dispatch('loadAllPosts')
                       
                } else {
                    this.$swal('CANCELLED', 'Your post is still active', 'info')
                }
                }
            )
        },
        async saveEdit () {
            //change the if statement to accomadate accepting a file
            if(!this.content) {
                await this.$store.dispatch('editPost', {
                    postId: this.post._id,
                    file: this.file
                })
                
            } else {
                await this.$store.dispatch('editPost', {
                    postId: this.post._id,
                    file: this.file,
                    content: this.content
                })
            }
            
            console.log(this.file.name)
            this.$router.push('/main')
            this.$store.dispatch('loadAllPosts')

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
