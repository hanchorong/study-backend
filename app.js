const express = require("express");
const app = express();
app.set("view engine", "ejs");

const port = 8000;
app.listen(port, () => {
  console.log("server open", port);
});

// main
app.get("/", (req, res) => {
  res.render("study");
});
//이동
app.get("/study2", (req, res) => {
  res.render("study2");
});
app.get("/study3", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});
// 이미지
app.use("/static", express.static("static"));
