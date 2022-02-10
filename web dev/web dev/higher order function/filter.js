let arr = [2,3,4,5,6,7,12,32]
// filter boolean use krta hai
let evenNo = arr.filter(function(n){
    if(n%2==0){
        return true //jonse element ke liye true, vo evenNo arr mai bharkr le aayega
    }
})
console.log(evenNo)
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
let transactionArr = transactions.filter(function(n){
    if(n>0){
        return true
    }
})
console.log(transactionArr)
let arr3 = [ {name: "A", age: 14, gender: "M"},
            {name: "B", age: 34, gender: "M"},
            {name: "C", age: 24, gender: "F"},
            {name: "D", age: 44, gender: "F"},
            {name: "E", age: 44, gender: "M"},
            {name: "I", age: 28, gender: "F"},
            {name: "G", age: 36, gender: "M"},
            {name: "H", age: 47, gender: "F"}]
let ageArr = arr3.filter(function(n){
    if(n.gender=="F"){
        return true
    }
})
//console.log(ageArr) filter krke female select krli ek arr mai , 
//jis arr mai filter krke lekr aaye usme map lgakr age nikal li
let ageArr2 =ageArr.map(function(n){
    return n.age
})
console.log(ageArr2)