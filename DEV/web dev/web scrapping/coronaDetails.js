const request = require('request')
const cheerio = require('cheerio')
console.log('before')
request('https://www.worldometers.info/coronavirus/',cb)
function cb(error,response,html){
    if(error){
        console.log(error)
    }
    else{
        handleHTML(html)
    }
}
function handleHTML(html){
    let selTool = cheerio.load(html) //important
    let contentArr = selTool('.maincounter-number span') //data ko manipulate cheerio krvayega // array mai bharke data lekr aayega agr same class ke honge
    for(let i =0;i<contentArr.length;i++){
        if(i==0){
            let data = selTool(contentArr[i]).text() // .text() ajeeb  se data mai  se kaam ka saman nikalkr layega
            console.log("total case :"+data)
        }
        else if(i==1){
            let data = selTool(contentArr[i]).text()
            console.log("death :"+data)
        }
        else{
            let data = selTool(contentArr[i]).text()
            console.log("recovery :"+data)
        }
        
    }
}










console.log('after')