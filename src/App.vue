<template>
  <div id="app">
    <!-- Навигационное меню -->
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О проекте</router-link> |
      <router-link to="/albums">Альбомы</router-link>
    </nav>

    <!-- Отображение текущей страницы -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  margin-bottom: 30px;
}
nav a {
  margin: 0 10px;
  color: #42b983;
  text-decoration: none;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: #2c3e50;
}
body {
  background-color: #333; /* Темно-серый фон */
  margin: 0;
  padding: 0;
}
</style>
