const express = require('express');
const app = express();


// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Routes
const onboardingRoutes = require('./routes/onboarding');
const profileRoutes = require('./routes/profile');
const homeRoutes = require('./routes/home');
const marketplaceRoutes = require('./routes/marketplace');

app.use('/api/onboarding', onboardingRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/marketplace', marketplaceRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
