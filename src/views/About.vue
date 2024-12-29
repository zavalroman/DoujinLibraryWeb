<template>
  <div class="about">
    <h1>О проекте</h1>
    <p>Этот сайт создан для любителей музыки, чтобы они могли легко находить и изучать лучшие музыкальные альбомы.</p>
    <p>Мы стремимся предоставить удобный и информативный каталог для всех меломанов.</p>
    <router-link to="/" class="btn">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
};
</script>

<style scoped>
.about {
  text-align: center;
  padding: 50px;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 10px;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.btn:hover {
  background-color: #3aa876;
}
</style>
