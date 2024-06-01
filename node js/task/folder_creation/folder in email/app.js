
const express = require('express')
const app = express()
var nodemailer = require('nodemailer');
app.use(express.urlencoded({extended:false})) 
app.post('/post',function(req,res){
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'unluckyboysam5@gmail.com',
      pass: 'bbdf bsun qyuv pjjm'
    }
  });
  
  var mailOptions = {
    from: 'unluckyboysam5@gmail.com',
    to: 'sammichleak47@gmail.com',
    subject:'good morning',
    text: req.body.textarea

  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent successfully');
    }
  });
  
  console.log("Data post successfully");
  console.log(req.body)
  res.json("data post  successfully")
})
app.get('/get',function(req,res){
    console.log("Data gets successfully");
    res.json("data gets successfully")
})

app.listen(8080,()=>{
    console.log("Server is Running in port:8080");
})