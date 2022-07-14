require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const db = require("./config/db");

db();

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
