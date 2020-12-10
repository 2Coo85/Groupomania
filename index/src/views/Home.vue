<template>
  <div class="container">
    <NavBar/>
    <section id="post" class="post">
      <h5>d/{{ dept }}</h5>
      <h4>{{ title }} / {{ username }}</h4>
      <p>{{ body }}</p>
    </section>
  </div>
</template>

<script>

import NavBar from '../components/navBar';

export default {
  name: 'post',
  components: {
    NavBar
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