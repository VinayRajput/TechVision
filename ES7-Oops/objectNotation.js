let human = {
   name:"Vinay",
   info:{ // object in object
      age:"39",
      gender:"male"
   },
   getName:function(){ //object method
      return this.name
   },
   getFull=function(){ //object method
      return {name:this.name, age:this.info.age, gender:this.info.gender}
   }
}

console.log(human.getName());
console.log(human.getFull());


