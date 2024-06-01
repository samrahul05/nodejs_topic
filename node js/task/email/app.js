const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
// const { log } = require('console');
const nodemailer = require('nodemailer');
app.use(express.urlencoded({extended:false})) 
// const fs = require('fs');
// app.set('views',path.join(__dirname, "views" ));

// app.set('view engine','html');
// app.use(express.static(path.join(__dirname, 'views')));
// console.log(__dirname)

var storage = multer.diskStorage({
    destination : function(req, file, cb){

        //some work
        cb(null, 'image')
    },
    filename :function(req, file, cb){
        cb(null, file.originalname.replace(/\.[^/.]+$/,"") + '_' + Date.now() + path.extname(file.originalname) )
    }
})
// 
let maxSize = 2 * 1000 * 1000

let upload =    multer({
        storage : storage,
        limits : {
            fileSize : maxSize 
        },
        fileFilter : function (req, file, cb){
            console.log(file.mimetype);
            let filetypes = /jpeg|jpg|png|pdf/;
            let mimetype = filetypes.test(file.mimetype);
            let extname = filetypes.test(path.extname(file.originalname).toLowerCase())
            
            if(mimetype && extname){
                return cb(null, true);
            }

            cb("Error: File upload only supports the following filetypes: " +filetypes )

        }
    }).single('mypic');


app.get('/',function(req,res){
    res.json("hello world")
    res.render('index')
})

app.post('/upload',(req, res, next)=>{
    upload(req, res, function(err){
        if(err) {
            if(err instanceof multer.MulterError && err.code == "LIMIT_FILE_SIZE"){
               return res.send("File size is maximum 2mb");
            }

            res.send(err);
        }else{
            res.send("Success File Uploaded!")
            console.log("Data post successfully");
            console.log(req.body)
            // console.log(__dirname,mypic)
        }
    })
   
})
// app.post('/upload', function(req,res){
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'unluckyboysam5@gmail.com',
//           pass: ' bbdf bsun qyuv pjjm'
//         }
//       });
      
//       var mailOptions = {
//         from: 'unluckyboysam5@gmail.com',
//         to: 'sammichleak47@gmail.com',
//         subject:req.body.sub,
//         text: req.body.textarea,
      
//         attachments:[
//           {
//             filename:'rose.jpg',
//             path: path.join(__dirname, 'sam/rose.jpg') 
           
//           }
//         ]
      
        
//       };
      
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
      // transporter.sendMail(mailOptions, function (error, info) {
      //   if (error) {
      //     return res.status(500).json(error.toString());
      //   } else {
      //     // Delete the uploaded file after sending the email
      //   //   fs.unlinkSync(req.file.path);
    
      //     return res.status(200).send('Email sent successfully');
      //   }
      // });
      // console.log("Data post successfully");
      // console.log(req.body)
      // res.json("data post  successfully")

    // })
app.listen(9000,()=>{
    console.log("server :9000")
})


