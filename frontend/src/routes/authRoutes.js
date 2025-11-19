const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const users = require("../data/users");

const JWT_SECRET = "mysecret123";

// LOGIN ROUTE
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login successful", token, role: user.role });
});

// USER ROUTE
router.get("/user-dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to user dashboard", user: req.user });
});

// ADMIN ROUTE
router.get("/admin-panel", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.json({ message: "Welcome to admin panel", user: req.user });
});

// ADMIN + MANAGER ROUTE
router.get("/reports", authMiddleware, roleMiddleware("admin", "manager"), (req, res) => {
  res.json({ message: "Reports access granted", user: req.user });
});

module.exports = router;
