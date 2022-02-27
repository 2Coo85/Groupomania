import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    departments: [
      'Sales and Marketing',
      'HR',
      'Retail Operations',
      'Management'
    ],
    posts: [],
    savedPosts: [],
    oneUser: [],
    readPosts: [],
    authToken: localStorage.getItem('authToken') || null,
    department: [],
    user: JSON.parse(localStorage.getItem('user')) || null,
    files: []
  },
  getters: {
    getUser: (state) => {
      return state.user.username
    },
    getUserId: (state) => {
      return state.user.userId
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
    },
    getReadPosts: (state) => {
      return state.readPosts
    }
  },
  mutations: {
    Set_Users: (state, user) => {
      state.user = user;
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
    },
    Edit_Post: (state, editedPost) => {
      const postFiles = posts.findIndex(
        post => post.id === editedPost.id
      )
      state.posts[postFiles] = editedPost
      state.posts.unshift(posts)
    },
    Delete_Post: (state, posts) => {
      state.posts.pop(posts._id)
    }
  },
  actions: {
    async unloadUsers ({ commit }) {
      try {
        if (localStorage.getItem('authToken')) {
          const response = await axios.get('http://localhost:3000/api/auth/users/')
          commit('Set_Users', response.data)
          localStorage.setItem('users', JSON.stringify(response.data))
        }
      } catch (error) {
        console.log(error)
      }
    },
    async deleteUser ({ commit }) {
      try {
        await axios.delete(
          'http://localhost:3000/api/auth/users/' + this.getters.getUserId,
          {
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('authToken')
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
        const token = this.getters.getAuthToken
        const response = await axios.post('http://localhost:3000/api/auth/signup', {
          username: data.username,
          department: data.department,
          phone: data.phone,
          email: data.email,
          password: data.password
        },
        {
          headers: {
            authorization: 'Bearer ' + token
          }
        })
        console.log(response)
        const user = await response.data
        const authToken = await response.data.token
        localStorage.setItem('authToken', JSON.stringify(authToken))
        localStorage.setItem('user', JSON.stringify(user))
        commit('auth_successful', { authToken, user })
      } catch (error) {
        console.log(error)
      }
    },
    async createPost ({ commit }, data) {
      const postForm = new FormData()
      postForm.append('userId', data.userId)
      postForm.append('username', data.username)
      postForm.append('title', data.title)
      postForm.append('department', data.department)
      postForm.append('content', data.content)
      postForm.append('file', data.file)

      try {
        const response = await axios.post('http://localhost:3000/api/posts/', postForm,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
            }
          })
        commit('Create_Post', response.data)
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
          router.push('/main')
        }
        const response = await axios.get('http://localhost:3000/api/posts/', {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
          }
        })
        const posts = await response.data
        console.log(posts)
        commit('All_Posts', posts)
        commit('setDept', posts)
        localStorage.setItem('posts', JSON.stringify(response.data))
      } catch (error) {
        console.log(error)
      }
    },
    async postsByDept ({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/api/posts/', {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
          }
        })
        commit('All_Posts', posts)
        commit('setDept', posts)
      } catch (error) {
        console.log(error)
      }
    },
    async login ({ commit }, data) {
      try {
        const token = this.getters.getAuthToken
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          email: data.email,
          password: data.password
        },
        {
          headers: {
            authorization: 'Bearer ' + token
          }
        })
        console.log(response)
        const authToken = await response.data.token
        const user = await response.data
        localStorage.setItem('authToken', JSON.stringify(authToken))
        localStorage.setItem('user', JSON.stringify(user))
        commit('auth_successful', { user, authToken })
        router.push('/main')
      } catch (error) {
        console.log(error)
      }
    },
    async editPost ({ commit }, {postId, newFile, content}){
      try{
        const formData = !!newFile

        if (formData) {
          const editData = new FormData()
          editData.append('file', newFile)
          editData.append('content', content)
        }

        const response = await axios.put('http://localhost:3000/api/posts/' + postId, body, { FormData })
        commit('Edit_Post', response.post)
      } catch (error) {
        console.error(error)
      }
      
      
      // try {
      //   const editForm = new FormData()
      //   editForm.append('content', data.content)
      //   editForm.append('file', data.file)

      //   //edit post information
      //   const response = await axios.put('http://localhost:3000/api/posts/', editForm,
      //   {
      //     headers: { 'Content-Type': 'multipart/form-data',
      //     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('authToken'))
      //     }
      //   })
      //   commit('Edit_Post', response.data)

      // }catch (error) {
      //   console.error(error);
      // }
      
    },
    async deletePost ({ commit }) {
      try {
        await axios.delete(
          `http://localhost:3000/api/auth/posts/${post._id}`,
          {
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('authToken')
            }
          }
        )
        commit('Delete_Post')
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
