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
app.use('/home', homeRoutes);
//app.use('/api/marketplace', marketplaceRoutes);

app.use("/marketplace", marketplaceRoutes);
app.use("/comment", marketplaceRoutes);
app.use("/home/scan", marketplaceRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
