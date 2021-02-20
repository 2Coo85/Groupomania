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
        <div class="container rounded bg-white mt-5" id="user-acct">
            <div class="row">
                <div class="col-md-4 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><b-img :src="require('../assets/icon.png')" height="75"></b-img><span class="font-weight-bold"> {{ getUserName }} </span></div>
                </div>
                <div class="col-md-8">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left"></i>
                                <router-link to="/home"><h6>Back to home</h6></router-link>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                <router-link to="#depts" data-type="select" class="editable editable-clickable">
                                <select id="depts">
                                    <option value="">Choose your department</option>
                                    <option v-for="dept in getDepartment" :key="dept.id" :value="dept">{{ dept }}</option>
                                </select>
                                </router-link>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <router-link to="#" id="fName" data-type="text" class="editable editable-click" data-abc="true" data-placeholder="First Name">Sue</router-link>
                            </div>
                            <div class="col-md-6">
                                <router-link to="#" id="lName" data-type="text" class="editable editable-click" data-abc="true" data-placeholder="Last Name">Hall</router-link>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <router-link to="#" id="email" data-type="text" class="editable editable-click" data-abc="true" data-placeholder="Email">email@example.com</router-link>
                            </div>
                                <router-link to="#" id="phone-number" data-type="text" class="editable editable-click" data-abc="true" data-placeholder="Phone#">(210) 555-5102</router-link>
                            </div>
                        </div>
                        <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getUserName',
      'getDepartment'
    ])
  }
}
</script>

<style lang="scss">
    #user-acct {
        color: black;
    }
    .form-control:focus {
        box-shadow: none;
        border-color: #BA68C8
    }

    .profile-button {
        background: #d1515a;
        box-shadow: none;
        border: none
    }

    .profile-button:hover {
        background: #091f43
    }

    .profile-button:focus {
        background:#091f43;
        box-shadow: none
    }

    .profile-button:active {
        background:#091f43;
        box-shadow: none
    }

    .back:hover {
        color:#091f43;
        cursor: pointer
    }
</style>
