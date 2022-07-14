const router = require("express").Router();
const downloadController = require("../controller/downloadController");

router.get("/:uuid", downloadController.download);

module.exports = router;
