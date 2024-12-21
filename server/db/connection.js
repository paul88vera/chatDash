const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  // SQL username,
  user: process.env.VITE_SQL_USER,
  // SQL password
  password: process.env.VITE_SQL_PASSWD,
  // SQL DB Name
  database: process.env.VITE_SQL_DB,
});

module.exports = db;
