const mongoose = require('mongoose');
const info = new mongoose.Schema({
    NAME:String,
    ROLLNO:String,
    EMAIL:String,
    DEPARTMENT:String
})
// const info = new mongoose.Schema({
    
//   ROLLNO: {
//     type: String,
//     required: true,
    
//   },
//   NAME: {
//     type:String,
//     required: true,
//     // description:"no"
//   },
//   EMAIL: {
//     type: String,
//     required: true,
//   },
//   DEPARTMENT: {
//     type:String, // Assuming authors is an array of strings
//     required: true,
//   },
// });

module.exports = mongoose.model('students_detail', info);






























// const mongoose = require('mongoose');

// const givendata = new mongoose.Schema({

//   title: {
//     type: String,
//     required: true,
    
//   },
//   price: {
//     type: Number,
//     required: true,
//     // description:"no"
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   authors: {
//     type: [String], // Assuming authors is an array of strings
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['active', 'inactive'],
//     required: true,
//   },
// //   publisher: {
// //     type: {
// //       name: {
// //         type: String,
// //         required: true,
// //       },
// //       address: {
// //         type: String,
// //         required: true,
// //       },
// //     },
// //     required: true,
// //   },
// });

// module.exports = mongoose.model('validator', givendata);
















// const mongoose = require('mongoose')

// const  givendata = new mongoose.Schema({
//     validator: {
//       $jsonSchema: {
//         bsonType: "object",
//         required: ["title", "price","description","authors","status","publisher"],
//         properties: {
//           title: {
//             bsonType: "string",
//             // description: "Title must be in string",
//             description: { type: String, required: true },
//           },
//           price: {
//             bsonType: "string",
//             // description: "price must be in float",
//             description: { type: String, required: true },
//           },
//           description: {
//             bsonType: "string",
//             // description: "description must be in string",
//             description: { type: String, required: true },
//           },
//           authors:{
//             bsonType:'array',
//             items:{
//                 bsonType:'string',
//                 // description: "authors must be in string",
//                 description: { type: String, required: true },
//             }
//           },
//           status: {
           
//             enum:['active','inactive'],
//          // description: "status must be an (active or inactive)"
//             description: { type: String, required: true },
//           },
//         //   publisher:{
//         //     bsonType:'object',
//         //     required:['name','address'],
//         //     properties:{
//         //         name:{
//         //             bsonType: "string",
//         //             // description: "name must be in string",
//         //             description: { type: String, required: true },
//         //         },
//         //         address:{
//         //             bsonType: "string",
//         //             // description: "address must be in string",
//         //             description: { type: String, required: true },
//         //         }
//         //     }
//         //   },
          
//         }
//       }
//     }
//   });
// module.exports=mongoose.model('valid',givendata)

// // module.exports=mongoose.model('Book',givendata)













// var books={
//     title:'Book 1',
//     price:'189.03',
//     description:'sample description',
//     authors:['sam','vel'],
//     status:'active',
//     publisher:{
//         name:'sam & co',
//         address:'street 1,erode'
//     }
// }

//   this for creating aa collection name 

// db.createCollection("posts", {
//     validator: {
//       $jsonSchema: {
//         bsonType: "object",
//         required: [ "title", "price","description","authors","status","publisher" ],
//         properties: {
//           title: {
//             bsonType: "string",
//             description: "Title must be in string"
//           },
//           price: {
//             bsonType: "float",
//             description: "price must be in float"
//           },
//           description: {
//             bsonType: "string",
//             description: "description must be in string"
//           },
//           authors:{
//             bsonType:'array',
//             items:{
//                 bsonType:'string',
//                 description: "authors must be in string"
//             }
//           },
//           status: {
//             enum:['active','inactive'],
//             description: "status must be an (active or inactive)"
//           },
//           publisher:{
//             bsonType:'object',
//             required:['name','address'],
//             properties:{
//                 name:{
//                     bsonType: "string",
//                     description: "name must be in string"
//                 },
//                 address:{
//                     bsonType: "string",
//                     description: "address must be in string"
//                 }
//             }
//           },
          
//         }
//       }
//     }
//   })





// const mongoose = require('mongoose')

// const  givendata = new mongoose.Schema({
//     validator: {
//         $jsonSchema: {
//           bsonType: "object",
//           required: ["title", "price","description","authors","status","publisher"],
//           properties: {
//             title: {
//                     type: String,
//                     required: true,
                    
//                   },
//                   price: {
//                     type: Number,
//                     required: true,
//                     // description:"no"
//                   },
//                   description: {
//                     type: String,
//                     required: true,
//                   },
//                   authors: {
//                     type: [String], // Assuming authors is an array of strings
//                     required: true,
//                   },
//                   status: {
//                     type: String,
//                     enum: ['active', 'inactive'],
//                     required: true,
//                   },
               
//           }
//         }
//     }
// })

// module.exports =mongoose.model('valid',givendata)