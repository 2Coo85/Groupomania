import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    strict: true,
    departments: [
      'Sales and Marketing',
      'HR',
      'Retail Operations',
      'Management'
    ],
    posts: [],
    savedPosts: [],
    oneUser: [],
    authToken: localStorage.getItem('authToken') || null,
    department: [],
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  getters: {
    getUserName: (state) => {
      return state.user.username
    },
    getUserId: (state) => {
      return state.user._id
    },
    getUserDepartment: state => {
      return state.user.department
    },
    getUserEmail: (state) => {
      return state.user.email
    },
    getUserPhone: (state) => {
      return state.user.phone
    },
    getAllPosts: (state) => {
      return state.posts
    },
    getDepartment: (state) => {
      return state.departments
    },
    getAllUsers: (state) => {
      return state.users
    },
    getOneUser: (state) => {
      return state.oneUser
    },
    getEmail: (state) => {
      return state.email
    },
    getPostsByDept: state => department => {
      const postByDept = state.posts
        .filter(post => post.department === department)
      return postByDept
    },
    getSavedPosts: (state) => {
      return state.savedPosts
    },
    getAuthToken: (state) => {
      return state.authToken
    }
  },
  mutations: {
    Set_Users: (state, user) => {
      return state.user
    },
    Delete_User: (state) => {
      state.authToken = null
      state.user = ''
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
    },
    One_User: (state, oneUser) => {
      state.oneUser = oneUser
    },
    auth_successful: (state, { authToken, user }) => {
      state.authToken = authToken
      state.user = user
    },
    setDept: (state, department) => {
      for (const dept of department) {
        state.department.push({
          department: dept.department,
          username: dept.username,
          title: dept.title
        })
      }
    },
    setSavedPosts: (state, savedPosts) => {
      state.savedPosts.push(savedPosts)
    },
    Create_Post: (state, posts) => {
      return state.posts.unshift(posts)
    },
    All_Posts: (state, posts) => {
      state.posts = posts
    },
    View_Post: (state, currentPost) => {
      const index = state.posts.findIndex((post) => post.id === currentPost.id)
      if (index !== -1) {
        state.posts.splice(index, 1, currentPost)
      }
    },
    logout (state) {
      state.isUserLoggedIn = false
      state.user = ''
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
    }
  },
  actions: {
    async unloadUsers ({ commit }) {
      try {
        if (localStorage.getItem('token')) {
          const response = await axios.get('http://localhost:3000/api/auth/users/')
          commit('Set_Users', response.data)
          localStorage.setItem('Users', JSON.stringify(response.data))
        }
      } catch (error) {
        console.log(error)
      }
    },
    async deleteUser ({ commit }) {
      try {
        await axios.delete(
          'http://localhost:3000/api/auth/users/' + this.state.user._id,
          {
            headers: {
              authorization: 'Bearer ' + this.state.authToken
            }
          }
        )
        commit('Delete_User')
      } catch (error) {
        console.log(error)
      }
    },
    async newUser ({ commit }, data) {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/signup', {
          username: data.username,
          email: data.email,
          department: data.department,
          password: data.password,
          phone: data.phone
        },
        {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('authToken')
          }
        })
        const user = await response.data.user
        const authToken = await response.data.authToken
        localStorage.setItem('authToken', JSON.stringify(authToken))
        localStorage.setItem('user', JSON.stringify(user))
        commit('auth_successful', { authToken, user })
      } catch (error) {
        console.log(error)
      }
    },
    async createPost ({ commit }, data) {
      try {
        const response = await axios.post('http://localhost:3000/api/post/', data,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
            }
          })
        commit('Create_Post', JSON.stringify(JSON.parse(response.data)))
      } catch (error) {
        console.log(error)
      }
    },
    async getUser ({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/user/' + this.getters.getUserId)
        const data = await response.data
        commit('One_User', data)
      } catch (error) {
        console.error(error)
      }
    },
    async loadAllPosts ({ commit }) {
      try {
        if (!JSON.parse(localStorage.getItem('authToken'))) {
          router.push('/home')
        }
        const response = await axios.get('http://localhost:3000/api/post/', {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
          }
        })
        const posts = await response.data
        commit('All_Posts', posts)
        commit('setDept', posts)
        localStorage.setItem('posts', JSON.stringify(response.data))
      } catch (error) {
        console.log(error)
      }
    },
    async getOnePost ({ commit }, data) {
      try {
        const response = await axios.get(`http://localhost:3000/api/post/postModal/${data.id}/`, data, {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
          }
        })
        commit('View_Post', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async addNewComment ({ commit }, comment) {
      try {
        const response = await axios.post('http://localhost:3000/api/comments/', comment, {
          headers: {
            authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          }
        })
        commit('Add_Comment', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async loadAllComments ({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/api/comments', {
          headers: {
            authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          }
        })
        commit('All_Comments', response.data)
        localStorage.setItem('comments', JSON.stringify(response.data))
      } catch (error) {
        console.log(error)
      }
    },
    async login ({ commit }, data) {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          email: data.email,
          password: data.password
        },
        {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('authToken')
          }
        })
        const authToken = await response.data.authToken
        const user = await response.data.user
        localStorage.setItem('authToken', JSON.stringify(authToken))
        localStorage.setItem('user', JSON.stringify(user))
        commit('auth_successful', { user, authToken })
        router.push('/home')
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
