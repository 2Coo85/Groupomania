import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserAccount from '../views/UserAccount.vue'
import SignUp from '../views/SignIn.vue'
import LogIn from '../views/LogIn.vue'
import Profile from '../views/Profile'
import PostExpand from '../views/PostExpand'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
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
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/post/:title',
    component: PostExpand
  }
]
});

export default router;
