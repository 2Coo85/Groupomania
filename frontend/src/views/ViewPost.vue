<template>
<div class="card">
    <router-link :to="'/main'">Back To Home</router-link>
    <h3>{{ post.title }}</h3>
    <b-card-text v-if="post.postText">{{ post.postText }}</b-card-text>
    <b-img class="image" v-else :src="post.file" alt="media"></b-img>
</div>
</template>

<script>

export default {
    name: "Post",
    props: ['id', 'post'],
    data () {
        return {
            postSaved: 'not saved'
        }
    }
    
}
</script>
