const express = require("express");
const app = express();

app.use(express.static("content"));

app.listen(3000, function (){ console.log("server is running!");});
