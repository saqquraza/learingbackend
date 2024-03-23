require("dotenv").config();
const express = require("express");
const app = express();
// const port = 4000;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter aman");
});

app.get("/login", (req, res) => {
  res.send("<h2>Please log in </h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
