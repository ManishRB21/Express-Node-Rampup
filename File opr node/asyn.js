const fs = require('fs')
// fs.writeFile("test.txt","mans",()=>{
//     console.log("file created")
// })

// fs.appendFile("test.txt","hshabs",()=>{
//     console.log("data append")
// })

const s=fs.readFile("test.txt",(err,data)=>{
    console.log(data.toString())
})
// const t = st.toString()

