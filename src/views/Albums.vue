<template>
  <div class="albums-page">
    <h1>Каталог альбомов</h1>
    <div v-if="loading">Загрузка...</div>
    <div v-else>
      <div class="album" v-for="album in albums" :key="album.id">
        <h2>
          <a :href="`https://vk.com/wall-60027733_${album.post_id}`" target="_blank" class="album-title-link">{{ album.title }}</a>
        </h2>
        <p>{{ album.description }}</p>
        <div class="image-container">
          <img :src="album.cover" :alt="album.description" class="album-cover" />
          <div class="files-container">
            <a
              v-for="(file, index) in album.files"
              :key="index"
              :href="file.url"
              target="_blank"
              class="file-link"
            >
              {{ file.title || `Скачать файл ${index + 1}` }}
            </a>
          </div>
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
    },
    parseAlbumTitle(text) {
      const regex = /\[.*?\]\s+(?:#\S+\s+)+(.*)/;
      let match = text.match(regex);

      if (match) {
        return match[1].trim();
      } else {
        // Если не удалось распарсить, возвращаем первые 100 символов
        return text.slice(0, 100) + (text.length > 100 ? "..." : "");
      }
    }
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/api/albums');
      this.albums = response.data.map((album) => ({
        ...album,
        likes: 0,
        title: this.parseAlbumTitle(album.description) // Парсим заголовок
      }));
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

.files-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.file-link {
  color: #42b983; /* Зеленый цвет для ссылки */
  text-decoration: none;
  font-weight: bold;
  margin: 5px 0; /* Отступ между ссылками */
}

.file-link:hover {
  text-decoration: underline;
}


.album-title-link {
  color: #42b983; /* Оранжевый цвет, замените на тот, который вам нужен */
  text-decoration: none; /* Убираем подчёркивание */
}

.album-title-link:hover {
  text-decoration: underline; /* Добавляем подчёркивание при наведении */
}

</style>
