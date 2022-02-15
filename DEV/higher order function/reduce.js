let arr = [2,3,4,5,6,7,8] // left to right movement
let sum =arr.reduce(function(x,val){
    let update = x+val
    return update
},0) //x ki value 0 set krri
console.log(sum)