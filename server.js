const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.post("/testapp", (req, res) => {
  var data = req.body;
  res.send(data);
  res.end();
});

app.listen(port);
console.log(`APP running on port: ${port}`);
