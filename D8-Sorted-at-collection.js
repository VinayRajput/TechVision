//Question D8: WAP to create a sorted list using arrays. Every time the element is entered in the array, the array must remain sorted.

const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
let arr = [];

function askQuestion () {
   rl.question("Enter next value to array:", function (val) {
      let len = arr.length;
      let pushed = false;
      if (!!val) {
            for(let i =0; i < len; i++){  
               if(+val < +arr[i]){
                     if(!pushed){
                        arr.splice(i,0,+val);
                        pushed = true;
                           break;
                     }
                  }
            }
            if(!pushed)
            arr.push(+val);
         askQuestion()
      }
      else {
         rl.close();
      }
   })
}
askQuestion();

rl.on('close', function () {

   console.log(arr)
   process.exit(0);
})