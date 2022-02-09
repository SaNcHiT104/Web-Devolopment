// scrapping from the given match starts
const request = require('request')
const cheerio = require('cheerio')
const url = 'https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'
request(url,cb)
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
    let date = splitedArr[2].trim()
    //now who have won the match
    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text')
    console.log(result.text())
    console.log(location)
    console.log(date)
}