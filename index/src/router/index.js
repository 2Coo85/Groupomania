import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserAccount from '../views/UserAccount.vue'
import SignUp from '../views/SignIn.vue'
import LogIn from '../views/LogIn.vue'
import Profile from '../views/Profile'
import Accounting from '../views/Accounting';
import Marketing from '../views/Marketing';
import HR from '../views/HR';
import Design from '../views/Design';
import Development from '../views/Development';

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
    path: '/accounting',
    name: 'Accounting',
    component: Accounting
  },
  {
    path: '/marketing',
    name: 'Marketing',
    component: Marketing
  },
  {
    path: '/hr',
    name: 'HR',
    component: HR
  },
  {
    path: '/design',
    name: 'Design',
    component: Design
  },
  {
    path: '/development',
    name: 'Development',
    component: Development
  }
]
});

export default router;
