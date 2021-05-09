<template>
    <div>
        <div class="card" id="userComments" style="display: flex; flex-flow: column-reverse nowrap">
            <div class="mt-2">
                <div class="d-flex flex-row p-3">
                    <div class="w-100">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-row align-items-center"> 
                              <span class="mr-2">{{ comment.username }}</span>
                              </div>
                            </div>
                            <p class="text-justify comment-text mb-0">{{ comment.commentText }}</p>
                        </div>
                   </div>
            </div>
            </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['comment', 'postId'],
  computed: {
    ...mapGetters([
      'getPostId'
    ])
  } 
}
</script>
