//Question D4: WAP to input the sales made by a salesman in every month of a given year and find out the total, average, maximum and minimum sales.
let sale = [300,322,455,444,5555,4444,3333,222,4444,2222,444,5555];
const year = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December"
]
 Array.prototype.total = function(){
    let total=0;
    for(let i =0; i<this.length; i++){
      total += this[i];
    }
    return total;
 }

let i=0;
const maxsale = Math.max.apply(null,sale);
const minsale = Math.min.apply(null,sale);
const totalsale = sale.total();

   console.log('Here is the summay of sales: \n');
   console.log(`Total sales was ${totalsale} in year.`)

   console.log(`Average sales was ${Math.round(totalsale/sale.length)}`)
   
   console.log(`Maximum sales was ${maxsale} in month of ${year[sale.indexOf(maxsale)]}`);

   console.log(`Minimum sales was ${minsale} in month of ${year[sale.indexOf(minsale)]}`)

   


