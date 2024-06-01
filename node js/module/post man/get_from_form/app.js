const express= require('express')
const frn =express()

frn.post('/post',function(req,res){
    
     console.log(req.body)
    //  console.log("data get sucessfully")
     res.json("data sent sucessfully")
})

frn.listen(2000,()=>{
    console.log("server is running in port:2000")
})