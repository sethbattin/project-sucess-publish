const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cowsay = require("cowsay");

app.use(express.static("content"));
app.get("/cowsay", function(req, res){
  const said = cowsay.say({text: "tell me what to say", ...req.query});
  res.send(`<html><body><pre>${said}</pre></body></html>`);
});

app.listen(port, function (){ console.log("server is running!");});
