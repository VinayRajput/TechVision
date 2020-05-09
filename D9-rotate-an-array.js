//Question D9: WAP to rotate an integer array towards right by the given number of times.

Array.prototype.rotate = function(times){
   let tmpArray = this.splice(this.length - times, times);
   let newArray=tmpArray.concat(this);
   return newArray;
}

let arr = [3,2,2,5,6,7,8,9,0,13,22,54,25];
console.log(`original array: ${arr}`);
arr = arr.rotate(3);
console.log(`3 time rotated array: ${arr}`);
arr = arr.rotate(4);
console.log(`4 time rotated array: ${arr}`);