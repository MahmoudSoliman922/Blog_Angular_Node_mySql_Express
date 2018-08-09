// importing dependencies
var express = require('express');
var path = require("path");
// importing routers
var usersRouts = require('./controllers/usersRouts');
var postssRouts = require('./controllers/postsRouts');
// create variables that we will use later
var app = express();
// CORS
app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
// load the other files before the page loads 'css and javascript files'
app.use(express.static('../client/dist'));
// Handle any / request to the server and deliver the home page.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname , '../client/dist/index.html'));
});
// Direct any /user requests to the user router
app.use('/user', usersRouts);
// Direct any /post requests to the user router
app.use('/post', postssRouts);

app.listen('3000' ,function(err){
    console.log('Server Started!');
});