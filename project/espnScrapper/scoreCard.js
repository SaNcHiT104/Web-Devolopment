// scrapping from the given match starts
const request = require('request')
const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs')
const xlsx=require('xlsx')
//const url = 'https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'
function processScorecard(html){
    request(html,cb)
}
function cb(error,response,html){
    if(error){
        console.error(error)
    }
    else{ 
        extractMatchdetail(html)
    }
}
function extractMatchdetail(html){
    let  $ = cheerio.load(html)
    let descripEle = $('.header-info .description')
    let splitedArr = (descripEle.text()).split(',') // converting the single line into array, and it will seperate the data on the bases of comma
    //[
  //'1st Match (N)',
  //' Abu Dhabi',
  //' Sep 19 2020',
  //' Indian Premier League'
    //]
    let location = splitedArr[1].trim()
    let date = splitedArr[2].trim() //to remove the space
    //now who have won the match
    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text')
    console.log(result.text())
    console.log(location)
    console.log(date)
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

    // getting the html of two tables to access the data of the tables
    let innings = $('.card.content-block.match-scorecard-table .Collapsible')
    let htmlstring = ''
    for(let i =0;i<innings.length;i++){
        htmlstring += $(innings[i]).html()
        //now inspecting innings.html and getting the infor
        let teamname = $(innings[i]).find('h5').text() //find()[cheerio function to find the elements]
         //name of both the team in a string
         //Mumbai Indians INNINGS (20 overs maximum)
         //Chennai Super Kings INNINGS (target: 163 runs from 20 overs)
         teamname= teamname.split('INNINGS')[0].trim() //splitting the above data by innings and extracting the team name
        //now to get the name of opponent
        let opponentIDX = i==0? 1:0;
        let opponentName = $(innings[opponentIDX]).find('h5').text()
        opponentName = opponentName.split('INNINGS')[0].trim()
        // we are doing so that we can get the opponent name in one single iteration
        // console.log(teamname,opponentName)
        let cInning = $(innings[i]) //accessing the tables of both the team one by one
        let allR = cInning.find('table.batsman tbody tr') 
        //extratcting data from single single player
        for(let j=0;j<allR.length;j++){
            let allCols =$(allR[j]).find('td')
            //Now if a player gets out, we have extra commentary infor,so we need to remove it from our data
            let isWorthy=$(allCols[0]).hasClass('batsman-cell') //every row has this unique class,for meaningfull data
            if(isWorthy){
                let playerName = $(allCols[0]).text().trim()
                let run = $(allCols[2]).text().trim()
                let balls = $(allCols[3]).text().trim()
                let fours = $(allCols[4]).text().trim()
                let sixes = $(allCols[5]).text().trim()
                let STR = $(allCols[7]).text().trim()
                // console.log(`${playerName} | ${run} | ${balls} | ${fours} |${sixes} | ${STR}`)
                process(teamname,opponentName,playerName,run,fours,sixes,STR,location,date,result)
                //process function will now takeover the data to take it to excel
            }
        }
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

    }
    
}
function process(teamname,opponentName,playerName,run,fours,sixes,STR,location,date,result){
    let teampath = path.join(__dirname,"IPl",teamname) //for teamnames
    dirCreator(teampath) //creating folders for each team
    let playerpath = path.join(teampath,playerName+".xlsx") //creating excel file for each player
    let content =excelReader(playerpath,playerName) //getting empty array
    let playerObj = { //making JSON file
        teamname,
        opponentName,
        playerName,
        run,
        fours,
        sixes,
        STR,
        location,
        date,
        result
    }
    content.push(playerObj) // puting data in JSON
    excelWriter(playerpath,playerName,content) //Making the excel file
}
function dirCreator(filepath){
    if(fs.existsSync(filepath)==false){ // checking if the file exist or not
        fs.mkdirSync(filepath)
    }
}
function excelWriter(fileName,sheetName,json){
    let newWB = xlsx.utils.book_new(); //Creating a new Workbook
    let newWS = xlsx.utils.json_to_sheet(json); //Creating a new work Sheet JSON--->SHEET(converting Rows and col)
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName); 
    xlsx.writeFile(newWB, fileName);
}
function excelReader(filePath,sheetName){
    if(fs.existsSync(filePath)==false){
        return [];
    }
    let wb = xlsx.readFile(filePath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans
}
module.exports ={
    ps :processScorecard
}