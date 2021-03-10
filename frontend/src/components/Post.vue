<template>
    <div id="post" class="container-fluid mt-100">
        <div class="row">
            <div class="col-md-12">
                <div class="card mb-1">
                    <div class="card-header">
                        <div class="flex-wrap w-100">
                            <div class="media-body ml-3"> <a href="" data-abc="true">{{ post.title }}</a>
                                <div class="text-muted small">{{ post.department }} / {{ post.username }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p v-if="post.postText">{{ post.postText }}</p>
                        <img v-if="post.mediaUrl" :src="post.mediaUrl" alt="media" class="image">
                    </div>
                    <div class="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                        <input type="text" class="form-control" placeholder="Enter your comment...">
                        <div class="px-4 pt-3"> <button type="button" class="btn btn-primary"><i class="ion ion-md-create"></i>&nbsp; Comment</button> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['post', 'comments']
}
</script>

<style lang="scss">
    .mt-100 {
        margin-top: 100px
    }

    .card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
        border-width: 0;
        transition: all .2s
    }

    .card-header:first-child {
        border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0
    }

    .card-header {
        display: flex;
        align-items: center;
        border-bottom-width: 1px;
        padding-top: 0;
        padding-bottom: 0;
        padding-right: .625rem;
        height: 3.5rem;
        text-transform: uppercase;
        background-color: #fff;
        border-bottom: 1px solid rgba(26, 54, 126, 0.125)
    }

    .btn-primary {
        color: #fff;
        background-color: #3f6ad8;
        border-color: #3f6ad8
    }

    .btn {
        font-size: 0.8rem;
        font-weight: 500;
        outline: none !important;
        position: relative;
        transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s
    }

    .card-body {
        flex: 1 1 auto;
        padding: .25rem;
        color: black
    }

    .card-body p {
        font-size: 1em
    }

    a {
        color: #E91E63;
        text-decoration: none !important;
        background-color: transparent
    }
    #post {
        width: 100%;
        box-shadow: 2px 2px 5px gray;
    }
</style>
