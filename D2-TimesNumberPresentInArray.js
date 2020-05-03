//Question D2: WAP to search how many times a number is present in an array. 

let numbers = [3,2,4,5,6,7,8,9,1,2,56,67,4,65,34,5,6,4,22,3,4,45,2,564,7,7,6,5,6,7,5,4,4,5,54];
function howManyTimesNumberPresent(numbers=[]){
   if(!numbers.length) { return 'Empty object';}
   let numbersSet={};
   for(let i=0; i<numbers.length; i++){
      let char = numbers[i];
      numbersSet[char] = (numbersSet[char] || 0) +1;
   }
   console.log('Numbers {times} presence in array')
   for( k  in numbersSet ){
      console.log(`${k} is ${numbersSet[k]} times`);
   }
}
howManyTimesNumberPresent(numbers); 