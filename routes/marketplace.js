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

  res.send(data)
})

router.post("/:idPost/addComment", newComment);
router.get("/:idPost/getComment", getComment);


module.exports = router;