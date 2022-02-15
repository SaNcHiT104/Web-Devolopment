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
    getAllMatchLink(fulllink) //getting the html of full link
}

function getAllMatchLink(html){
    request(html,function(error,response,html){ //GETTING HTML OF NEW LINK (MAIN URL --->VIEW RESULTS(THIS LINK HTML IS EXTRACTED))
        if(error){
            console.error(error)
        }
        else{
            extractAllLink(html) // getting all the score card from full link
        }
    })
}
function extractAllLink(html){
    let $ = cheerio.load(html)
    let scorecard = $('a[data-hover="Scorecard"]') // every scorecard is now stored in a from of array in scorecard
    for(let i=0;i<scorecard.length;i++){
        let link = $(scorecard[i]).attr('href') // each and every scorecard is getting accessed
        let fulllink = "https://www.espncricinfo.com/" + link
        console.log(fulllink)
    }
    //ALL LINKS OF MATCH SCORECARD ARE ACCESSED
    
}
//TILL NOW MAIN LIN-->VIEW RESULTS-->NEW HTML EXTRACTED --->EACH SCORECARD ACCESSED