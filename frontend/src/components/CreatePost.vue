<template>
    <div>
      <div class="mt-2 mb-5" id="create-post">
          <b-form id="postForm" class="post-form py-2 pl-3" enctype="multipart/form-data" @submit.prevent="createPost()">
              <b-form-group class="row post-header">
                  <div>
                      <label for="title">Title: </label>
                      <b-form-input name="title" type="text" v-model="title"></b-form-input>
                  </div>
                  <div>
                      <label for="department">Dept: </label>
                      <b-form-select size='sm' v-model="department" name="department"
                          :options="[{text: 'Choose department', value: null},  'HR', 'Sales and Marketing', 'Retail Operations', 'Management']" :value='null'>
                      </b-form-select>
                  </div>
              </b-form-group>
              <b-form-group class="row px-5 post-header">
                <div>
                  <b-form-textarea class="text-muted bg-light col-12 mt-2 mb-1" placeholder="what's on your mind today?" name="postText" v-model="postText"></b-form-textarea>
                </div>
              </b-form-group>
              <b-form-group class="row post-header">
                <div>
                  <p class="fa fa-user options mb-0 mr-4"></p>
                  <p class="fa fa-image options mb-0 mr-4"></p> <img class="options" src="https://img.icons8.com/material/24/000000/more--v2.png" width="30px" height="28px">
                </div>
                <div>
                  <upload-btn class="form-control-file" type="file" id="file" name="image" placeholder="Select a file..." form="postForm" plain @click="chooseFile" @file-update="getFile"></upload-btn>
                </div>
                  <div>
                    <b-button type="submit" name="post-btn" class="form-control btn-submit postBtn">Post</b-button>
                  </div>
              </b-form-group>
          </b-form>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UploadButton from 'vuetify-upload-button'

export default {
  components: {
    'upload-btn': UploadButton
  },
  data () {
    return {
      postText: '',
      uploadedImage: false,
      imageFile: false,
      title: '',
      department: '',
      fileName: ''
    }
  },
  computed: {
    ...mapGetters([
      'getDepartment'
    ])
  },
  methods: {
    getFile (file) {
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.addEventListener('load', () => {
        this.uploadedImage = fr.result
        this.imageFile = file
      })
    },
    async createPost () {
      try {
        if (this.imageFile) {
          if (this.imageFile !== false) {
            await this.$store.dispatch('createPost',
              {
                userId: this.$store.state.user._id,
                username: this.$store.state.user.username,
                title: this.title,
                department: this.department,
                postText: this.postText,
                file: this.imageFile
              },
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
                }
              }).then(
              () => {
                console.log('Post and file added successfully')
              }
            )
            this.$store.dispatch('loadAllPosts')
            this.imageFile = false
            this.content = ''
            this.title = ''
            this.department = null
          } else {
            this.imageFile = false
            this.content = ''
            this.title = ''
            this.department = null
            console.log('invalid')
          }
        } else if (this.postText) {
          await this.$store.dispatch('createPost',
            {
              userId: this.$store.state.user._id,
              username: this.$store.state.user.username,
              title: this.title,
              department: this.department,
              postText: this.postText
            }).then(
            () => {
              console.log('Post added successfully')
            }
          )
          this.$store.dispatch('loadAllPosts')
          this.postText = ''
          this.title = ''
          this.department = null
        } else {
          console.log('not posted')
          this.postText = ''
        }
      } catch (error) {
        this.file = null
        this.postText = ''
        this.title = ''
        this.department = null
        console.log(error)
      }
    },
    chooseFile () {
      this.$refs.file.click()
    }
  }
}
</script>

<style lang="scss">
    #create-post {
        border-radius: 10px;
        color: black;
        background-color: rgb(221, 221, 221);
    }
    #create-post textarea:focus {
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        border: 1px solid #00C853 !important;
        outline-width: 0 !important
    }
    .post-header {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .postBtn {
      pointer-events: auto;
    }
</style>
