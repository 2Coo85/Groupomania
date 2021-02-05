<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="/account">Account Settings <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/savedPosts">Posts Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
        <h1>User Account</h1>
        <form id="account-form">
            <label for="UserName">Username: </label>
            <p id="UserName"> {{ getUserName }}</p>
            <label for="dept">Department</label>
            <p id="dept">{{ getDepartment }}</p>
            <label for="email">Email: </label>
            <p id="email">{{ getEmail }}</p>
        </form>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getUserName',
      'getDepartment',
      'getEmail'
    ])
  }
}
</script>
