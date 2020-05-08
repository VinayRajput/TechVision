//Question D7: WAP to reverse an array of floats.

let arr = [33.23,22.34,44.3,34.5,556.4,3343.2];
let j = arr.length-1;
let mid = Math.floor(j/2);
for(let i=0; i<=mid; i++,j--){
   //console.log(+arr[i] +','+ arr[j]);
   let tmp = arr[i];
   arr[i] = arr[j];
   arr[j] = tmp;
   // arr[i] = +arr[i] + arr[j];
   // arr[j] = +arr[i] - arr[j];
   // arr[i] = +arr[i] - arr[j];
}
