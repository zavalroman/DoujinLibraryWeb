<template>
  <div>
    <h2>Список альбомов</h2>
    <ul>
      <li v-for="album in albums" :key="album.id">{{ album.title }} - {{ album.artist }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albums: [
        { id: 1, title: 'Thriller', artist: 'Michael Jackson' },
        { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd' },
        { id: 3, title: 'Back in Black', artist: 'AC/DC' }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
</style>
