const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/homepage/home.html'));
});

app.get('/sub', function(req, res) {
    res.sendFile(path.join(__dirname + '/homepage/home.html'));
});

app.get('/ping', function(req, res) {
  res.sendStatus(200)
  console.log("Pinged!")
});

app.listen(port, () => console.log(`Site listening on port ${port}!`));