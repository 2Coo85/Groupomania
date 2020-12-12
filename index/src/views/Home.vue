<template>
  <div class="container">
    <NavBar/>
    <router-link to="expanded-post" data-toggle='modal' data-target='#expanded-post'>
    <section id="post" class="post">
      <h5>d/{{ dept }}</h5>
      <h4>{{ title }} / {{ username }}</h4>
      <p>{{ body }}</p>
    </section>
    </router-link>
    <FullView/>
  </div>
</template>

<script>

import NavBar from '../components/navBar';
import FullView from '../components/popUp';

export default {
  components: {
    NavBar,
    FullView
  },
  data() {
    return{
      dept: "HR",
      title: "New Post",
      username: "User984",
      body: "contents of the post"
    }
  }
  
}
</script>

<style lang="scss">
  img {
    width: 75px;
    border-radius: 50%;
  }
  .post {
    background-color: gray;
    border: solid 2px white;
    color: rgb(10, 1, 56);
  }
  .post:hover {
    border: inset 2px black;
  }
</style>