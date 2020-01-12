class Human {
   constructor (name, age, gender) {
       this.name = name;
       this.age = age;
       this.gender = gender;
   }
   getDetails () {
       return { name: this.name, age: this.age, gender: this.gender }
   }
}

module.exports = Human;



var someone = {
   name:'Vinay',
   age:39
};

var jasmeet = {
   name:'Jasmeet',
   age:26
}

var jasmeetObj = Object.create(jasmeet);


function abc(name,age){
   this.name=name;
   this.age=age;
}
var ab = new abc('Shravan',30);


console.log('someone',someone);
console.log('jasmeetObj', jasmeetObj.name);
console.log(ab);


