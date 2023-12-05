const db = require('../db');

// Model untuk data postingan
class Post {
  constructor(userId, title, description, photoURL) {
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.photoURL = photoURL;
  }

  static getAll() {
    return db.query('SELECT * FROM posts');
  }

  static getById(postId) {
    return db.query('SELECT * FROM posts WHERE id = ?', [postId]);
  }

  static create(userId, title, description, photoURL) {
    return db.query('INSERT INTO posts (user_id, title, description, photo_url) VALUES (?, ?, ?, ?)', [userId, title, description, photoURL]);
  }


}

module.exports = Post;
