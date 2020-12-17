<template>
  <div class="hello">
      <article class="mb-3 post">
        <header class="mb-1">
          <h4 class="mb-1">d/{{ department }} * {{ username }}</h4>
          <router-link to="#post-modal" v-b-modal.post-modal><h5>{{ title }}</h5></router-link>
        </header>
        <div class="posting">
          {{ body }}
        </div>
      </article>
    <b-modal id="post-modal" hide-footer>
      <div class="d-block">
        <header>
          <h4>d/{{ department }} * {{ username }}</h4>
          <h5>{{ title }}</h5>
        </header>
        <main>
          <p>{{ body }}</p>
        </main>
        <footer>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
  name: 'post',
  props: ['department', 'username', 'title', 'body']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  img {
    width: 75px;
    border-radius: 50%;
  }
  .post {
    background-color: rgb(215, 244, 245);
    border: inset 2px rgb(88, 34, 235);
    color: rgb(10, 1, 56);
    min-height: 150px;
  }
  .post:hover {
    border: outset 5px white;
  }
  header{
    text-align: left;
  }
  header h4{
    font-size: .95em;
  }
  header h5{
    font-size: 1em;
    font-weight: bold;
  }
  button#title h5{
    background-color: none;
    border: none;
  }
</style>
