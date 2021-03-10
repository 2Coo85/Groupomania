<template>
    <div>
        <h1>Sales and Marketing</h1>
        <div class="container-fluid">
            <section>
                <div class="container">
                    <div class="row my-0 mx-auto">
                        <div class="col-lg-12 col-md-12 col-sm-12 ml-5">
                            <CreatePost/>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container">
                    <div class="row">
                        <b-pagination v-model="currentPage" pills :total-rows="rows" first-number last-number></b-pagination>
                        <div class="clearfix"></div>
                    </div>
                </div>

                <div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <!-- POST -->
                            <div class="post" v-for="post in allPosts" :key="post.id">
                                <Post :post="post" />
                            </div><!-- POST -->
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <b-pagination v-model="currentPage" pills :total-rows="rows" first-number last-number></b-pagination>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </section>

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-1 col-xs-3 col-sm-2 logo "><a href="#"><img src="images/logo.jpg" alt=""  /></a></div>
                        <div class="col-lg-8 col-xs-9 col-sm-5 ">Copyrights 2014, websitename.com</div>
                        <div class="col-lg-3 col-xs-12 col-sm-5 sociconcent">
                            <ul class="socialicons">
                                <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i class="fa fa-cloud"></i></a></li>
                                <li><a href="#"><i class="fa fa-rss"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import Post from '../components/Post'
import { mapState } from 'vuex'
import CreatePost from '../components/CreatePost.vue'

export default {
  components: {
    Post,
    CreatePost
  },
  computed: {
    allPosts () {
      return this.$store.getters.getPostsByDept('Sales and Marketing')
    },
    ...mapState([
      'posts'
    ])
  },
  data () {
    return {
      fileName: '',
      postText: '',
      file: null,
      title: '',
      department: '',
      rows: 10,
      perPage: 5,
      currentPage: 1
    }
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
              department: this.$store.state.departments[0],
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
              department: this.$store.state.departments[0],
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
