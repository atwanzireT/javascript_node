// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    school:"",
    get lang() {
      return this.language;
    },
    get fullname(){
        return this.firstName + " " + this.lastName
    },
    set sch(sch){
        this.school = sch
    }
  };

console.log(person.lang)
console.log(person.fullname)
person.school = "MUST"
console.log(person)
