//From the Transactions Array filter out positive Elements and Calculate the total amount
//Use filter and Reduce to Achieve this
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]
let hello =transactions.filter(function(n){
    return n>0
}).reduce(function(x,val){
    let sum = x +val
    return sum
},0)
console.log(hello)