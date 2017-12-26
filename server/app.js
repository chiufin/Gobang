var express = require('express');
var bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/api/login', function (req, res) {
    //http://localhost:5000/api/signIn?hello=stacy
    //body -> raw

    console.log('---------------------- /api/login')
    // console.log(req.param('hello'));
    console.log(req.body);
    console.log(req.body.account)
    res.json({
        userName: req.body.account,
        role: 'ADMIN',
        hello: 'world'
    })
  });


app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});