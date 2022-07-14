const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(process.env.DB, {});
  const connection = mongoose.connection;
  connection.once("open", () => console.log(`connectede to DB`));
  connection.on("error", () => console.log("error to connect to db"));
};
