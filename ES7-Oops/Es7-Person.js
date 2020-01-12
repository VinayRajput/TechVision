const Human = require('./ES7-Human');

class Person extends Human {
   constructor(name, age, gender, education, location, nationality){
      super(name, age, gender);
      this.education = education;
      this.location = location;
      this.nationality = nationality;
   }
}

let person = new Person('Vinay', 39, 'male', 'Post Graduate', 'Delhi', 'Indian');
console.log(person);



