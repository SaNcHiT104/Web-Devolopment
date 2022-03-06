const fs = require('fs')
console.log('Before')
// fs.readFile( 'f2.txt' ,function(err,data){
//     if(err){
//         console.log(err)
//     }
    
//     console.log('File data'+ data)
    
// })





let promise = fs.promises.readFile("f2.txt") //if promise is fullfilled tb aage jakr print krega
promise.then(function(data){ // promise fullfill hoga to then use hoga
    console.log('file data -->'+data)
})
promise.catch(function(err){ //promise reject hoga error dega
    console.log(err)
})

console.log("after")