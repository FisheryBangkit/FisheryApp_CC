const {Storage} = require('@google-cloud/storage')
const fs = require('fs')
const path = require('path');
const uuid = require('uuid');

const pathKey = path.resolve('./serviceaccountkey.json')

// TODO: Sesuaikan konfigurasi Storage
const gcs = new Storage({
    projectId: 'ch2-ps246',
    keyFilename: pathKey
})

// TODO: Tambahkan nama bucket yang digunakan
const bucketName = 'gambar-input-scan'
const bucketName2 = 'gambar-postingan'
const bucket = gcs.bucket(bucketName)
const bucket2 = gcs.bucket(bucketName2)

function getPublicUrl(filename) {
    return 'https://storage.googleapis.com/' + bucketName + '/' + filename;
}

function getPublicUrlPost(filename) {
    return 'https://storage.googleapis.com/' + bucketName2 + '/' + filename;
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

ImgUpload.uploadToGcsPost = (req, res, next) => {
    if (!req.file) return next();

    // Generate a unique filename using uuid
    const uniqueFilename = uuid.v4();
    const gcsname2 = `${uniqueFilename}-${Date.now()}`;
    const file = bucket2.file(gcsname2)

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
        req.file.cloudStorageObject = gcsname2
        req.file.cloudStoragePublicUrl = getPublicUrlPost(gcsname2)
        next()
    })

    stream.end(req.file.buffer)
}

module.exports = ImgUpload
