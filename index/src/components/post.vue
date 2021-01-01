<template>
  <div class="posting" id="posts">
      <article class="mb-3 mt-5 post">
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
        <header class="mb-3">
          <h4 class="mb-4">d/{{ department }} * {{ username }}</h4>
          <h5>{{ title }}</h5>
        </header>
        <main>
          <p>{{ body }}</p>
          <p><span id="save-post"><button type="button" id="savePostBtn">Save Post</button></span><span id="numberOfComments"> 0 </span>Comments</p>
        </main>
        <footer>
          <h6 id="comments">Comments</h6>
          <textarea name="comments-area" cols="50" rows="10" placeholder="Enter comments here..."></textarea>
          <button type="button" value="submit-comment">Submit</button>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
  name: 'post',
  props: ['department', 'username', 'title', 'body', 'numOfComments']
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
    border: ridge 3px #c2565d;
    color: #091f43;
    min-height: 150px;
    padding: 5px;
  }
  .post:hover {
    border: outset 5px white;
    box-shadow: 5px 5px 10px white;
  }
  header{
    text-align: left;
  }
  header h4{
    font-size: .90em;
  }
  header h5{
    font-size: 1.1em;
    font-weight: bold;
  }
  button#title h5{
    background-color: none;
    border: none;
  }
  #post-modal{
    background-color: rgb(0, 0, 121);
    
  }
  #post-modal{
    min-height: 300px;
  }
</style>
