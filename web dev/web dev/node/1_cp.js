const cp = require('child_process')
// console.log("opening calculator")
// cp.execSync("calc") //cmd mai run krdiya calc
// cp.execSync("start chrome https://nados.io/feed") //chrome kholkr site pr pocha dega
const output = cp.execSync("node test.js")
console.log('output->'+ output)