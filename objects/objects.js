// objects are variables

let person = "John"
console.log(person)

// Real objects contain many values
let student = {
    name:"Joseph",
    course:"BCS",
    parents:{
        mother:"Maggie",
        father:"Tom",
    }
}
console.log("\n***********\n")
console.log(student.name)
console.log(student.parents.mother)

// Creating a JavaScript Object
const school = {}
school.name = "MUST"
school.location = "Mbarara"

console.log(school)

// Using the JavaScript Keyword new
const movie = new Object()
movie.name = "2:22"
movie.release = "2016"

console.log(movie)

// loops
for (let x in student){
    console.log("Printing Object using loop")
    console.log(student[x])
}