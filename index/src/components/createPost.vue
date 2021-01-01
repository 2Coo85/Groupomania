<template>
    <div id="create-post">
        <form id="post-form" class="secondary-bkgd">
            <label for="department">Department</label>
            <p name="department"></p>
            <label for="title">Post Title</label>
            <input name="title" type="text">
            <label for="postBody">Content</label>
            <textarea name="postBody" cols="20" rows="25" placeholder="What's on your mind?..."></textarea>
        </form>
    </div>
</template>

<style lang="scss">
    #post-form{
        display: flex;
        flex-flow: column nowrap;
    }
</style>