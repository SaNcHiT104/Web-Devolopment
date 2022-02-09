const fs = require('fs')
// function printfirstname(firstname,cb,cb2){
//     console.log(firstname)
//     cb('jain')
//     cb('19')
// }
// function lastname(lastname){
//     console.log(lastname)
// }
// function printage(age){
//     console.log(age)
// }
// printfirstname('sanchit',lastname,printage)
console.log('before')
let data = fs.readFileSync('f1.txt')
console.log(' ' + data)
console.log('after')