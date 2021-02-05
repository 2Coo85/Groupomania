<template>
    <div id="post">
        <b-card v-b-modal.postModal>
            <b-card-body>
                <h5 v-if="post.title">{{ post.title}}</h5>
                <h6 v-if="post.userName">{{post.userName}}</h6><h6 v-if="post.department">{{ post.department }}</h6>
                <p v-if="post.postText">{{ post.postText }}</p>
                <img v-if="post.mediaUrl" :src="post.mediaUrl" alt="image/video">
            </b-card-body>
            <b-dropdown id="comment-dropdown" text="Click here to comment">
                <b-card-body id="comment-card">
                    <b-card-title>Comments</b-card-title>
                    <b-textarea id="comments" rowspan="20" colspan="15" placeholder="Enter comments here..."></b-textarea>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </b-card-body>
            </b-dropdown>
        </b-card>
        <!-- Modal -->
        <b-modal class="modal fade" id="postModal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId">
            <div role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ post.department }} / {{ post.userName }}</h5>
                        <h6 class="modal-title">{{ post.title }}</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        {{ post.postText }}
                    </div>
                    <div class="modal-footer">
                        <b-card-body id="comment-card">
                            <b-card-title>Comments</b-card-title>
                            <b-textarea id="comments" rowspan="20" colspan="15" placeholder="Enter comments here..."></b-textarea>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </b-card-body>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    <div id="allComments">
                        {{ comments }}
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
  props: ['post', 'comments']
}
</script>

<style lang="scss">
    #comment-card {
        width: 500px;
    }
    #post {
        width:80%;
        position: relative;
        top: 10%;
        left: 10%;
        box-shadow: 2px 2px 5px gray;
    }
</style>
