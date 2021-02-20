<template>
    <div class="container-fluid">
    <div class="row" id="create-post">
        <div class="post-form" @submit.prevent="createPost()">
            <div class="row px-3 post-header">
                <div class="col-md-12 col-sm-12">
                    <label for="title">Title: </label>
                    <input name="title" type="text" v-model="title">
                </div>
                <div class="col-md-12 col-sm-12">
                    <label for="department">Dept: </label>
                    <select v-model="department" name="department">
                        <option value="">Choose your department</option>
                        <option v-for="dept in getDepartment" :key="dept.id" :value="dept">{{ dept }}</option>
                    </select>
                </div>
            </div>
            <div class="row form-group">
                <textarea class="text-muted bg-light mt-2 mb-1" placeholder="what's on your mind today?" name="postText" v-model="postText"></textarea>
            </div>
            <div class="row">
                <p class="fa fa-user options mb-0 mr-4"></p>
                <p class="fa fa-image options mb-0 mr-4"></p> <img class="options" src="https://img.icons8.com/material/24/000000/more--v2.png" width="30px" height="28px">
                <div class="col-md-6">
                <input id="fileId"  name="file-field" type="file" ref="file" class="form-control-file" accept="image/png, image/jpeg, video/mpeg, image/jpg" />
            </div>
                <div><button type="submit" name="post-btn" :disabled='isPostComplete' @click="submitPost()">Post</button></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
    ]),
    isPostComplete () {
      return this.title && this.department && (this.postText || this.file)
    }
  },
  methods: {
    async createPost () {
      try {
        this.file = this.$refs.file.files[0]
        if (this.file) {
          const postData = await this.$store.dispatch('createPost', {
            userId: this.userId,
            username: this.username,
            title: this.title,
            department: this.department,
            file: this.file
          })
          this.$store.dispatch('getAllPosts')
          this.fileName = ''
          this.postData = postData
        } else if (this.postText) {
          const postData = this.$store.dispatch('createPost',
            {
              userId: this.userId,
              username: this.username,
              title: this.title,
              department: this.department,
              postText: this.postText
            })
          this.$store.dispatch('getAllPosts')
          this.postText = ''
          this.postData = postData
        } else {
          this.errors.add({
            field: 'file-field',
            msg: 'Text or an image is required'
          })
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
    async submitPost () {
      this.createPost()
    }
  }
}
</script>

<style lang="scss">
    #create-post {
        border-radius: 10px;
        width: 100%;
        color: black;
        background-color: rgb(221, 221, 221);
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    #create-post textarea {
        border-radius: 10px;
        color: #616161;
        border: 1px solid #F5F5F5;
        font-size: 16px;
        letter-spacing: 1px;
        height: 150px;
        width: 100%;
    }
    #create-post textarea:focus {
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        border: 1px solid #00C853 !important;
        outline-width: 0 !important
    }
    #create-post select {
        font-size: 15px;
        background-color: #fff !important
    }
    .post-header {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>
