const express = require("express");
const recapController = require("../controllers/recapControllers");
const router = express.Router();

router.get("/", recapController.recapStory);

module.exports = router;
