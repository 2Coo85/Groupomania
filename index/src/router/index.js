import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserAccount from '../views/UserAccount.vue'
import SignUp from '../views/SignIn.vue'
import LogIn from '../views/LogIn.vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'UserAccount',
    component: UserAccount
  },
  {
    path: '/signUp',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/logIn',
    name: 'Log In',
    component: LogIn
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
