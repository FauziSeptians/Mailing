const express = require("express");

const app = express();
const port = 5000;

app.listen(port, function () {
  console.log("listening on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).send({
    statusCode: 200,
    message: "API berhasil di akses",
    additionalData: [],
  });
});
