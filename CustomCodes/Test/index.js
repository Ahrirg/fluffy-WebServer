const express = require("express");
const app = express();


const Port = 8080;

app.get('/', (req, res) => {
  res.send('gay veik');
})

app.listen(Port, function() {
  console.log("Running on port " + Port + ".");
});