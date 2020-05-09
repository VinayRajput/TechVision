//Question D21: WAP to flat a multidimenstional array and get a sum of multi dimensiional array 
Array.prototype.total = function () {
   let total = 0;
   for (let i = 0; i < this.length; i++) {
      total += isNaN(this[i]) ? 0 : +this[i];
   }
   return total;
}
let ar = [22, 33, 44, ,55, 1, [33, 4, true, [1,[2,2],1],66, 66], 'abc', [33, 22, 33, 44, 55, false, 22]];
//1st single line method
flatAnArray = function (arr) {
   let flattenArray = [];
   var arr = arr;
   _helper = (array) => {

      for (let i = 0; i < array.length; i++) {
         if (!Array.isArray(array[i])){
            if(!!array[i])
               flattenArray.push(array[i]);
         }
         else
            _helper(array[i]);
      }
   }
   _helper(arr);
   return flattenArray;
}
console.log(flatAnArray(ar));
console.log(flatAnArray(ar).total());

//2nd via Array.flat method,
/**but its good only for 1 level of complexity, check the log * */
let flat = ar.flat();
console.log(flat);
console.log(flat.total());







