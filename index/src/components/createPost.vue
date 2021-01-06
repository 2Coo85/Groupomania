<template>
    <div id="create-post">
        <b-dropdown id="createPost" text="Create Post" class="m-1">
            <b-dropdown-form id="post-form">
                <b-form-group label="Username" label-for="form-user">
                    <p id="form-user">User987</p>
                </b-form-group>
                <b-form-group label="Post Title" label-for="form-title">
                    <b-form-input id="form-title" placeholder="Example Title"></b-form-input>
                </b-form-group>
                <b-form-group label="Department" label-for="form-dept">
                    <b-form-select id="form-dept">
                        <option value="hr">HR</option>
                        <option value="accounting">Accounting</option>
                        <option value="marketing">Marketing</option>
                        <option value="design">Design</option>
                        <option value="development">Development</option>
                    </b-form-select>
                </b-form-group>
                <b-form-group label="Content" label-for="form-content">
                    <b-form-textarea id="form-content" placeholder="What's on your mind?" cols="15" rows="10"></b-form-textarea>
                </b-form-group>
                <b-dropdown-divider></b-dropdown-divider>
                <b-button size="md" type="button" @click="{createPost}">Submit Post</b-button>
            </b-dropdown-form>
        </b-dropdown>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    ...mapState ([
        'posts'
    ]),
    ...mapActions([
        'createPost'
    ])
}
</script>

<style lang="scss">
    #post-form{
        width: 300px;
    }
</style>