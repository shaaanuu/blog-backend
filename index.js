const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();



const app = express();

app.get("/", (req, res) => {
  res.json({
    test: "hello",
  });
});

app.listen(3000, () => console.log("Listening to port 3000"));
