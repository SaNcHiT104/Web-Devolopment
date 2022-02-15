const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
let array = transactions.some(function(n){
    return n>0 //kahi bhi n>0 milte hi true return krke code khtm
})
console.log(array)
let array2 = transactions.every(function(n){
    return n>0 // saare n>0 honge tbhi true aayega vrna nahi
})
console.log(array2)