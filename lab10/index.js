var express = require('express');
var app = express();

//Setting View Engine
app.set('view engine', 'pug');

//Setting public folder
app.use(express.static('public'));

//Default Route
app.get('/', function(req, res){
   res.render('index')
});
//Login Route
app.get('/index', function(req, res){
   res.render('index')
});
//Signup Route
app.get('/signup', function(req, res){
   res.render('signup')
});

//Listening to nodeJS Application
var port = process.env.PORT || 8080;
app.listen(port, function(){
   console.log("Listening to port 3000")
});