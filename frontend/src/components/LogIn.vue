<template>
    <div>
        <b-modal id="logIn">
            <ValidationObserver v-slot="{ handleSubmit }">
            <b-form @submit.prevent='handleSubmit(login())'>
                <b-form-group label="Email" label-for="form-email" >
                    <validation-provider rules="required|email|{regex: /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}$/}" v-slot="{ errors }" name="email">
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
                            v-model="password"
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
            </ValidationObserver>
        </b-modal>
    </div>
</template>

<script>
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
import { required, email, regex } from 'vee-validate/dist/rules'

extend('regex', regex)

extend('email', email)

extend('required', {
  ...required,
  message: 'Required field'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
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
        }).then(
            (response) => {
              this.$router.push('/home')  
            }
        )
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
