// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders
// js mai input array ke form mai jaata hai
let input = process.argv.slice(2)
let command = input[0]
const fs = require('fs');
const path = require('path/posix');
let types = { 
    media: ["mp4", "mkv", "mp3","jpg"], 
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"], 
    documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex",], 
    app: ["exe", "dmg", "pkg", "deb"], 
};

switch (command) {
    case 'tree':
        treeFn(input[1]);
        break;
    case 'organize':
        organizefn(input[1]);
        break;
    case 'help':
        helpfn()
        break;
    default:
        console.log("invalid command")
        break;
}
function helpfn() {
    console.log(`List of all the commands:
                    1) tree - node FO.js tree <dirname>
                    2) organize - node FO.js organize <dirname>
                    3) help - node FO.js help `)
}
function organizefn(dirpath) {
    let destpath;
    if (dirpath == undefined) {
        console.log("Please enter valid path")
        return
    }
    else {
        let doesExist = fs.existsSync(dirpath) // check the file exist or not
        if (doesExist == true) {
            destpath = path.join(dirpath, 'organmized_files') //adding organized_folder in the path
            if (fs.existsSync(destpath) == false) { //checking organized path,if already their
                fs.mkdirSync(destpath) //forming the folder
            }
            else {
                console.log("file already exist")
            }
        }
        else {
            console.log("enter valid path")
        }

    }
    organizeHelper(dirpath, destpath)
}
//to categorize the files in the folder
function organizeHelper(src, dest) {
    let childnames = fs.readdirSync(src); //all the files inside the src
    for (var i = 0; i < childnames.length; i++) {
        let childAddress = path.join(src, childnames[i]) //path is identified
        let isFile = fs.lstatSync(childAddress).isFile() //checking the files
        if (isFile == true) {
            let fileCategory = getcatergory(childnames[i])
            console.log(childnames[i] + " belongs to "+ fileCategory)
            sendfiles(childAddress,dest,fileCategory)
        }
    }

}
function getcatergory(name) {
    let ext = path.extname(name)
    ext = ext.slice(1)
    for(let key in types){
        let cTypeArr = types[key]
        for(let i =0;i<cTypeArr.length;i++){
            if(ext==cTypeArr[i]){
                return key
            }
        }
    }
    return 'others'
}
function sendfiles(srcpath,dest,fileCategory){
    let catpath =path.join(dest,fileCategory)
    if(fs.existsSync(catpath)==false){
        fs.mkdirSync(catpath)
    }
    let filename = path.basename(srcpath)
    let destFilepath = path.join(catpath,filename)
    fs.copyFileSync(srcpath,destFilepath)
    fs.unlinkSync(srcpath) //jaha pehle se vaha se udao
    
}

function treeFn(dirpath){
    if(dirpath==undefined){
        console.log("please enter valid path")
    }
    else{
        let doesExist = fs.existsSync(dirpath)
        if(doesExist==true){
            treeHelper(dirpath, " ")
        }
    }
}
function treeHelper(targetpath, indent){
    let isfile=fs.lstatSync(targetpath).isFile()
    if(isfile==true){
        let filename =path.basename(targetpath)
        console.log(indent + "├──" + filename )
    }
    else{
        let dir = path.basename(targetpath)
        console.log(indent + "└──" + dir)
        let children = fs.readdirSync(targetpath)
        //console.log(children)
        for(let i =0;i<children.length;i++){
            let childpath = path.join(targetpath,children[i])
            treeHelper(childpath,indent + '\t')
        }
    }
}