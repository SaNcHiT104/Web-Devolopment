var a =2
console.log(a)
var a ='i am a string'
console.log(a)
//functions
function multiply(a,b){
    console.log(a*b)

}
multiply(2,3)
function divide(a,b){
    console.log(a/b)
}
// direct invoking of the function
divide(4,2)
let add = (function(a,b){
            return a+b
})(10,30)
console.log(add)
