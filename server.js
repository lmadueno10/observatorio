var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Bienvenido Luis Madueño');
});

module.exports = app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});
