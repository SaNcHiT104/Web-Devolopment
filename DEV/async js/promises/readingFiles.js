//cb se pehle promises ko handle krte hai , microtask queue
const fs = require('fs')

let f1p = fs.promises.readFile('f1.txt')
let f2p = fs.promises.readFile('f2.txt')
let f3p = fs.promises.readFile('f3.txt')
console.log(f1p)
console.log(f2p)
console.log(f3p)
function cb(data){
    console.log("file Data "+ data)
}
//randomly print honge ye ,async mai hai na ye
f1p.then(cb)
f2p.then(cb)
f3p.then(cb)