const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
var favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'favicon', 'favicon.ico')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/page/home.html'));
});  

app.get('/commands', function(req, res) {
    res.sendFile(path.join(__dirname +'/page/commands.html'));
});

app.get('/ping', function(req, res) {
  res.sendStatus(200)
  console.log("Pinged!")
});

app.listen(port, () => console.log(`Site listening on port ${port}!`));