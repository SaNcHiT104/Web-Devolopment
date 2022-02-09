const request = require('request')
const cheerio = require('cheerio')
request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary',cb)
function cb(error,response,html){
    if(error){
        console.log(error)
    }
    else{
        htmlhelper(html)
    }
}
function htmlhelper(html){
    let seltool = cheerio.load(html)
    let  consArr = seltool('.match-comment-wrapper .match-comment-long-text') //spacing deni must hai // combination of classes dhundo aur nikal lao data
    let data = seltool(consArr[0]).text();
    console.log(data)
}