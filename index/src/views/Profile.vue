<template>
    <div>
        <Profile/>
    </div>
</template>

<script>
import Profile from '../components/profile';
export default {
    name: 'profile',
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            phone: '',
            department: ''
        }
    },
    componets: {
        Profile
    }
}
</script>