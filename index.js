const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("content"));

app.listen(port, function (){ console.log("server is running!");});
