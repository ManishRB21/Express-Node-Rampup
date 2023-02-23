const fs = require('fs')


const biodata = {
    name:"manish",
    age:21,
}
const jsonData= JSON.stringify(biodata)
// fs.writeFile('text.json',jsonData,(err)=>{
//     console.log("done")
// })

fs.readFile('text.json','utf-8',(err,data)=>{
   // console.log(data)
   const objData= JSON.parse(data);
   console.log(objData)
})


//console.log(jsonData)
// const objData = JSON.parse(jsonData)
// console.log(objData)

