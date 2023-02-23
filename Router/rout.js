const express= require('express')
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send("working for get")
})

router.get('/:id',(req,res)=>{
    let id = req.params.id;
    res.send('id number is'+JSON.stringify(id))
})

router.post('/',(req,res)=>{
    let data = req.body;
    res.send('data '+ JSON.stringify(data))
})

module.exports =router;