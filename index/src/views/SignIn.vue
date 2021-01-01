<template>
    <div id="signUp" class="secondary-bkgd">
        <h2> {{ greeting1 }} </h2>
        <h4 class="mb-4"> {{ greeting2 }} </h4>
        <SignUp/>
    </div>
</template>

<script>
import SignUp from '../components/signUp'

export default {
    data() {
        return{
            greeting1: 'Welcome to Groupmania!',
            greeting2: 'Please sign up below',
            username: '',
            email: '',
            password: ''
        }
    },
    components: {
        SignUp
    }
}
</script>