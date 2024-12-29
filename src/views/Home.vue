<template>
  <div class="home">
    <h1>Добро пожаловать в каталог музыкальных альбомов!</h1>
    <p>Здесь вы найдете подборку лучших альбомов всех времен.</p>
    <router-link to="/albums" class="btn">Перейти к альбомам</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.home {
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
