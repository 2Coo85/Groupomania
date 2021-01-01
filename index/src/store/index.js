import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authToken: null || JSON.parse(localStorage.getItem('authToken')),
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
    getAllUsers: state => {
      return state.user.name;
    },
    getUsername: state => {
      return state.user.username;
    },
    getUserId: state => {
      return state.user._id;
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
    },
    getAuthToken: state => {
      return state.authToken;
    }, 
    getOneUser: state => {
      return state.oneUser;
    }
  },
  //place for methods needed for functions
  mutations: {
    Save_Users(state, users) {
      state.user.name = users;
    },
    login_success(state, {authToken, user}) {
      state.authToken = authToken;
      state.user = user;
    },
    logout_success(state) {
      state.user = '';
      state.isLoggedIn = false;
      localStorage.removeItem('authTokeen');
      localStorage.removeItem('user');
    },
    setDept(state, department) {
      department.forEach(dept => {
        state.department.push({dpt: dept.department, username: dept.username, postTitle: dept.title});
      });
    },
    setPosts(state, posts){
      state.posts = posts;
    },
    setPostsRead(state, postRead){
      state.postRead.push(postRead);
    },
    deleteAcct(state){
      state.token = null;
      state.user = "";
      localStorage.removeItem('authTokeen');
      localStorage.removeItem('user');
    },
    setOneUser(state, oneUser){
      state.oneUser = oneUser;
    }
  },
  //place for functions
  actions: {
    async createPost(data) {
      Axios.defaults.headers.post['Authorization'] = 'Bearer ' + this.state.authToken;
      const newPost = new FormData();
      newPost.append('department', data.department);
      newPost.append('username', data.username);
      newPost.append('title', data.title);
      newPost.append('body', data.postTitle);
      await Axios.post('http://localhost:3000/api/post', newPost);
    },
    async allPosts({commit}){
      try {
        Axios.defaults.headers.get['Authorization'] = 'Bearer ' + this.state.authToken;
        const response = await Axios.get('http://localhost:3000/api/posts');
        const posts = await response.data;
        commit('createPost', posts);
        commit('setDept', posts);
    } catch (error) {
        console.error('Unable to create post.');
      }
    },
    
  },
  modules: {
  }
})
