// index.js
const express = require('express');
const router = require('./router/resultRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
require("./config/dbconnect.js")
// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(router)




// Example Route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
