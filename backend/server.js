const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

// Подключение к базе данных SQLite
const db = new sqlite3.Database('/home/kaktus/.local/share/DoujinWall/doujin-database.sqlite3');

// Middleware для обработки JSON и CORS
app.use(express.json());
app.use(cors());

// Маршрут для получения данных об альбомах
app.get('/api/albums', (req, res) => {
  const query = `
    SELECT 
      post.id AS post_id,
      post.text AS description,
      image.url AS cover,
      file.url AS file
    FROM 
      post
    LEFT JOIN 
      image ON post.id = image.post_id
    LEFT JOIN 
      file ON post.id = file.post_id
    WHERE
      post.date > 1658057681
    ORDER BY post.date DESC
    LIMIT 100;
  `;

  db.all(query, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
