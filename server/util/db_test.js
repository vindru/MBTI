const mysql = require('mysql2');
const pool = mysql.createPool(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mbti_test'
  }
);

module.exports = pool.promise();