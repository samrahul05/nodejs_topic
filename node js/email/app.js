                      // normal email sent for node json

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'unluckyboysam5@gmail.com',
//     pass: 'bbdf bsun qyuv pjjm'
//   }
// });

// var mailOptions = {
//   from: 'unluckyboysam5@gmail.com',
//   to: 'sammichleak47@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


// by using express 

const express= require('express')
const sun=express()
var nodemailer = require('nodemailer');
sun.get('/get',function(req,res){
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
          subject: 'hello',
          text: 'That was easy!'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
})

sun.listen(7000,()=>{
    console.log("Server is Running:7000")
})