// routes/userRoutes.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// POST /api/users/register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({
    username,
    email,
    password,
    gold: 1000,
    mana: 500,
    base: { buildings: [], defenses: [] },
    army: { wizards: 0, golems: 0 },
  });

  await user.save();

  res.json({ message: "🧙 User created!", user });
});

// ✅ Add this route for login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "❌ Invalid credentials" });
  }

  res.json({ message: "✅ Login successful", user });
});

export default router;
