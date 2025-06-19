import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
console.log("🛣️ userRoutes.js loaded");

const router = express.Router();

router.post("/login", async (req, res) => {
console.log("➡️  Login route hit!");
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, "secretkey", { expiresIn: "2h" });
  res.json({ message: "🗝️ Login successful", token });
});

export default router;
