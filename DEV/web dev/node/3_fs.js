const fs = require('fs')
const path = require('path')
// let content = fs.readFileSync("f1.txt") //read
// console.log("this is f1 data ->"+ content)
// fs.writeFileSync('f2.txt','hello ') //write
// fs.appendFileSync('f2.txt',"this is new data") //append
// fs.unlinkSync('f2.txt')
//  fs.mkdirSync('new folder')
// fs.rmdirSync('new folder')
// console.log(fs.existsSync('new folder')) //check if a file exist or not,return true or false
// console.log(fs.lstatSync('new folder'))
// let folderpath = 'C:\\Users\\jains\\OneDrive\\Desktop\\vs code\\web dev\\node\\new folder'
// let content = fs.readdirSync(folderpath)
// console.log("content "+content)
let srcpath = 'C:\\Users\\jains\\OneDrive\\Desktop\\vs code\\web dev\\node\\new folder\\f1.txt'
let destinationpath = 'C:\\Users\\jains\\OneDrive\\Desktop\\vs code\\web dev\\node\\new folder 2\\'
let filename = path.basename(srcpath)
console.log(filename)
let destpath = path.join(destinationpath,filename)
fs.copyFileSync(srcpath,destpath)
console.log("file copied")
