//Question D3: WAP to subtract two arrays of the same size.

// check jsbench.ch test results for performance of these two ways  : https://jsben.ch/1cf8v

let nums = [3, 2, 4, 5, 6, 7, 8, 9, 1, 2, 56, 67, 4, 65, 34, 5, 6, 4, 22, 3, 4, 45, 2, 564, 7, 7, 6, 5, 6, 7, 5, 4, 4, 5];

 substractTwoArraySplice = (num) => {
   // assumed it will be a split of array
   console.log(`substractTwoArraySplice`);
   let numbers = num;
   let len = numbers.length;
   let mid = parseInt(len / 2);
   console.log(`numbers: ${numbers}`);
   let arr1 = numbers.splice(0, mid);
   let arr2 = numbers.splice(0, mid);
   console.log(`array 1   : ${arr1}`);
   console.log(`array 2   : ${arr2}`);
   (!!numbers.length) ? console.log(`array left with extra numbers: ${numbers}`) : '';
}
substractTwoArrayViaLoop = (num) => {
   console.log(`substractTwoArrayViaLoop`);
   
   let numbers = num;
   let len = numbers.length;
   let mid = parseInt(len / 2);
   let array1 = [];
   console.log(`numbers: ${numbers}`);
   
   for (let i = 0; i < mid; i++) {
      array1.push(numbers.pop());
   }
   (numbers.length > mid) ? numbers.pop() : '';
   console.log(`array1  : ${array1}`);
   console.log(`array2  : ${numbers}`);
}

substractTwoArrayViaLoop(nums);
console.log(`------------`)
nums = [3, 2, 4, 5, 6, 7, 8, 9, 1, 2, 56, 67, 4, 65, 34, 5, 6, 4, 22, 3, 4, 45, 2, 564, 7, 7, 6, 5, 6, 7, 5, 4, 4, 5];
substractTwoArraySplice(nums);


