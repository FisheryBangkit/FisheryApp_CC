const express = require('express');
const router = express.Router();

const imgUpload = require('../utils/gcp')
const multer = require('multer')

const {
  newPost,
  allPost,
  getPostById,
  newComment,
  getComment,
} = require("../controllers/marketplace")

router.post("/addPost", newPost);
router.get("/allPosts", allPost);
router.get("/posts/:idPost", getPostById);

const storageMulter = multer.memoryStorage();
const uploadMulter = multer({ storage: storageMulter });

router.post("/uploadImage", uploadMulter.single('image'), imgUpload.uploadToGcs, (req, res, next) => {
  const data = req.body
  if (req.file && req.file.cloudStoragePublicUrl) {
      data.imageUrl = req.file.cloudStoragePublicUrl
  }

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

  // Route: GET /api/marketplace/:id
  router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = marketplacePosts.find(post => post.id === postId);
  
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
  
    res.status(200).json(post);
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

  // Route: GET /api/marketplace/post/comment/:postid
  router.get('/post/comment/:postid', (req, res) => {
    const postId = req.params.postid;
  
    // Memeriksa apakah ada komentar untuk postingan dengan ID tertentu
    if (!comments[postId]) {
      return res.status(404).json({ error: 'Tidak ada komentar untuk postingan ini' });
    }
    const postComments = comments[postId];
    res.status(200).json(postComments);
    });


  res.send(data)
})

router.post("/:idPost/addComment", newComment);
router.get("/:idPost/getComment", getComment);


module.exports = router;
