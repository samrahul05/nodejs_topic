const express = require('express')
const app =express()
const mongoose =require('mongoose')
const schema = require('./schema')
// mongoose.connect("mongodb://127.0.0.1:27017/put_delete")
mongoose.connect("mongodb+srv://SAM_RAHUL:rajanbabu@cluster0.hqoru8l.mongodb.net/")
.then(()=>{
    console.log("Db Connected");
})
.catch(()=>{
   console.log("Db not Connected");
})
app.use(express.urlencoded({extended:false}))

app.post('/post',function(req,res){
        
        const datas = new schema({
            ...req.body
        })
        datas.save().then(()=>{
            console.log(datas);
            res.json("data transfer sucessfully")
       })
    .catch(()=>{
        console.log("datas not saved!");
        res.json("data can't transfer");
        

    })
})

app.get('/get',async(req,res)=>{
    const data =await schema.find({})
    res.json(data)
})

app.put('/put/:id',async(req,res)=>{
    const data = await schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json("update sucessfully")
})

app.delete('/delete/:id',async(req,res)=>{
    const data = await schema.findByIdAndDelete(req.params.id)

    res.json({msg:"data deleted successfully"})
})



app.listen(7075,()=>{
    console.log("server:7075")
})