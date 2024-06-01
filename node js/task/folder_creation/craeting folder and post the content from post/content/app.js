const express =require('express')
const app = express()

app.use(express.urlencoded({extended:false})) 

app.post('/post',function(req,res){
    
    var fs = require('fs');
    fs.appendFile(req.body.name, req.body.text, function (err) {
      if (err) throw err;
      console.log('Saved!');
    //   console.log(req.body.folname)
      console.log(req.body.text)

    });
    fs.rename(req.body.rename, 'myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });
    console.log(req.body.text)
    res.send("data transfer successfully")
    console.log("data transfer")
    
    
})

app.listen(4000,()=>{
    console.log("Server running:4000")
})