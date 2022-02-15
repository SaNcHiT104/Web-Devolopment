// jaise hi condition hogi , vaise hi code khtm krke vo return krdega
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
let transactionArr = transactions.find(function(n){
    return n<0
})
console.log(transactionArr) // ek hi value aayegi -898 , jaise hi encounter hoga ans aajayega