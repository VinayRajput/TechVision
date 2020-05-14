//Question D21: WAP to flat a multidimenstional array and get a sum of multi dimensiional array 
Array.prototype.total = function () {
   let total = 0;
   for (let i = 0; i < this.length; i++) {
      total += isNaN(this[i]) ? 0 : +this[i];
   }
   return total;
}
let ar = [
               22, 33, 44, ,55, 1, 
                     [33, 4, true, 
                              [1,
                                    [2,2],
                              1],
                     66, 66], 'abc', [33, 22, 33, 44, 55, false, 22]
               ][3,2,3,4,5,45,5,6,7,8];
               
//1st single line method
flatAnArray = function (arr) {
   let flattenArray = [];
   var arr = arr;
   if(!Array.isArray(arr)){
      return "input is not valid";
   }
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
//console.log(`flatten array`,flatAnArray(ar));
//console.log('sum',flatAnArray(ar).total());
console.log(flatAnArray(ar)); 








