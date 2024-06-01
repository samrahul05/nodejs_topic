const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
var nodemailer = require('nodemailer');
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


var storage = multer.diskStorage({
   
       
    destination : function(req, file, cb){         
       
         cb(null, 'uploads')

    },
    filename :function(req, file, cb){
       
        cb(null, file.originalname.replace(/\.[^/.]+$/,"") + '-' + Date.now() + path.extname(file.originalname))
    }
})



let  maxSize =2 * 1000 * 1000

let upload =    multer({
    storage :storage,
    
}).single('image')




app.post('/post',(req, res, next)=>{
    upload(req, res, function(err){
        
        if(err){
            if(err instanceof multer.MulterError && err.code == "LIMIT_FILE_SIZE"){
                return res.send("File size is maximum 2mb");
             }
            res.send(err);
        }else{
           res.json("Image uploaed sucessfully!!")
            // var transporter = nodemailer.createTransport({
            //   service: 'gmail',
            //   auth: {
            //     user: 'unluckyboysam5@gmail.com',
            //     pass: 'bbdf bsun qyuv pjjm',
            //   }
            // });
          
            // var mailOptions = {
            //   to:"sammichleak47@gmail.com", // Use an array for multiple recipients
            //   subject:"hello",
            //   text:"good afternoon",
            //   attachments:[
            //     {
            //       //  ethu vanthuimage sent pnnu rathu kana cmd 
            //       path:`./uploads/${req.file.filename}`                  
            //     }
            //   ]
              
            // };
          
            // res.json('Data posted successfully from Postman');
            // console.log('Posted Data Received Successfully from Postman');
            
            
            // transporter.sendMail(mailOptions, function (error, info) {
            //   if (error) {
            //     console.log(error);
            //   } else {
            //     console.log('Email sent: ' + info.response);
            //   }
            // });
      }      
    })  
})


app.listen(3030,()=>{
    console.log("server running :3030")
})
