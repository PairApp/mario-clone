const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname)));
app.use('/asset/styles', express.static(__dirname + './asset/styles'))
app.use('/asset/images', express.static(__dirname + './asset/images'))
app.use('/asset/sounds', express.static(__dirname + './asset/sounds'))
app.use('/lib', express.static(__dirname + '/lib'));

app.get('/',  function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(8080, function() {
  console.log('listening on *:8080');
});
