// schema.js
const mongoose = require('mongoose');

const productsch = new mongoose.Schema({
    image: String, // Make sure this matches the property in Cloudinary upload_stream
    name: String,
    price:String,
    description:String,
    category:String,
    

});

module.exports = mongoose.model('API_Product', productsch);
