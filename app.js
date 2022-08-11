const express = require("express");
const app = express();

const port = 8000;
// 8000 or 3000 or 8080

app.get("/", (req, res) => {
  // res.send("hello");

  // 파일 자체를 가져오는 방법 : 아래처럼 절대경로도 넣어주어야함(__dirname)
  res.sendFile(__dirname + "/test.html");
});

app.listen(port, () => {
  console.log("server open", port);
});
