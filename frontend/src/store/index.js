import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

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
    users: [],
    oneUser: [],
    authToken: localStorage.getItem('token'),
    department: [],
    user: localStorage.getItem('user'),
    comments: []
  },
  getters: {
    getUserName: (state) => {
      return state.user.username
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
    getPostsByDept: (state, department) => {
      const postByDept = state.posts
        .filter(posts => posts.department === department)
        .sort((a, b) => new Date(b.created) - new Date(a.created))
      return postByDept
    },
    getSavedPosts: (state) => {
      return state.savedPosts
    },
    getAllComments: (state) => {
      return state.comments
    }
  },
  mutations: {
    Set_Users: (state, users) => {
      return state.users
    },
    Delete_User: (state, id) => {
      return state.users.filter((user) => user.id !== id)
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
          depart: dept.department,
          username: dept.username,
          postTitle: dept.title
        })
      }
    },
    setSavedPosts: (state, savedPosts) => {
      state.savedPosts.push(savedPosts)
    },
    Create_Post: (state, post) => {
      return state.posts.unshift(post)
    },
    All_Posts: (state, posts) => {
      state.posts = posts
    },
    All_Comments: (state, comments) => {
      state.comments = comments
    },
    Add_Comment: (state, comment) => {
      return state.comments.unshift(comment)
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
    async deleteUser ({ commit, dispatch }, id) {
      try {
        const response = await axios.delete(
          'http://localhost:3000/api/auth/users/' + id,
          {
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
        )
        commit('Delete_User', response.data)
        dispatch('onLogOut')
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
          password: data.password
        },
        {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
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
        const response = await axios.post('http://localhost:3000/api/post', data, {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        commit('Create_Post', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getUser ({ commit }, data) {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/user/' + this.getters.getUser)
        commit('One_User', response.data)
      } catch (error) {
        console.error(error)
      }
    },
    async loadAllPosts ({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/api/post/', {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        commit('All_Posts', response.data)
        localStorage.setItem('posts', JSON.stringify(response.data))
      } catch (error) {
        console.log(error)
      }
    },
    async getOnePost ({ commit }, data) {
      try {
        const response = await axios.get(`http://localhost:3000/api/post/postModal/${data.title}/`, data, {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
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
            authorization: 'Bearer ' + localStorage.getItem('token')
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
            authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        commit('All_Comments', response.data)
        localStorage.setItem('comments', JSON.stringify(response.data))
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
