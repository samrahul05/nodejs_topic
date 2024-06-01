const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const { log } = require('console')
// views-views is the foleder where to save the uploaded file 
// __dirname -this will repersents the indexedDB.js fille path 
app.set('views',path.join(__dirname, "views" ))   

// ejs-ingurathu views oa template engine
app.set('view engine',"ejs")

// diskStorage-function
// we use storage variable to store the diskStorage function  
var storage = multer.diskStorage({
    //  destination na nama upload pannura fille enga poi store agnum sollrom 
    // we can give the destination in string or funcion 
       
    destination : function(req, file, cb){           // cb-call back    
        //   here uploads-nama enga upload pannanum mo antha foldername kudukanum
         cb(null, 'uploads')

    },
    filename :function(req, file, cb){
        // we use path for originalfile name we want so tahts y we use 
        cb(null, file.originalname.replace(/\.[^/.]+$/,"") + '-' + Date.now() + path.extname(file.originalname))
    }
})

// inga nama antha fileoda size evalo eruakanumunu kudukoram 

let  maxSize =2 * 1000 * 1000

let upload =    multer({
    storage :storage,
    limits :{
        fileSize : maxSize     // nama file size a bytes la mattum the kuduppom 
    },
    fileFilter : function(req, file, cb){
        // inga nama upload panra filr pdf a illa png a illa japg a nu sollurom\
        console.log(file.mimetype);
        let filetypes =/jpeg|jpg|png/;
        // type function na true va return pannum
        // mime ttype na nama upload pana file enna type nu sollum namaku
        let mimetype =filetypes.test(file.mimetype)
        // extname is store the nama uplaod panna filodea extention na save pannum
        let extname =filetypes.test(path.extname(file.originalname).toLowerCase())
        if(mimetype && extname){
             return  cb(null, true);
        }
        cb("Error:this file id not supported please use this files:" + filetypes)
        // cb("Error: File upload only supports the following filetypes: " +filetypes )
    }
}).single('mypic')
// mypic na nama enna filedname form la vechurukomo atha inga kudukanum

app.get('/',function(req,res){
    res.render('signup')
    // inga nama en signup ingura intha file la .ejs nu extension la create pannurom na enna nama ejs num mela templeate use panniruka nala etha podanum
})

app.post('/upload',(req, res, next)=>{
    upload(req, res, function(err){
        // apdi antha function err achuna ethu work aagum
        if(err){
            if(err instanceof multer.MulterError && err.code == "LIMIT_FILE_SIZE"){
                return res.send("File size is maximum 2mb");
             }
            res.send(err);
        }else{
            res.send("Success Image Uploaded!")
        }
    })
})

app.listen(3030,()=>{
    console.log("server running :3030")
})
