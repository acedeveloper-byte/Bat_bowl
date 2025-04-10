const mongoose = require("mongoose");

let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("✅ Reusing existing database connection");
    return;
  }

  try {
    const mongoURI = "mongodb+srv://nexsolvesolutions:34598345790237598714327534@cluster0.ecnexqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const db = await mongoose.connect(mongoURI); // 

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

module.exports = connectToDatabase;
