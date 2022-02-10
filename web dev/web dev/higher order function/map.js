let arr = [2,4,5,7,8,9,10]
//map function
//it is itself a function
//cb function is passed in arg
//traverse through the arr
//store in a new arr
//old arr is not affected
let maparr = arr.map(function sqaure(v){
    return v*v
}
)
console.log(arr)
console.log(maparr)
let nameA = ['sanchit','jain','hello']
let mapname = nameA.map(function(n){
    return n 
})
console.log(mapname)
let nameArr = ['Vishal Kumar' , 'Vaibahv Rawal' , 'Anmol Taneja']
// You have to use map function and you will take out firstName and lastName separately
let mapnameArr = nameArr.map(function(n){
    let splitA = n.split(' ')
    return splitA
})
console.log(mapnameArr)
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;
let maptransaction = transactions.map(function(n){
    return (n/inrtToUsd).toFixed(2) //tofixed(x) - x decimal places tk aayega 
})
console.log(maptransaction)