const database = require("../db");
const imgUpload = require('../utils/gcp')

/*const newPost = async (req, res) => {
    const { username, userProfilePhoto, title, description, location, phoneNumber, price, photo } = req.body;
    
    const date = new Date().toISOString().split("T")[0];
  
    const data = {
        username, 
        userProfilePhoto, 
        date, 
        title, 
        description, 
        location, 
        phoneNumber, 
        price, 
        photo
    };
    
     var imageUrl = ''

    if (req.file && req.file.cloudStoragePublicUrl) {
        imageUrl = req.file.cloudStoragePublicUrl
    } 
    
    const sql = `INSERT INTO posts (username, userProfilePhoto, date, title, description, location, phoneNumber, price, photo) VALUES ("${username}","${userProfilePhoto}", "${date}", "${title}", "${description}", "${location}", "${phoneNumber}", "${price}", "${photo}")`;
    try {
      const results = await database.runQuery(sql);
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
  }; */

  const newComment = async (req, res) => {
    const idPost = req.params.idPost;
    const { username, comment, photoProfile } = req.body;
    
  
    const data = {
        username, 
        comment,
        photoProfile
    };
  
    const sqlInsert = `INSERT INTO comments (username, comment, id_post, photoProfile) VALUES ("${username}", "${comment}", "${idPost}", "${photoProfile}")`;
    try {
      const insert = await database.runQuery(sqlInsert);
      
      // console.log(results);
      return res.status(201).send({
        status: true,
        statusCode: 201,
        message: "success add New Comment on Post",
      });
    } catch (error) {
      // console.error(error);
      return res.status(422).send({
        status: false,
        statusCode: 422,
        message: error.message,
      });
    }
  };

  const allPost = async (req, res) => {
    const sql = `SELECT * FROM posts`
    try {
        const results = await database.runQuery(sql);
        return res.json({results});
    } catch (error) {
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error.message,
          });
    }
  }

  const getPostById = async (req, res) => {
    const idPost = req.params.idPost;
    const sql = `SELECT * FROM posts WHERE id = '${idPost}'`;
    try {
      const results = await database.runQuery(sql);
      // console.log(results);
      if (results.length === 0) {
        return res.status(404).send({
          status: false,
          statusCode: 404,
          message: "POST Not Found",
        });
      } else {
        return res.status(200).send({
          status: true,
          statusCode: 200,
          message: "Success GET data post",
          data: results[0],
        });
      }
    } catch (error) {
      // console.error(error);
      return res.status(422).send({
        status: false,
        statusCode: 422,
        message: error.message,
      });
    }
  }

  const getComment = async (req, res) => {
    const idPost = req.params.idPost;
    const sql = `SELECT * FROM comments WHERE id_post = '${idPost}'`;
    try {
      let results = await database.runQuery(sql);
      // console.log(results);
      if (results.length === 0) {
        return res.status(404).send({
          status: false,
          statusCode: 404,
          message: "COMMENT Not Found",
        });
      } else {
        return res.status(200).send({
          status: true,
          statusCode: 200,
          message: "Success GET data comment on post",
          data: []=results,
        });
      }
    } catch (error) {
      // console.error(error);
      return res.status(422).send({
        status: false,
        statusCode: 422,
        message: error.message,
      });
    }
  }

  module.exports = {
    //newPost,
    allPost,
    getPostById,
    newComment,
    getComment
};