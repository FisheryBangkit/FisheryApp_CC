const express = require('express');
const router = express.Router();

// Routes for Onboarding
router.post('/register', (req, res) => {
  // Handle registration logic
});

router.post('/login', (req, res) => {
  // Handle login logic
});

router.post('/google-login', (req, res) => {
  // Handle login with Google logic
});

router.post('/forgot-password', (req, res) => {
  // Handle forgot password logic
});

module.exports = router;