<template>
  <div class="albums-page">
    <h1>Каталог альбомов</h1>
    <div v-if="loading">Загрузка...</div>
    <div v-else>
      <div class="album" v-for="album in albums" :key="album.id">
        <h2>{{ "album.title" }}</h2>
        <p>{{ album.description }}</p>
        <div class="image-container">
          <img :src="album.cover" :alt="album.description" class="album-cover" />
          <a :href="album.file" target="_blank" class="wiki-link">
            Скачать
          </a>
        </div>
        <div class="like-section">
          <button @click="toggleLike(album.id)" class="like-button">
            ❤️ {{ album.likes }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AlbumsPage',
  data() {
    return {
      albums: [],
      loading: true
    };
  },
  methods: {
    toggleLike(albumId) {
      const album = this.albums.find((a) => a.id === albumId);
      if (album) {
        album.likes += album.likes ? -1 : 1;
      }
    }
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/api/albums');
      this.albums = response.data.map((album) => ({ ...album, likes: 0 }));
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.albums-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #333; /* Темно-серый фон страницы */
  color: white; /* Белый текст */
}

.album {
  background-color: #444; /* Серый фон поста */
  border: 1px solid #555; /* Граница поста */
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: white; /* Белый текст для заголовка */
}

p {
  font-size: 1rem;
  color: #ddd; /* Светло-серый текст для описания */
  margin-bottom: 15px;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}

.album-cover {
  max-width: 550px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.wiki-link {
  color: #42b983; /* Зеленый цвет для ссылки */
  text-decoration: none;
  font-weight: bold;
}

.wiki-link:hover {
  text-decoration: underline;
}

.like-section {
  display: flex;
  justify-content: flex-end;
}

.like-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ff6b6b; /* Красный цвет для сердечка */
  display: flex;
  align-items: center;
}

.like-button:hover {
  color: #ff4757; /* Более яркий красный при наведении */
}
</style>
