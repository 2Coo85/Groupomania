<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="/account">Account Settings <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/savedPosts">Posts Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
        <h1>Posts Read</h1>
        <Post/>
    </div>
</template>

<script>
import Post from '../components/Post'

export default {
  components: {
    Post
  }
}
</script>
