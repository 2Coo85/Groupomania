<template>
    <div>
        <b-modal id="signUp" busy title="Create your Profile" hide-footer no-stacking>
            <form @submit.prevent="newUser()">
                <div class="form-group">
                    <label for="username">Username: </label>
                    <validation-provider rules="required" v-slot="{ errors }">
                        <input id="username" type="text" min="6" max="8" v-model="username">
                        <p><small>Must be between 6-8 characters; not case sensitive</small></p>
                        <span>{{ errors[0] }}</span>
                    </validation-provider>
                </div>
                <div class="form-group">
                    <validation-provider rules="required" v-slot="{ errors }">
                        <select v-model="department">
                            <option value="">Choose your department</option>
                            <option v-for="dept in getDepartment" :key="dept.id" :value="dept">{{ dept }}</option>
                        </select>
                        <span>{{ errors[0] }}</span>
                    </validation-provider>
                </div>
                <div class="form-group">
                  <label for="phone">Work Number: </label>
                  <validation-provider rules="required" v-slot="{ errors }">
                    <input type="phone" class="form-control" name="phoneNumber" id="workNumber" placeholder="Enter work number" v-model="phone">
                    <span>{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                    <label for="email">Email: </label>
                    <validation-provider rules="required" v-slot="{ errors }">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Enter your work email here" v-model="email">
                        <span>{{ errors[0] }}</span>
                    </validation-provider>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <validation-provider rules="required" v-slot="{ errors }">
                        <input type="password" class="form-control" name="password" id="password" placeholder="Enter password" v-model="password">
                        <span>{{ errors[0] }}</span>
                    </validation-provider>
                </div>
                <div class="form-group">
                    <b-button type='submit' class='btn btn-primary form-control' :disabled='!isFilledOut' @click="showDoneMsg">Complete sign up</b-button>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import { mapGetters } from 'vuex'

extend('required', {
  ...required,
  message: 'Required field'
})

export default {
  components: {
    ValidationProvider
  },
  data () {
    return {
      email: '',
      department: '',
      username: '',
      password: '',
      phone: '',
      busy: true
    }
  },
  methods: {
    async newUser () {
      try {
        await this.$store.dispatch('newUser', {
          username: this.username,
          email: this.email,
          department: this.department,
          password: this.password,
          phone: this.phone
        })
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async submitBtn (event) {
      event.preventDefault()
      this.signUp()
    },
    showDoneMsg () {
      this.$bvModal.msgBoxOk('You have registered successfully. Return to main page to sign in')
    }
  },
  computed: {
    ...mapGetters([
      'getDepartment'
    ]),
    isFilledOut () {
      return this.email && this.department && this.username && this.password
    }
  }
}
</script>
