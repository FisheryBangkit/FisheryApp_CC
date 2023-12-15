const {Storage} = require('@google-cloud/storage')
const fs = require('fs')
const path = require('path');
const uuid = require('uuid');

const pathKey = path.resolve('./serviceaccountkey.json')

// TODO: Sesuaikan konfigurasi Storage
const gcs = new Storage({
    projectId: 'submission-mgce-ibnurizal',
    keyFilename: pathKey
})

// TODO: Tambahkan nama bucket yang digunakan
const bucketName = 'money-tracker-ibnu'
const bucket = gcs.bucket(bucketName)

function getPublicUrl(filename) {
    return 'https://storage.googleapis.com/' + bucketName + '/' + filename;
}

let ImgUpload = {}

ImgUpload.uploadToGcs = (req, res, next) => {
    if (!req.file) return next();

    // Generate a unique filename using uuid
    const uniqueFilename = uuid.v4();
    const gcsname = `${uniqueFilename}-${Date.now()}`;
    const file = bucket.file(gcsname)

    const stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        }
    })

    stream.on('error', (err) => {
        req.file.cloudStorageError = err
        next(err)
    })

    stream.on('finish', () => {
        req.file.cloudStorageObject = gcsname
        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
        next()
    })

    stream.end(req.file.buffer)
}

module.exports = ImgUpload
