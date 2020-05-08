//Question D5: WAP to calculate the average of 10 values stored in an array and display all those values which are more than the calculated average.

Array.prototype.avg= function(){
   let total = 0;
   let len = this.length;
   for(let i=0; i<len; i++){
      total += +this[i];
   }
   return total / len;
}
Array.prototype.getGreaterNumber= function(num){
   let collect = [];
   for (let index = 0; index < this.length; index++) {
      let ind=this[index];
      if(+ind > +num)
         collect.push(ind)
   }
   return collect;
}
let arr = [3,45,34,67,45,75,45,66,78,35];
let avg = arr.avg();
console.log(`Averate is ${avg}, and greater numbers are:`);
console.log(arr.getGreaterNumber(arr.avg()))