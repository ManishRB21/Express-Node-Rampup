const http = require('http')
http.createServer(function (req, res) {

    var url = req.url;
      
    if(req.url ==='/about') {
        res.write(' Welcome to about us page'); 
        res.end(); 
    }
    else if(req.url ==='/contact') {
        res.write(' Welcome to contact us page'); 
        res.end(); 
    }
    else {
        res.write('Hello World!'); 
        res.end(); 
    }
}).listen(3000, function() {
    console.log("server start at port 3000");
});