import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile'
import Settings from '../views/UserSettings'
import SalesMarketing from '../views/SalesMarketing'
import HR from '../views/HR'
import RetailOps from '../views/RetailOps'
import Management from '../views/Management'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/management',
    name: 'Management',
    component: Management
  },
  {
    path: '/retailops',
    name: 'Retail Ops',
    component: RetailOps
  },
  {
    path: '/hr',
    name: 'HR',
    component: HR
  },
  {
    path: '/salesMarketing',
    name: 'Sales and Marketing',
    component: SalesMarketing
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
