<template>
    <b-card-body id="create-post" class="mr-5">
        <b-form class="post-form" @submit.prevent="createPost()">
            <label for="department">Dept</label>
            <select v-model="post.department">
                <option value="">Choose your department</option>
                <option v-for="dept in getDepartment" :key="dept.id" :value="dept">{{ dept }}</option>
            </select>
            <label for="title">Title: </label>
            <input type="text" name="title" v-model="post.title">
            <label for="content">Content</label>
            <textarea name="content" rows="5" cols="50" placeholder="What's on your mind?...." v-model="post.postText"></textarea>
            <div class="col-md-6">
                <input id="fileId"  name="file-field" type="file" ref="file" class="form-control-file" accept="image/png, image/jpeg, video/mpeg, image/jpg" />
            </div>
            <button type="submit" class="form-control">Submit Post</button>
        </b-form>
        {{ postData }}
    </b-card-body>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      fileName: '',
      content: '',
      file: null,
      post: [],
      postData: {}
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
          const postData = await this.$store.dispatch('createPost', {
            post: this.post,
            file: this.file
          })
          this.$store.dispatch('getAllPosts')
          this.fileName = ''
          this.postData = postData
        } else if (this.content) {
          const postData = this.$store.dispatch('createPost', this.post)
          this.$store.dispatch('getAllPosts')
          this.content = ''
          this.postData = postData
        } else {
          this.errors.add({
            field: 'file-field',
            msg: 'Text or an image is required'
          })
          this.fileName = ''
          this.content = ''
        }
      } catch (error) {
        this.fileName = ''
        this.file = null
        this.content = ''
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
    #create-post {
        background-color: gray;
        display: flex;
        flex-flow: column wrap;
        position: relative;
        left: 28%;
        width: 550px;
        height: auto;
        justify-content: center;
        align-items: center;
        padding: 2%;
    }
</style>
