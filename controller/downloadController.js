const File = require("../models/fileModel");

const download = async (req, res) => {
  const file = await File.findOne({ uuid: req.params.uuid });
  const respone = `${__dirname}/../${file.path}`;
  console.log(file.filename);
  changeName = "salom";
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="MyFile_XYZT.doc"'
  );
  res.download(respone);
};

module.exports = { download };
