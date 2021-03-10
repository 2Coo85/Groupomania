<template>
    <div>
      <div class="mt-2 mb-5" id="create-post">
        <ValidationObserver v-slot="{ handleSubmit }">
          <b-form id="postForm" class="post-form py-2 pl-3" @submit.prevent="handleSubmit(createPost())">
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
                  <b-form-file id="fileId"  name="file-field" type="file" ref="file" class="form-control-file" accept="image/png, image/jpeg, video/mpeg, image/jpg" @click="$ref.file.click()"/>
                </div>
                  <div>
                    <b-button type="submit" name="post-btn" class="form-control btn-submit" @submit="createPost">Post</b-button>
                  </div>
              </b-form-group>
          </b-form>
        </ValidationObserver>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationObserver
  },
  data () {
    return {
      fileName: '',
      postText: '',
      file: null,
      title: '',
      department: ''
    }
  },
  computed: {
    ...mapGetters([
      'getDepartment'
    ])
  },
  methods: {
    async createPost () {
      try {
        this.file = this.$refs.file.files[0]
        if (this.file) {
          await this.$store.dispatch('createPost',
            {
              userId: this.$store.state.user._id,
              username: this.$store.state.user.username,
              title: this.title,
              department: this.department,
              file: this.file
            },
            {
              headers: {
                'Content-Type': 'application/json',
                authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
              }
            }).then(
            (response) => {
              console.log(response)
            }
          )
          this.$store.dispatch('loadAllPosts')
          this.fileName = ''
        } else if (this.postText) {
          await this.$store.dispatch('createPost',
            {
              userId: this.$store.state.user._id,
              username: this.$store.state.user.username,
              title: this.title,
              department: this.department,
              postText: this.postText
            },
            {
              headers: {
                'Content-Type': 'application/json',
                authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
              }
            }).then(
            (response) => {
              console.log(response)
            }
          )
          this.$store.dispatch('loadAllPosts')
          this.postText = ''
        } else {
          console.log('not posted')
          this.fileName = ''
          this.postText = ''
        }
      } catch (error) {
        this.fileName = ''
        this.file = null
        this.postText = ''
        console.log(error)
      }
    },
    onSubmit () {
      console.log('post submitted')
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
</style>
