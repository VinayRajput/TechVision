//Question D6: WAP which finds the locations and values of largest and second largest element in a one dimensional array.

let arr = [3,41,34,67,42,75,45,66,78,35];
let maxIndex;
let max2Index;
let max = 0;
let max2=0;
for(let i=0; i < arr.length; i++){
   if(max < arr[i]){
      max = arr[i];
      maxIndex = i;
   }
}
let arr2 = arr.slice(0,maxIndex);
for(let i=1; i < arr2.length; i++){
   if(max2 < arr2[i]){
      max2 = arr2[i];
      max2Index = i;
   }
}

console.log(`Maximum number is ${max} and index is ${maxIndex+1}`);
console.log(`2nd Maximum number is ${max2} and index is ${max2Index+1}`);
