<template>
    <div id="post">
        <b-card v-b-modal.postModal>
            <b-card-body>
                <b-card-title>Card Title</b-card-title>
                <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
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
                        <h5 class="modal-title">{{ department }} / {{ username }}</h5>
                        <h6 class="modal-title">{{ title }}</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        {{ body }}
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
  props: ['title', 'department', 'username', 'body', 'comments']
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
