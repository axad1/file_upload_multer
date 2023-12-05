const express = require("express");
const multer = require("multer");
const fs = require("fs");

const upload = multer({
  dest: "uploads/",
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", upload.single("file"), (req, res) => {
  console.log("file", req.file);
  console.log("body", req.body);
  res.send("<h1>Success</h1>");
  fs.renameSync(req.file.path, req.file.destination + req.file.originalname);
});

app.listen(3000, () => {
  console.log("Server is listening at 3000");
});
