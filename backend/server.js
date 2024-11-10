const express = require("express");
const cors = require("cors");
const recapRoutes = require("./routes/recapRoutes");

const app = express();
const PORT = process.env.PORT || 5000; // The port the application will be hosted on

app.use(cors());
app.use(express.json());

require("dotenv").config();

// APIS
app.use("/recapStory", recapRoutes);

module.exports = app;

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
