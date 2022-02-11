const fs = require('fs')
let buffer = fs.readFileSync('./example.json')
const xlsx = require('xlsx')

let data = JSON.parse(buffer) //covert buffer into tex JASON 

data.push({
    "name": "tanmay",
    "age": 18,
    "topper": false,
    "address": {
        "State": "delhi",
        "Country": "India"
    },
    "friends": ["samar", "dhruv", "tani"]
})
//console.log(data)
let strindata = JSON.stringify(data) //data need to be converted to string first before pushing the data
fs.writeFileSync('example.json', strindata)
console.log("done>>>")
//WRITING INTO EXCEL
function excelWriter(fileName,sheetName,json){
    let newWB = xlsx.utils.book_new(); //Creating a new Workbook
    let newWS = xlsx.utils.json_to_sheet(json); //Creating a new work Sheet JSON--->SHEET(converting Rows and col)
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName); 
    xlsx.writeFile(newWB, fileName);
}

//xlsx only deals with single values,no arr,no object
//READING FROM EXCEL
function excelReader(filePath,sheetName){
    let wb = xlsx.readFile(filePath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    console.log(ans)
}
