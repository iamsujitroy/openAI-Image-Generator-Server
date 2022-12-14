const express = require("express");
const { generateImage } = require("../Controllers/openaiControllers");
const router = express.Router();

router.post("/generateImage", generateImage);
module.exports = router;
