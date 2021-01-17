<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/settings">My Account</router-link> |
    <router-link to="/management">Management</router-link> |
    <router-link to="/hr">Human Resources</router-link> |
    <router-link to="/retailops">Retail Operations</router-link> |
    <router-link to="/salesMarketing">Sales and Marketing</router-link> 
  </div>
  <router-view/>
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
