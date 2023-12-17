const express = require('express');
const database = require("../db");
const router = express.Router();
const imgUpload = require('../utils/gcp')
const multer = require('multer')

const {
  //newPost,
  allPost,
  getPostById,
  newComment,
  getComment,
} = require("../controllers/marketplace")

//router.post("/addPost", newPost);

router.get("/allPosts", allPost);
router.get("/posts/:idPost", getPostById);

const storageMulter = multer.memoryStorage();
const uploadMulter = multer({ storage: storageMulter });

router.post("/addPost", uploadMulter.single('photo'), imgUpload.uploadToGcs, async (req, res) => {
  const username = req.body.username
  const userProfilePhoto = req.body.userProfilePhoto
  const date = new Date().toISOString().split("T")[0]
  const description = req.body.description
  const title = req.body.title
  const location = req.body.location
  const phoneNumber = req.body.phoneNumber
  const price = req.body.price
  var imageUrl = ''

  if (req.file && req.file.cloudStoragePublicUrl) {
      imageUrl = req.file.cloudStoragePublicUrl
  }

  const query = `INSERT INTO posts (username, userProfilePhoto, photo, title, date, location, phoneNumber, price, description) VALUES ("${username}","${userProfilePhoto}", "${imageUrl}", "${title}", "${date}", "${location}", "${phoneNumber}", "${price}", "${description}")`
  try {
    const results = await database.runQuery(query);
    // console.log(results);
    return res.status(201).send({
      status: true,
      statusCode: 201,
      message: "success add New POST",
    });
  } catch (error) {
    // console.error(error);
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.message,
    });
  }
})

// Route: GET /marketplace/search
/* router.get('/search', (req, res) => {
  const { username, title, price, description } = req.query;

  // Query untuk mencari data berdasarkan kriteria
  const query = `
    SELECT *
    FROM posts
    WHERE
      username LIKE ? AND
      title LIKE ? AND
      price = ? AND
      description LIKE ?
  `;

  // Menyesuaikan parameter query dengan nilai yang sesuai
  const params = [
    `%${username || ''}%`,
    `%${title || ''}%`,
    price || '',
    `%${description || ''}%`,
  ];

  // Eksekusi query
  database.runQuery(query, params, (err, rows, fields) => {
    if (err) {
      res.status(500).send({ message: err.sqlMessage });
    } else {
      res.send(rows);
    }
  });
}); */

router.post("/uploadImage", uploadMulter.single('image'), imgUpload.uploadToGcs, (req, res, next) => {
  const data = req.body
  if (req.file && req.file.cloudStoragePublicUrl) {
      data.imageUrl = req.file.cloudStoragePublicUrl
  }

  res.send(data)
})

router.post("/:idPost/addComment", newComment);
router.get("/:idPost/getComment", getComment);


module.exports = router;