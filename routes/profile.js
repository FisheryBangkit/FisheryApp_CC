const express = require('express');
const router = express.Router();
const db = require('../db');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const bucket = storage.bucket('nama_bucket_gcs');

// Route: GET /api/profile/biodata
router.get('/biodata', (req, res) => {

});

// Route: PUT /api/profile/update-avatar
router.put('/update-avatar', (req, res) => {

});

// Fungsi untuk mengunggah foto ke GCS
async function uploadPhotoToGCS(photoFile) {
  const gcsFileName = `nama_folder/${photoFile.originalname}`;
  const file = bucket.file(gcsFileName);

  await file.save(photoFile.buffer, {
    metadata: {
      contentType: photoFile.mimetype,
    },
  });

  return `https://storage.googleapis.com/${bucket.name}/${gcsFileName}`;
}

// Route: PUT /api/profile/update-name
router.put('/update-name', (req, res) => {

});


module.exports = router;