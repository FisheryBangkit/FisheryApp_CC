const mysql = require('mysql');

/* const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'capstone fix'
}); */

const createConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'capstone fix'
  });
};

const runQuery = (query, data = null) => {
  return new Promise((resolve, reject) => {
    const connection = createConnection();
    if (data === null) {
      connection.query(query, (error, results) => {
        connection.end();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    } else {
      connection.query(query, [data], (error, results) => {
        connection.end();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    }
  });
};

module.exports = { runQuery, createConnection };