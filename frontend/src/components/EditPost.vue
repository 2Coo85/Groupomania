<template>
    <b-form class="container-fluid" id="postEdit" enctype="multipart/form-data" @submit.prevent="editPost()">
      <div class="row">
        <div class="col-12">
          <b-card class="mb-1">
            <template v-slot:header>
              <b-card-header>
                <header class="0w-100">
                  <h2>Edit Post</h2>
                </header>
              </b-card-header>
            </template>
            <template v-slot:body>
              <b-card-body>
                <div class="form-group post-body">
                  <b-form id="editForm" v-on:submit="updatePost">
                    <b-form-group class="row">
                      <label for="titleEdit">Title</label>
                      <input type="text" class="form-control" id="titleEdit" v-model="title" required>
                    </b-form-group>
                    <b-form-group class="row">
                      <label for="departmentEdit">Dept: </label>
                      <b-form-select size='sm' v-model="department" name="departmentEdit"
                      :options="[{text: 'Choose department', value: null},  'HR', 'Sales and Marketing', 'Retail Operations', 'Management']" :value='null'>
                      </b-form-select>
                    </b-form-group>
                    <b-form-group class="row">
                      <label for="contentEdit">Content</label>
                      <textarea class="form-control" name="contentEdit" rows="6" v-model="content">
                      </textarea>
                    </b-form-group>
                    <b-form-group class="row post-header">
                      <div>
                        <upload-btn class="form-control-file" type="file" id="file" name="image" placeholder="Select a file..." form="postEdit" plain @click="chooseFile" @file-update="getFile"></upload-btn>
                      </div>
                      <div>
                        <b-button type="submit" name="post-btn" class="form-control btn-submit postBtn" >Save Changes</b-button>
                        <b-button type="button" class="form-control btn-danger" v-on:submit="removePost()">Delete Post</b-button>
                        <a v-link="'/main'" class="btn btn-default">Cancel</a>
                      </div>
                    </b-form-group>
                  </b-form>
                </div>
              </b-card-body>
            </template>
          </b-card>
        </div>
      </div>
    </b-form>
</template>


<script>
import { mapGetters, mapState} from 'vuex'

export default {
  name: 'EditPost',
  props: ['post'],
    data: {
        title: '',
        department: '',
        content: '',
        file: ''
    },
    computed: {
      ...mapState([
        'posts'
      ]),
      ...mapGetters([
        'getAllPosts',
        'getPostsByDept'
      ])
    },
    methods:{
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
    getFile (file) {
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.addEventListener('load', () => {
        this.uploadedImage = fr.result
        this.file = file
      })
    },
    async editPost () {
      try {
        if (this.file) {
          if (this.file !== false) {
            await this.$store.dispatch('editPost',
              {
                userId: this.$store.state.user._id,
                username: this.$store.state.user.username,
                title: this.title,
                department: this.department,
                file: this.file,
                content: ''
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
            this.file = false
            this.content = ''
            this.title = ''
            this.department = null
          } else {
            this.file = false
            this.content = ''
            this.title = ''
            this.department = null
            console.log('invalid')
          }
        } else if (this.content) {
          await this.$store.dispatch('editPost',
            {
              userId: this.$store.state.user._id,
              username: this.$store.state.user.username,
              title: this.title,
              department: this.department,
              content: this.content
            }).then(
            () => {
              console.log('Post added successfully')
            }
          )
          this.$store.dispatch('loadAllPosts')
          this.content = ''
          this.title = ''
          this.department = null
        } else {
          console.log('not posted')
          this.content = ''
        }
      } catch (error) {
        this.file = null
        this.content = ''
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
