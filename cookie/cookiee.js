var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.cookie('name', 'express').send('cookie set'); 
});

app.get('/clear_cookie_foo', function(req, res){
    res.clearCookie('foo');
    res.send('cookie foo cleared');
 });

app.listen(3000);