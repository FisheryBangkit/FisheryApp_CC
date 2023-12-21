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

router.post("/addPost", uploadMulter.single('photo'), imgUpload.uploadToGcsPost, async (req, res) => {
  const username = req.body.username
  const userProfilePhoto = req.body.userProfilePhoto
  const date = new Date().toISOString()
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

router.get('/search', (req, res) => {
  try {
    const { title } = req.query;

    // Adjusting query parameters accordingly
    const params = [`%${title || ''}%`];

    // Query to search for data based on criteria
    const query = `SELECT * FROM posts WHERE title LIKE ?`;

    // Execute query
    database.runQuery(query, params)
      .then(rows => {
        res.send(rows);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
      });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

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
