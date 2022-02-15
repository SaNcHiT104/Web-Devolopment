let obj = {
    name: 'Sanchit',
    age: 18,
    phone: 7982923177

}

console.log(obj)
let sanchit = {
    name: 'sanchit',
    age: 19,
    friends: ['diya', 'samarjeet', 'dhruv', 'tanmay'],
    address: {
        country: 'india',
        state: 'New Delhi',
        pincode: 110017,

    },
    sayhi: function() {
        console.log('Sanchit says hi')
    }
}
console.log(sanchit)
console.log(sanchit.friends[2]) //friends key mai jakr arr[2] ki value
console.log(sanchit.age) // Dot notation
console.log(sanchit['age']) // bracket notation
console.log(sanchit.address.pincode)
sanchit.sayhi()
//for in loop
for(let i in sanchit){
    console.log('key : ',i,' & value :',sanchit[i])
}
sanchit.sports=['badminton'] // add new key
console.log(sanchit)
delete sanchit.sports // deleting a property
console.log(sanchit)
