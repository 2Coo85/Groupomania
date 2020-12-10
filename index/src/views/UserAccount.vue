<template>
  <div class="about">
    <h1>{{ title }}</h1>
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