import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

// Load environment variables from .env
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use routes
app.use("/api/users", userRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("🧙‍♂️ Welcome to Wizard Realms API");
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
