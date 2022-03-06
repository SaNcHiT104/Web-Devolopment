//call back ke andr ek aur call back krenge , taki flow mai callback pass ho sake
const fs = require('fs')
console.log('before')
fs.readFile('f1.txt',cb)
function cb(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log("File data1 -->" + data)
        fs.readFile('f2.txt',cb2)
    }
}
function cb2(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log("File data 2-->" + data)
        fs.readFile('f3.txt',cb3)
    }
}
function cb3(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log("File data 3--> "+ data)
    }
}





console.log("after")