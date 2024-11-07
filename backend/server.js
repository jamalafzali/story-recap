const express = require('express');
const cors = require('cors');
const recapRoutes = require('./routes/recapRoutes')

const app = express();
const PORT = process.env.PORT || 5000; // The port the application will be hosted on

app.use(cors()); // Enable CORS to allow requests from frontend
app.use(express.json()); // Parse JSON bodies

require('dotenv').config();

// APIS

app.get('/api', (req, res) => {
    res.json({ message: "Hello from the backend!" })
});

app.use('/recapStory', recapRoutes)

module.exports = app;

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`)
})