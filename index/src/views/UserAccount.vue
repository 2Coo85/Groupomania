<template>
  <div id="account">
    <form id="account-form">
      <h3>{{ title }}</h3>
      <br>
      <label for="username">Username:</label>
      <p id="username">{{ username }}</p>
      <label for="name">Name:</label>
      <p id="name">{{ name }}</p>
      <label for="dept">Department:</label>
      <p id="dept">{{ dept }}</p>
      <label for="email">Email</label>
      <p id="email">{{ email }}</p>
      <label for="phone">Phone#:</label>
      <p id="phone">{{ phone }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Account Preferences',
      username: 'newUser123',
      name: 'Jane Smith',
      dept: 'Human Resources',
      email: 'work@email.com',
      phone: '(210) 555-6879 ext. 512'
    }
  }
}
</script>

<style lang="scss">
  #account {
    border: outset 3px white;
    background-color: rgb(222, 222, 226);
    width: 90%;
    margin: 30px 50px;
    text-align: left;
    
  }
  #account-form label, #account-form p{
    flex-flow: row wrap;
    display: flex;
  }
  #account label{
    font-weight: bold;
    text-decoration-line: underline;
  }
</style>