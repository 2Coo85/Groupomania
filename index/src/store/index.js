import Vue from 'vue'
import Vuex from 'vuex'

Vue.axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    departments: [
      "HR",
      "Accounting",
      "Design",
      "Development",
      "Marketing"    
    ],
    users: [],
    posts: []
  },
  getters: {
    getName,
    getUsername,
    getDepartment,
    getEmail,
    getPhone,
    getAllPosts,
    getPostByDept
  },
  //place for methods needed for functions
  mutations: {
    Save_Users(state, users) {
      state.users = users;
    }
  },
  //place for functions
  actions: {
    loadUsers({commit}) {
      Vue.axios.get('users').then(result => {
        commit('Save_Users', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  modules: {
  }
})
