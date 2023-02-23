const express = require('express')
const app = express()

const rout = require('./rout')

app.use('/rout',rout )

app.listen(3000,(req,res)=>{
    console.log("connected")
})