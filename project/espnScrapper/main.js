// PROJECT
// EXTRACT ALL THE DETAILS OF BATSMEN IN A NAME OF EXCEL NAMED BEFORE THE PLAYER NAME
// FOR EXAMPLE
// MATCH OF CSK AND RCB
// TREE --> CSK(FOLDER)--->MS DHONI(EXCEL),FAF(EXCEL)
// EXCEL WILL CONTAIN NAME,VS,LOCATION,4S,6S,SR
// FIRST URL-->VIEW RESULTS-->SPECIFIC MATCH --> BATSMEN DETAIL
const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'
const request = require('request')
const cheerio = require('cheerio')
const getAllmatch = require('./allMatch')
const fs = require('fs')
const path = require('path')
let iplPath = path.join(__dirname,"IPL") //joining the path of espn scrapper with ipl folder //dirname-gets the current directory
dirCreator(iplPath) // creating the folder

//GETTING THE HTML CODE
request(url,cb)
function cb(error,response,html){
    if(error){
        console.error(error)
    }
    else{
        extractLink(html)
    }
}
// EXTRACTING THE LINK OF VIEW RESULTS
function extractLink(html){
    let $ = cheerio.load(html)
    let anchorElem = $('a[data-hover="View All Results"]')
    let link = anchorElem.attr('href') //GETTING THE VALUE OF HREF(IT CONTAINS THE VALUE OF SITE LINK)
    let fulllink = 'https://www.espncricinfo.com/' + link // HALF LINK IS STORED, BROWSER COMPLETES IT, SO WE NEED TO ADD OURSELF IN THE LINK
    //FULL LINK IS EXTRACTED
    getAllmatch.getAllMatch (fulllink) //getting the html of full link
}


//TILL NOW MAIN LIN-->VIEW RESULTS-->NEW HTML EXTRACTED --->EACH SCORECARD ACCESSED
function dirCreator(filepath){
    if(fs.existsSync(filepath)==false){ // checking if the file exist or not
        fs.mkdirSync(filepath)
    }
}