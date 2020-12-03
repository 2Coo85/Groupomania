import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'UserAccount',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/UserAccount.vue')
  },
  {
    path: '/signUp',
    name: 'Sign Up',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/logIn',
    name: 'Log In',
    component: () => import('../views/LogIn.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
