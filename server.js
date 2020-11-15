const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/navigatron'));

app.get('/*', function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/navigatron/index.html'));
})

app.listen(process.env.PORT || 8080);
