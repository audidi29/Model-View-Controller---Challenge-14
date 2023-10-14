const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const homeRoutes = require('./routes/home'); // Import your routes
app.use('/', homeRoutes); // Mount routes at the root URL

const PORT = process.env.PORT || 3000; // Use the specified port or default to 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

