// JavaScript Object Methods

const person = {
    first_name:"Timothy",
    surname:"Atwanzire",
    id:5566,
    fullname: function(){
        return this.first_name + " " + this.surname
    }
}

console.log(person.fullname())