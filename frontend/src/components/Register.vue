<template>
    <div>
        <b-modal id="signUp" busy title="Create your Profile">
            <form @submit.stop.prevent="signUp">
                <div class="form-group">
                        <label for="username">Username: </label>
                        <validation-provider rules="required" v-slot="{ errors }">
                            <input id="username" type="text" minlength="6" maxlength="8" v-model="username">
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
            </form>
            <template #modal-footer>
                <button type='submit' class='btn btn-primary' :disabled='!isFilledOut'>Complete sign up</button>
            </template>
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
      busy: true
    }
  },
  methods: {
    async signUp () {
      try {
        await this.$store.dispatch('signUp', {
          username: this.username,
          email: this.email,
          department: this.department,
          password: this.password
        })
        this.$router.push('/home')
      } catch (error) {
        console.log(error)
      }
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
