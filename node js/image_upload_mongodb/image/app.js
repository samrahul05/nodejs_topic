// app.js
const express = require('express');
const app = express();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const mongoose = require('mongoose');
const productsch = require('./schema');

cloudinary.config({
    cloud_name: 'dkfqlbmbw',
    api_key: '156486712375679',
    api_secret: 'vz4LKcuFYAiBNbX_H6-i_p1hus4',
    secure: true,
});

mongoose.connect("mongodb://127.0.0.1:27017/ECE")
.then(() => {
    console.log('Mongodb is connected');
}).catch(() => {
    console.log('Mongodb is not Connected ');
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: false }));

app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No image file provided' });
    }

    cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
        if (error) {
            return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
        }

        const productdetails = new productsch({ 
            image: result.url,
            // image: ,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            // ...req.body

        });
        await productdetails.save();

        res.json({ 
            image: result.url,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
         });
    }).end(req.file.buffer);
});



app.get('/get', async(req,res)=>{
    const data = await productsch .find({})
    res.json(data)
})

app.listen(4200, () => {
    console.log("Server in port: 4200");
});