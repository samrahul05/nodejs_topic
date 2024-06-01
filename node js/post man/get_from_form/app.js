const express= require('express')
const frn =express()
// var nodemailer = require('nodemailer');
frn.post('/post',function(req,res){
    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'youremail@gmail.com',
    //       pass: 'yourpassword'
    //     }
    //   });
      
    //   var mailOptions = {
    //     from: 'youremail@gmail.com',
    //     to: 'myfriend@yahoo.com',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    //   };
      
    //   transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   });
     console.log(req.body)
    //  console.log("data get sucessfully")
     res.json("data sent sucessfully")
})

frn.listen(2000,()=>{
    console.log("server is running in port:2000")
})