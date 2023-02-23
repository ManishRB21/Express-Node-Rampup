const express = require("express");
const app = express();
const port = 3000;


let count = 0; 
app.get("/", async (req, res) => {
  console.log("User is on home page");
  count++; 
  console.log("User visit count", count); 
  res.send("Hello World!");
});

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`);
});


//to run debugger use cmd npx nodemon --inspect debug.js