<template>
    <div>
        <h2>{{ greeting }}</h2>
        <Login/>
    </div>
</template>

<script>
import Login from '../components/logIn'
export default {
    data() {
        return{
            greeting: 'Welcome Back! Please Log In',
            username: '',
            password: ''
        }
    },
    components: {
        Login
    }
}
</script>