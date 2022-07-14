const router = require("express").Router();
const showController = require("../controller/showController");

router.get("/:uuid", showController.showController);

module.exports = router;
