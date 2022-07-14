const express = require("express");
const router = express.Router();
const fileController = require("../controller/fileController");

router.post("/", fileController.fileUpload);

module.exports = router;
