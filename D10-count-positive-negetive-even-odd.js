//Question D10: WAP to input 20 values in an integer array and count the negative, positive, odd and even values in the array.

const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})
let onCloseCallback;
let arr = [];
let arraySize = 5;
let negative = 0;
let odd = 0;
askQuestion = function () {
   console.log(`Enter ${arraySize} negative, positive, odd and even values in the array.  empty value will be skipped`);
   function ask () {
      rl.question(arr + ",", function (val) {
         if (!!val) {
            negative += (val < 0) ? 1 : 0;
            odd += (val % 2 != 0) ? 1 : 0;
            arr.push(val);
            arraySize--;
         }
         if (arraySize > 0) {
            ask();
         } else {
            rl.close();
         }
      })
   }
   ask();
   
   onCloseCallback = function () {
      console.log(arr);
      console.log(`${negative} are negetive values, ${arr.length - negative} are positive values, ${odd} are odd values, ${arr.length - odd} are even values`);
      process.exit(0);
   }
}
askQuestion();
rl.on('close', onCloseCallback);



