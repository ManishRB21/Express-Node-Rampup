const express = require("express");
const app = express();
const port = 3000;

let count=0;
let array = [];

app.get('/', async(req,res)=>{
    console.log("user is on homepage");
    count++;
    array.push(count);
    debugger;
    console.log("user visit",count);
    res.send("hello world");
})

app.listen(port, () => { //run the server
  console.log(`Example app listening on port ${port}`);
});



