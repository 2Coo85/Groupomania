<template>
    <div>
        <template>
          <h1>Human Resources</h1>
        </template>
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
                            <div class="post" v-for="post in allPosts" :key="post._id" :id="post._id | getPostsByDept">
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
import { mapGetters, mapState } from 'vuex'
import CreatePost from '../components/CreatePost.vue'

export default {
  components: {
    Post,
    CreatePost
  },
  filters: {
    getPostsByDept: state => department => {
      const postByDept = state.posts
        .filter(post => post.department === department)
      return postByDept
    }  
  },
  mounted () {
    this.$store.dispatch('loadAllPosts')
  },
  computed: {
    ...mapGetters([
      'getPostsByDept'
    ]),
    allPosts () {
      return this.$store.getters.getPostsByDept('HR')
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
    onSubmit () {
      console.log('post submitted')
    }
  }
}
</script>

<style lang="scss">
    #comment-card {
       width: 500px;
    }
</style>
