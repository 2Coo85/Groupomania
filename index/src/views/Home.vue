<template>
  <div class="home">
    <img alt="Groupomania logo" src="icon.png">
    <section id="post" class="post">
      <h5>d/{{ dept }}</h5>
      <h4>{{ title }} / {{ username }}</h4>
      <p>{{ body }}</p>
    </section>
  </div>
</template>

<script>

export default {
  name: 'post',
  data() {
    return {
      name: 'Jane Smith',
      dept: 'Human Resources',
      email: 'work@email.com',
      username: 'newUser123',
      title: 'new post has been added',
      body: 'this will be were the post will be added'
    }
  }
}
</script>

<style lang="scss">
  img {
    width: 100px
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