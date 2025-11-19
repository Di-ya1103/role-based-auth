const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');

// public
router.post('/login', login);

// protected route - any authenticated user
router.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: `Hello ${req.user.name}, welcome to the dashboard.`, yourRole: req.user.role });
});

// admin only
router.get('/admin', authenticateToken, authorize('admin'), (req, res) => {
  res.json({ message: `Hello ${req.user.name}, welcome to admin panel.` });
});

// manager or admin
router.get('/reports', authenticateToken, authorize('admin', 'manager'), (req, res) => {
  res.json({ message: `Reports visible to managers and admins.` });
});

module.exports = router;
