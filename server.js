require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const db = require("./config/db");
const fileRouter = require("./routes/fileRouter");

db();

app.use("/api/files", fileRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
