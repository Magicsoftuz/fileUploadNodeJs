const File = require("../models/fileModel");

const showController = async (req, res) => {
  const file = await File.findOne({ uuid: req.params.uuid });
  const downloadUrl = `${process.env.APP_URL}/download/${file.uuid}`;
  res.render("downloads", { downloadUrl });
};

module.exports = { showController };
