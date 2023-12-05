const db = require('../db');

// Model untuk data pengguna
class User {
  constructor(username, email, profilePicture) {
    this.username = username;
    this.email = email;
    this.profilePicture = profilePicture;
  }

  static findByUsername(username) {
    return db.query('SELECT * FROM users WHERE username = ?', [username]);
  }

  static findByEmail(email) {
    return db.query('SELECT * FROM users WHERE email = ?', [email]);
  }

  static create(username, email, profilePicture) {
    return db.query('INSERT INTO users (username, email, profile_picture) VALUES (?, ?, ?)', [username, email, profilePicture]);
  }

  // Method lainnya sesuai kebutuhan
}

module.exports = User;
