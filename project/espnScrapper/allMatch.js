// Dividing the functions
const request = require('request')
const cheerio = require('cheerio')
const sc = require('./scoreCard')
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
        sc.ps(fulllink)

    }
    //ALL LINKS OF MATCH SCORECARD ARE ACCESSED
    
}
module.exports={
    getAllMatch : getAllMatchLink

}

