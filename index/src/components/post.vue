<template>
  <div class="hello">
    <article>
      <header>
        <h5>{{ dept }}</h5>
        <h5>{{ username }}</h5>
        <h6>{{ title }}</h6>
      </header>
      <div class="posting">
        {{ body }}
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: ['dept', 'username', 'title', 'body']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
