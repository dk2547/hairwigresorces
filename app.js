var express = require('express')
let path = require('path')
const router = express.Router();
var app = express()

router.get('/', function (req, res) {
    //  res.sendFile(path.join(__dirname + '/index.html'));
    res.send('hello world')
})
app.use('/', router);
app.listen(process.env.PORT)