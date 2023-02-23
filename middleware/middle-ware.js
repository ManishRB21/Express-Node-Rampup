var express = require('express');
var app = express();

const check= ((req, res, next)=>{
   console.log("current url is "+req.originalUrl);
   next();
});

app.use(check)

app.get('/', function(req, res){
   res.send("home");
});

app.get('/about', function(req, res,){
    res.send("about");
 });
 app.get('/contact', function(req, res){
    res.send("contact");
 });

app.listen(3000);