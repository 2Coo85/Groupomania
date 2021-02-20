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
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <CreatePost/>
                        </div>
                        <div class="clearfix"></div>
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

                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <!-- POST -->
                            <div class="post" v-for="post in posts" :key="post._id">
                                <div class="wrap-ut pull-left">
                                    <div class="posttext">
                                        <h2><a href="02_topic.html">{{ post.title }}</a></h2>
                                    </div>
                                </div>
                                <div class="ml-2 my-1 pull-left" style="color: black">
                                    <p>Dept: {{ post.department }} </p><p>Posted by tu3050</p>
                                </div>
                                <div class="postinfo pull-left">
                                    <div class="comments">
                                        <div class="commentbg">
                                            560
                                            <div class="mark"></div>
                                        </div>

                                    </div>
                                    <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                <div class="time"><i class="fa fa-clock-o"></i> 24 min</div>
                                </div>
                                <div class="clearfix"></div>
                            </div><!-- POST -->

                            <!-- POST -->
                            <div class="post">
                                <div class="wrap-ut pull-left">
                                    <div class="userinfo pull-left">
                                        <div class="avatar">
                                            <img src="images/avatar2.jpg" alt="" />
                                            <div class="status red">&nbsp;</div>
                                        </div>

                                        <div class="icons">
                                            <img src="images/icon3.jpg" alt="" /><img src="images/icon4.jpg" alt="" /><img src="images/icon5.jpg" alt="" /><img src="images/icon6.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="posttext pull-left">
                                        <h2><a href="02_topic.html">What Instagram Ads Will Look Like</a></h2>
                                        <p>Instagram offered a first glimpse at what its ads will look like in a blog post Thursday. The sample ad, which you can see below.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="postinfo pull-left">
                                    <div class="comments">
                                        <div class="commentbg">
                                            89
                                            <div class="mark"></div>
                                        </div>

                                    </div>
                                    <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                    <div class="time"><i class="fa fa-clock-o"></i> 15 min</div>
                                </div>                          <div class="clearfix"></div>
                            </div><!-- POST -->

                            <!-- POST -->
                            <div class="post">
                                <div class="wrap-ut pull-left">
                                    <div class="userinfo pull-left">
                                        <div class="avatar">
                                            <img src="images/avatar3.jpg" alt="" />
                                            <div class="status red">&nbsp;</div>
                                        </div>

                                        <div class="icons">
                                            <img src="images/icon2.jpg" alt="" /><img src="images/icon4.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="posttext pull-left">
                                        <h2><a href="02_topic.html">The Future of Magazines Is on Tablets</a></h2>
                                        <p>Eric Schmidt has seen the future of magazines, and it's on the tablet. At a Magazine Publishers Association.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="postinfo pull-left">
                                    <div class="comments">
                                        <div class="commentbg">
                                            456
                                            <div class="mark"></div>
                                        </div>

                                    </div>
                                    <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                    <div class="time"><i class="fa fa-clock-o"></i> 2 days</div>
                                </div>
                                <div class="clearfix"></div>
                            </div><!-- POST -->

                            <!-- POST -->
                            <div class="post">
                                <div class="wrap-ut pull-left">
                                    <div class="userinfo pull-left">
                                        <div class="avatar">
                                            <img src="images/avatar4.jpg" alt="" />
                                            <div class="status yellow">&nbsp;</div>
                                        </div>

                                        <div class="icons">
                                            <img src="images/icon1.jpg" alt="" /><img src="images/icon4.jpg" alt="" /><img src="images/icon6.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="posttext pull-left">
                                        <h2><a href="02_topic.html">Pinterest Now Worth $3.8 Billion</a></h2>
                                        <p>Pinterest's valuation is closing in on $4 billion after its latest funding round of $225 million, according to a report.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="postinfo pull-left">
                                    <div class="comments">
                                        <div class="commentbg">
                                            78
                                            <div class="mark"></div>
                                        </div>
                                    </div>
                                    <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                    <div class="time"><i class="fa fa-clock-o"></i> 24 min</div>
                                </div>
                            <div class="clearfix"></div>
                            </div><!-- POST -->

                            <!-- POST -->
                            <div class="post">
                                <div class="wrap-ut pull-left">
                                    <div class="userinfo pull-left">
                                        <div class="avatar">
                                            <img src="images/avatar.jpg" alt="" />
                                            <div class="status green">&nbsp;</div>
                                        </div>
                                        <div class="icons">
                                            <img src="images/icon1.jpg" alt="" /><img src="images/icon4.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="posttext pull-left">
                                        <h2><a href="02_topic.html">10 Kids Unaware of Their Halloween Costume</a></h2>
                                        <p>It's one thing to subject yourself to a Halloween costume mishap because, hey, that's your prerogative.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="postinfo pull-left">
                                    <div class="comments">
                                        <div class="commentbg">
                                            560
                                            <div class="mark"></div>
                                        </div>

                                    </div>
                                    <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                    <div class="time"><i class="fa fa-clock-o"></i> 24 min</div>
                                </div>
                                <div class="clearfix"></div>
                            </div><!-- POST -->

                            <!-- POST -->
                            <div class="post">
                                <div class="wrap-ut pull-left">
                                    <div class="userinfo pull-left">
                                        <div class="avatar">
                                            <img src="images/avatar2.jpg" alt="" />
                                            <div class="status red">&nbsp;</div>
                                        </div>
                                        <div class="icons">
                                            <img src="images/icon3.jpg" alt="" /><img src="images/icon4.jpg" alt="" /><img src="images/icon5.jpg" alt="" /><img src="images/icon6.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="posttext pull-left">
                                        <h2><a href="02_topic.html">What Instagram Ads Will Look Like</a></h2>
                                        <p>Instagram offered a first glimpse at what its ads will look like in a blog post Thursday. The sample ad, which you can see below.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="postinfo pull-left">
                                    <div class="comments">
                                        <div class="commentbg">
                                            89
                                            <div class="mark"></div>
                                        </div>

                                    </div>
                                    <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                    <div class="time"><i class="fa fa-clock-o"></i> 15 min</div>
                                </div>
                                <div class="clearfix"></div>
                            </div><!-- POST -->

                            <!-- POST -->
                            <div class="post">
                                <div class="wrap-ut pull-left">
                                    <div class="userinfo pull-left">
                                        <div class="avatar">
                                            <img src="images/avatar3.jpg" alt="" />
                                            <div class="status red">&nbsp;</div>
                                        </div>
                                        <div class="icons">
                                            <img src="images/icon2.jpg" alt="" /><img src="images/icon4.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="posttext pull-left">
                                        <h2><a href="02_topic.html">The Future of Magazines Is on Tablets</a></h2>
                                        <p>Eric Schmidt has seen the future of magazines, and it's on the tablet. At a Magazine Publishers Association.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="postinfo pull-left">
                                    <div class="comments">
                                        <div class="commentbg">
                                            456
                                            <div class="mark"></div>
                                        </div>
                                    </div>
                                    <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                    <div class="time"><i class="fa fa-clock-o"></i> 2 days</div>
                                </div>
                                <div class="clearfix"></div>
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
</template>

<script>
import CreatePost from '../components/CreatePost.vue'

export default {
  components: { CreatePost },
  methods: {
    logOut () {
      this.$swal({
        title: 'Log Off?',
        showCancelButton: true,
        confirmButtonText: 'Log Off',
        cancelButtonText: 'Cancel'
      }).then(
        (result) => {
          if (result.value) {
            this.$swal('Logged Out!', 'See you again soon', 'success')
            this.$store.commit('logout')
            this.$router.push('/')
          } else {
            this.$swal('Cancelled', 'info')
          }
        }
      )
    }
  },
  data () {
    return {
      rows: 10,
      perPage: 5,
      currentPage: 1,
      title: '',
      department: '',
      postText: '',
      posts: []
    }
  }
}
</script>
