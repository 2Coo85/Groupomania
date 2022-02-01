<template>
    <div>
        <b-modal id="logIn">
            <b-form @submit.prevent='login()'>
                <b-form-group label="Email" label-for="form-email" >
                    <validation-provider rules="required|email" v-slot="{ errors }" name="email">
                        <b-form-input
                            v-model="email"
                            id="form-email"
                            size="sm"
                            placeholder="email@example.com" :class="{'form-control': !email, 'form-control is-valid': email}"
                        ></b-form-input>
                        <span>{{ errors[0] }}</span>
                    </validation-provider>
                </b-form-group>

                <b-form-group label="Password" label-for="form-password">
                    <validation-provider rules="required" v-slot="{ errors }">
                        <b-form-input
                            v-model="password" autocomplete="true"
                            id="form-password"
                            type="password"
                            size="sm"
                            placeholder="Password" :class="{'form-control': !password, 'form-control is-valid': password}"
                        ></b-form-input>
                        <span>{{ errors[0] }}</span>
                    </validation-provider>
                </b-form-group>
                <b-button type="submit" class="form-control" size="sm">Sign In</b-button>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Required field'
})

extend('email', email)

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
      } catch (error) {
        this.error.add({
          field: 'password',
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
