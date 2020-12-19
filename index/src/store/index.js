import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null || JSON.parse(localStorage.getItem('user')),
    departments: [
      "HR",
      "Accounting",
      "Design",
      "Development",
      "Marketing"    
    ],
    users: [],
    numOfComments: 0,
    posts: [
      {
        department: 'HR',
        username: "User966",
        title: "Woe is me",
        textBody: "what a pain."
      },
      {
        department: 'Accounting',
        username: "User741",
        title: "Count me in",
        textBody: "numbers are fun."
      },
      {
        department: 'Design',
        username: "User852",
        title: "Give me color",
        imageUrl: "/media/red.png"
      }
    ],
    department: [],
    postsRead: []
  },
  getters: {
    getName: state => {
      return state.user.name;
    },
    getUsername: state => {
      return state.user.username;
    },
    getDepartment: state => {
      return state.departments;
    },
    getEmail: state => {
      return state.user.email;
    },
    getPhone: state => {
      return state.user.phone;
    },
    getAllPosts: state => {
      return state.posts;
    },
    getPostByDept: (state, department) => {
      const postsByDept = state.posts.filter(post => post.department === department)
      .sort((a, b) => new Date(b.postCreated) - new Date(a.postCreated));
      return postsByDept;
    },
    getPostRead: state => {
      return state.user.postsRead;
    }
  },
  //place for methods needed for functions
  mutations: {
    Save_Users(state, users) {
      state.users = users;
    }
  },
  //place for functions
  actions: {
    
  },
  modules: {
  }
})
