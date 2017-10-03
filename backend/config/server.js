const port = 3004

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

//server.use(bodyParser.urlencoded({ extended: true }))
//server.use(bodyParser.json())
//server.use(allowCors)
server.use(queryParser())

server.listen(3000, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

//var app = express();

//server.get('/', function(req, res){
//  res.send('hello world');
//});

//server.listen(3004);

module.exports = server