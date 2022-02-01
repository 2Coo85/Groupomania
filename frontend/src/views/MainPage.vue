<template>
  <div class="container-fluid">
    <!-- Slider -->
    <div class="tp-banner-container">
        <div class="tp-banner" >
            <ul>
                <!-- SLIDE  -->
                <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" >
                <!-- MAIN IMAGE -->
                <b-img :src="require('../assets/icon-left-font-monochrome-white.png')" height="75" alt="slidebg1"  data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"></b-img>
                <!-- LAYERS -->
                </li>
            </ul>
        </div>
        </div>
        <!-- //Slider -->
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
                            <div class="post" v-for="post in loadAllPosts" :key="post._id">
                                <Post :post="post" />
                            </div>
                            <!-- POST -->
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
</template>

<script>
import CreatePost from '../components/CreatePost.vue'
import Post from '../components/Post.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  components: { CreatePost, Post },
  computed: {
    ...mapGetters([
      'getAllPosts',
      'getPostsByDept',
      'getUserName'
    ]),
    loadAllPosts () {
      return this.getAllPosts
    },
    ...mapState([
      'posts'
    ]),
    user () {
      return this.getUserName
    }
  },
  mounted () {
    this.$store.dispatch('loadAllPosts')
  },
  data () {
    return {
      rows: 10,
      perPage: 5,
      currentPage: 1,
      title: '',
      department: '',
      postText: ''
    }
  }
}
</script>
