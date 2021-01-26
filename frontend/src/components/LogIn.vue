<template>
    <div>
        <b-modal id="login">
        <b-form @submit.prevent='login()'>
            <b-form-group label="Email" label-for="form-email" >
                <validation-provider rules="required" v-slot="{ errors }">
                    <b-form-input
                        v-model="email"
                        id="form-email"
                        size="sm"
                        placeholder="email@example.com"
                    ></b-form-input>
                    <span>{{ errors[0] }}</span>
                </validation-provider>
            </b-form-group>

            <b-form-group label="Password" label-for="form-password">
                <validation-provider rules="required" v-slot="{ errors }">
                    <b-form-input
                        v-model="password"
                        id="form-password"
                        type="password"
                        size="sm"
                        placeholder="Password"
                    ></b-form-input>
                    <span>{{ errors[0] }}</span>
                </validation-provider>
            </b-form-group>
            <b-button variant="primary" size="sm" :disabled="!isFormComplete">Sign In</b-button>
        </b-form>
        </b-modal>
    </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

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
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        this.$router.push('/home')
      } catch (error) {
        this.error.add({
          message: 'Invalid! Please try again'
        })
      }
    }
  },
  computed: {
    isFormComplete () {
      return this.email && this.password
    }
  }
}
</script>
