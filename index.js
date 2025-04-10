// index.js
const express = require('express');
const router = require('./router/resultRoutes');
const app = express();
const connectToDatabase = require('./config/dbconnect');
module.exports = async (req, res) => {
  try {
    await connectToDatabase(); // only connects once per instance

    // Respond quickly
    res.status(200).json({ message: "Connected to DB and serverless is working!" });
  } catch (error) {
    console.error("Error connecting to DB:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
};
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