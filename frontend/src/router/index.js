import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Management from '../views/Management.vue'
import HR from '../views/HR.vue'
import SalesMarketing from '../views/SalesMarketing.vue'
import RetailOps from '../views/RetailOps.vue'
import PostsSaved from '../views/PostsRead.vue'
import Settings from '../views/UserSettings.vue'
import Main from '../views/MainPage.vue'
import PostDetail from '../components/PostDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Main Page',
    component: Main
  },
  {
    path: '/management',
    name: 'Management',
    component: Management
  },
  {
    path: '/retailops',
    name: 'RetailOps',
    component: RetailOps
  },
  {
    path: '/salesMarketing',
    name: 'Sales and Marketing',
    component: SalesMarketing
  },
  {
    path: '/hr',
    name: 'HR',
    component: HR
  },
  {
    path: '/savedPosts',
    name: 'Posts Saved',
    component: PostsSaved
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/post/:title',
    name: 'Post Detail',
    component: PostDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
