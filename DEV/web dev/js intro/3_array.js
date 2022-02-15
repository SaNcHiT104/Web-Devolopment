let cars = ['ferari',2,true,null]//kuch bhi value dalo sb chlega
console.log(cars)
let cars2 = ['ferrari','bmw','jaguar','tesla']
console.log(cars2[2])
cars2[2]='bentley'//change krdo element ko
console.log(cars2)
//new element
cars2[4]='mustang'// 4 ke baad 2 khali space fir add ho jayega
console.log(cars2)
cars2.pop()//remove last element
console.log(cars2)
cars2.push('rolls royce') // add element in the last
console.log(cars2)
console.log(cars2.shift()) // pehla element udda dega
console.log(cars2)
cars2.unshift('aston martin') // pehle point pr element lgga dega
console.log(cars2)
console.log(cars2.length) // length
//2d array
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[0][1])
