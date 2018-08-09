// Declaring dependencies
var express = require('express');
var bodyParser = require('body-parser');
// Declaring and connecting to database
var connection = require('../dbconnection.js'); 
// declaring app as an express to be used in http requests
var app = express();
// Parsing tools
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
//Create Post request, recieves in the req.body the (userID, parentId, content and imgUrl)
app.post('/create',urlencodedParser,function(req,res){
    let sql = `INSERT INTO posts(userID, parentID, contnet , imgUrl) VALUES ('${req.body.userId}','${req.body.parentId}','${req.body.txt}','${req.body.imgUrl}')`;
    let query = connection.query(sql, function(err,result){
        if(err){
            res.send(err);
        }
        else{
// Sends a result to tell the frontend that the post is successfuly created
            res.send(result);
        }
    });
});
  //Update Post request, recieves in the req.body the (content, imgUrl and the post ID)
app.post('/update',urlencodedParser,function(req,res){
    var sql = `UPDATE posts SET contnet='${req.body.txt}',imgUrl='${req.body.imgurl}' WHERE id = '${req.body.id}'`;
    let query = connection.query(sql, function(err,result){
        if(err){
            res.send(err);
        }
        else{
// Sends a result to tell the frontend that the post is successfuly updated
            res.send(result);
        }
    });
});
//Select Post by user request, recieves in the req.body the userId
app.post('/select',urlencodedParser,function(req,res){
    let sql = `SELECT * FROM posts WHERE userID = ${req.body.Uid}`;
    let query = connection.query(sql, function(err,result){
        if(err){
            res.send(err);
        }
        else{
// Sends a result contains the posts created by this user
            res.send(result);
        }
    });
});
//Delete Post request, recieves in the req.body the postId
app.post('/delete',urlencodedParser,function(req,res){
    let sql = `DELETE FROM posts WHERE id = ${req.body.id}`;
    let query = connection.query(sql, function(err,result){
        if(err){
            res.send(err);
        }
        else{
// Sends a result to tell the frontend that the post is successfuly deleted
            res.send(result);
        }
    });
});
// Select all posts request, don't recieve anything as it retrieves all the posts 
app.post('/select/all',urlencodedParser,function(req,res){
    let sql = `SELECT * FROM posts `;
    let query = connection.query(sql, function(err,result){
        if(err){
            res.send(err);
        }
        else{
// Sends a result contains all the posts in the database to be presented in the global posts
            res.send(result);
        }
    });
});
// Array of JSON Endpoint to retrieve all the posts in the database -- the only applicable data to have an endpoint.
app.get('/json/select',urlencodedParser,function(req,res){
  let sql = `SELECT * FROM posts `;
  let query = connection.query(sql, function(err,result){
      if(err){
          res.send(err);
      }
      else{
        res.send(result);
      }
  });
});
module.exports = app ;
