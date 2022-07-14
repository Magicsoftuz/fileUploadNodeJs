const File = require("../models/fileModel");

const showController = async (req, res) => {
  const file = await File.findOne({ uuid: req.params.uuid });
  res.render("downloads", { file });
};

module.exports = { showController };
