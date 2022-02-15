let arr = [2,3,4,5,6,7,8,9]
let sumfromright = arr.reduceRight(function(sum,val){
    let x = sum +val
    return x
},0)
console.log(sumfromright)