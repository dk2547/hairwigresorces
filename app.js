var express = require('express')
let path = require('path')
const router = express.Router();
var app = express()


router.get('/', function (req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.use('/', router);
const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${port}!`))