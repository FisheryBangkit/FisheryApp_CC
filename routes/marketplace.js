const express = require('express');
const router = express.Router();
const db = require('../db');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const bucket = storage.bucket('nama_bucket_gcs');

  // database postingan di marketplace (dari database)
  let marketplacePosts = [
    { 
      id: 1,
      username: 'john_doe',
      userProfilePhoto: 'https://example.com/profile.jpg',
      date: new Date(),
      title: 'Ikan Nila Segar',
      description: 'Ikan nila segar langsung dari petani.',
      location: 'Jakarta',
      phoneNumber: '081234567890',
      price: 10,
      photo: 'https://example.com/fish.jpg'
    },
    // Data lainnya
  ];

  // Database komentar untuk setiap postingan (dari database)
  let comments = {
    1: [ // Komentar untuk postingan dengan ID 1
      { id: 1, username: 'user1', comment: 'Komentar pertama.' },
      { id: 2, username: 'user2', comment: 'Komentar kedua.' },
    ],
  // Data komentar untuk postingan lainnya
  };

// Route: GET /api/marketplace/search
router.get('/search', (req, res) => {
  const { query } = req.query;
  
  // Pencarian di data marketplacePosts berdasarkan query
  const searchResults = marketplacePosts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.description.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(searchResults);
});
  
  // Route: POST /api/marketplace/add-post
  router.post('/add-post', (req, res) => {
    const { username, userProfilePhoto, title, description, location, phoneNumber, price, photo } = req.body;
  
    // Simpan postingan baru ke database
    const newPost = {
      id: marketplacePosts.length + 1, //penambahan ID postingan
      username,
      userProfilePhoto,
      date: new Date(),
      title,
      description,
      location,
      phoneNumber,
      price,
      photo
    };
  
    marketplacePosts.push(newPost); // Simpan postingan ke database
  
    res.status(201).json(newPost);
  });
  
  // Route: GET /api/marketplace/posts
  router.get('/posts', (req, res) => {
  
    res.status(200).json(marketplacePosts);
  });
  
  // Route: POST /api/marketplace/posts/:post_id/add-comment
  router.post('/posts/:post_id/add-comment', (req, res) => {
    const postId = req.params.post_id;
    const { username, comment } = req.body;
  
    // Membuat komentar baru
    const newComment = {
      id: comments[postId].length + 1,
      username,
      comment,
    };
  
    // Menambahkan komentar baru
    if (!comments[postId]) {
      comments[postId] = [];
    }
    comments[postId].push(newComment);
  
    res.status(201).json(newComment);
  });

//*****/



// Di endpoint POST untuk menambahkan postingan
router.post('/api/marketplace/add-post', async (req, res) => {
  try {
    // Upload foto ke GCS
    const photoURL = await uploadPhotoToGCS(req.file);

    // Simpan URL foto ke SQL
    const query = 'INSERT INTO posts (photo_url, ...other_columns) VALUES (?, ...)';
    await db.query(query, [photoURL, ...other_values]);
    res.status(200).json({ message: 'Foto berhasil diunggah dan disimpan.' });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat mengunggah foto atau menyimpan URL.' });
  }
});
  

module.exports = router;