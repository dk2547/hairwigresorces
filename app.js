var express = require('express')
var app = express()
process.env.PORT
app.get('/', function (req, res) {
    res.send('hello world')
})
let port = process.env.PORT || 3000;
app.listen(port)