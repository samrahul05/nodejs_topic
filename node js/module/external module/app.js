//  for colors 

// var colors = require('colors');

// console.log('hello'.green);
// console.log('i like cake and pies'.underline.red)
// console.log('inverse the color'.inverse); 
// console.log('OMG Rainbows!'.rainbow); 
// console.log('Run the trap'.trap); 

// for express 

const express = require('express')
const rest =express()
rest.get('/user1',function(req,res){
    res.json("I am user1")
})
rest.get('/user2',function(req,res){
    res.json("I am user2")
})
rest.get('/user3',function(req,res){
    res.json("I am user3")
})
rest.get('/user4',function(req,res){
    res.json("I am user4")
})

rest.listen(1000,()=>{
    console.log("server run in port no:1000");
})