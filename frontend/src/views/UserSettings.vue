<template>
    <div>
        <h1>User Account</h1>
        <div class="container rounded bg-white mt-5" id="user-acct">
            <div class="row">
                <div class="col-md-2 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><b-img :src="require('../assets/icon.png')" height="75"></b-img><span class="font-weight-bold"> {{ getUser }} </span></div>
                </div>
                    <div class="col-md-10">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left"></i>
                                    <router-link to="/main"><h6>Back to home</h6></router-link>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    {{ getUserDepartment }}
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6" name="email">
                                    {{ getUserEmail }}
                                </div>
                                <div class="col-md-6" name="workNumber">
                                   {{ getUserPhone }}
                                </div>
                            </div>
                            <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button" @click="deleteAccount()">Delete Account</button></div>
                        </div>
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
      'getUser',
      'getUserDepartment',
      'getUserEmail',
      'getUserPhone'
    ])
  },
  methods: {
    deleteAccount () {
      this.$swal({
        title: 'Do you want to delete your account?',
        text: 'This action can\'t be reversed',
        showCancelButton: true,
        confirmButtonText: 'Delete my account',
        cancelButtonText: 'Cancel deletion'
      }).then(
        (result) => {
          if (result.value) {
            this.$swal('DELETED', 'You have successfully deleted your account', 'success')
            this.$store.dispatch('deleteUser')
            this.$router.push('/')
          } else {
            this.$swal('CANCELLED', 'Your account is still active', 'info')
          }
        }
      )
    }
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
