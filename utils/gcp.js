const { Storage } = require('@google-cloud/storage');

// Konfigurasi kredensial
const storage = new Storage({
  keyFilename: '/path/to/your/credential-file.json', // Ubah ini sesuai dengan lokasi dan nama file kredensial Anda
  projectId: 'your-project-id', // Ganti dengan ID proyek GCP
});

// Dapatkan referensi bucket
const bucket = storage.bucket('your-bucket-name'); // Ganti dengan nama bucket GCS

module.exports = bucket;
