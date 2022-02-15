//Get the movie Names from this Array of Objects
//method and only get the movie name which has rating higher than or equal to 8
// use Filter and map chaining to achaive the objective 
// var newReleases = [{"id": 1,"title": "Die Hard","rating":9},
// {"id": 2,"title": "Bad Boys","rating":7},
// {"id": 3,"title": "The Chamber","rating": 10},];
// let movies =newReleases.filter(function(n){
//     return n.rating>=8
// }).map(function(n){
//     return n.title
// })
// console.log(movies)
//You have to use map function and have to get all the students name in upperCase
//Map Question//Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord
//use filter method to approach the problem
let studentRecords = [ {name: 'Abhishek', id: 123, marks : 98 },
{name: 'Udai', id: 101, marks : 90 },
{name: 'Himanshu', id: 200, marks : 96 },
{name: 'Mrinal', id: 115, marks : 75 } ]
let students = studentRecords.filter(function(n){
    if(n.id>120 && n.marks>50){
        return n;
    }
})
console.log(students)