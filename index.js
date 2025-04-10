// index.js
const express = require('express');
const router = require('./router/resultRoutes');
const app = express();
const connectToDatabase = require('./config/dbconnect');
connectToDatabase();
// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(router)




// Example Route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start Server
module.exports = app