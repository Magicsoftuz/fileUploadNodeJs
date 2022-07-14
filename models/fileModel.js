const mongoose = require("mongoose");

const schema = mongoose.Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true },
  uuid: { type: String, required: true },
  sender: { type: String, required: false },
  reciever: { type: String, required: false },
});

module.exports = mongoose.model("files", schema);
