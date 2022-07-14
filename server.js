require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const db = require("./config/db");
const fileRouter = require("./routes/fileRouter");
const showRouter = require("./routes/showRouter");
const downloadRouter = require("./routes/downloadRouter");

db();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/api/files", fileRouter);
app.use("/files", showRouter);
app.use("/download", downloadRouter);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
