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

Vinay = new Human('Vinay', 39, 'male');
Sumeet = new Human('Sumeet', 26, 'male');
Neelam = new Human('Neelam', 39, 'female');

console.log(Vinay);
console.log(Sumeet);
console.log(Neelam);


class Person extends Human {
    constructor (name, age, gender, education, location, nationality) {
        super(name, age, gender);
        this.education = education;
        this.location = location;
        this.nationality = nationality;
    }
    getDetails () {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            education: this.education,
            location: this.location,
            nationality: this.nationality
        }
    }
}

let person = new Person('Vinay', 39, 'male', 'Post Graduate', 'Delhi', 'Indian');
console.log(person.getDetails());
