const File = require("../models/fileModel");

const download = async (req, res) => {
  const file = await File.findOne({ uuid: req.params.uuid });
  const respone = `${__dirname}/../${file.path}`;
  res.download(respone);
};

module.exports = { download };
