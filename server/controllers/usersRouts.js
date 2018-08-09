// Declaring dependencies
var express = require('express');
var bodyParser = require('body-parser');
// Declaring and connecting to database
var connection = require('../dbconnection.js'); 
// Declaring app as an express to be used in http requests
var app = express();
// Parsing tools
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
// Create user request, recieves (email , password and name)
app.post('/create/',urlencodedParser,function(req,res){
// First Check if there is another user with the same email or not 
    var sql = `SELECT * FROM users WHERE email = '${req.body.email}'`;
    var query = connection.query(sql, function(err, result){
        if(result == ''){
// If not then user will be created 
            let sql = `INSERT INTO users(name, email, passwd) VALUES ('${req.body.name}','${req.body.email}','${req.body.password}')`;
            let query = connection.query(sql, function(err,result){
            if(err){
                res.send(err);
            }
            else {
                res.send(result);
            }
            res.end();
            });
        }
        else{
// If the email exists then will send affectedRows:0 to notify the user that this email already exists
            res.send({affectedRows:0});
            res.end();
        } 
    });
  
});
// Update User request, recieves (email, password, userId and name)
app.post('/update',urlencodedParser,function(req,res){
// Update the users data with the recieved ones 
    var sql = `UPDATE users SET name='${req.body.name}',email='${req.body.email}',passwd='${req.body.password}' WHERE id = '${req.body.id}'`;
    var query = connection.query(sql, function(err,result){
        if(err){
            res.send(err);
        }
        else{
// Sending the result to the user containing affectedRows:1 to notify him/her that the data has been updated succesfully
            res.send(result);
        }
    });
});
// Select User request, recieves email and password
app.post('/select',urlencodedParser,function(req,res){
// Checks if the email and password exists
    var sql = `SELECT * FROM users WHERE email = '${req.body.email}' AND passwd = '${req.body.password}'`;
    var query = connection.query(sql, function(err, result ,fields){
        if(err){
            res.send(err);
        }
        else {
// Sending the user data to be used later in another crud functions
            res.send(result);
        }
        res.end();
    });
});
// Delete User request, recieves the userId 
app.post('/delete',urlencodedParser,function(req,res){
// Delete the user of this Id
    let sql = `DELETE FROM users WHERE id = ${req.body.id}`;
    let query = connection.query(sql, function(err,result){
        if(err){
            res.send(err);
        }
        else{
// Sending result contains affectedRows:1 to notify the user that the account has been deleted successfully
            res.send(result);
        }
    });
});
module.exports = app ;
