<template>
  <div id="account">
    <form id="account-form">
      <h3>{{ title }}</h3>
      <section class="user-info">
        <label for="username">Username: </label>
        <p id="username" >{{ username }}</p>
      </section>
      <section class="user-info">
        <label for="name">Name: </label>
        <p id="name">{{ name }}</p>
      </section>
      <section class="user-info">
        <label for="dept">Department: </label>
        <p id="dept">{{ dept }}</p>
      </section>
      <section class="user-info">
        <label for="email">Email: </label>
        <p id="email">{{ email }}</p>
      </section>
      <section class="user-info">
        <label for="phone">Phone#: </label>
        <p id="phone">{{ phone }}</p>
      </section>
      <section class="user-info">
        <router-link to="/profile"><button type="button" class="account-btn" value="Modify">Modify</button></router-link>
        <button type="button" class="account-btn" value="delete">Delete Account</button>
      </section>
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
  .account-btn {
    margin-right: 15px;
  }
  .user-info{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .user-info p {
    margin: 0 8px;
    padding-bottom: 3px;
  }
  #account label{
    font-weight: bold;
    text-decoration-line: underline;
  }
</style>