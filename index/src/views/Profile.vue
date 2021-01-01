<template>
    <div id="profile">
        <h4>Enter your information here</h4>
        <form id="profile-form" class="m-4">
            <label for="fName">First Name</label>
            <input name="fName" type="text" min="2" max="12" required>
            <label for="lname">Last Name</label>
            <input type="text" name="lName" min="2" max="15" required>
            <label for="username"> UserName 'between 6-8 characters'</label>
            <input type="text" name="username" min="6" max="8" required>
            <label for="department"> Department (choose from drop-down)</label>
            <select name="dept-list" required>
                <option value="select"></option>
                <option value="HR">Human Resources</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="accouting">Accounting</option>
                <option value="marketing">Marketing</option>
            </select>
            <label for="email">Work Email</label>
            <input type="email" name="email" min="5" required>
            <label for="phone">Work Number with extention</label>
            <input type="number" name="phone" min="10" max="14" required>
            <router-link to="/account"><button type="button">Update</button></router-link>
        </form>
    </div>
</template>

<script>

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
    }
}
</script>

<style lang="scss">
    #profile h4{
        color: #c2565d;
        margin-top: 20px;
        font-weight: bold;
    }
    #profile-form{
        display: flex;
        flex-flow: column wrap;
        border: outset 3px #c2565d;
        background-color: rgb(222, 222, 226);
        width: 90%;
        margin: 30px 50px;
        padding: 15px;
    }
    form input{
        margin-bottom: 5px;
        border: outset 2px rgb(30, 200, 212);
        background-color: rgb(144, 185, 247);
    }
    form label{
        font-weight: bold;
        margin-top: 5px;
    }
</style>