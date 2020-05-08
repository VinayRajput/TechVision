//Question D4: WAP to input the sales made by a salesman in every month of a given year and find out the total, average, maximum and minimum sales.
const aYear = {
   January: '',
   February: '',
   March: '',
   April: '',
   May: '',
   June: '',
   July: '',
   August: '',
   September: '',
   October: '',
   November: '',
   December: ''
}

let year = Object.keys(aYear);

const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
console.log('Please enter the sale of whole year month wise, please leave blank if no sale\n');
//const year = Object.keys(aYear);
let sale = [];

Array.prototype.total = function () {
   let total = 0;
   for (let i = 0; i < this.length; i++) {
      total += +this[i];
   }
   return total;
}

function summary (sale) {
   const maxsale = Math.max.apply(null, sale);
   const minsale = Math.min.apply(null, sale);

   let maxsalemonth = year[sale.indexOf(maxsale)];
   maxsalemonth = !!maxsalemonth ?  `in the month ${maxsalemonth}` : "";
   
   let minsalemonth = year[sale.indexOf(minsale)];
   minsalemonth = !!minsalemonth ? `in the month ${minsalemonth}` : "";
   
   const totalsale = sale.total();

   console.log('Here is the summay of sales: \n');
   console.log(`Total sales was ${totalsale} in year.`)

   console.log(`Average sales was ${Math.round(totalsale / sale.length)}`)

   console.log(`Maximum sales was ${maxsale} ${maxsalemonth} `);

   console.log(`Minimum sales was ${minsale} ${minsalemonth}`)

}
let i = 0;
function collectSales () {
   let month = year[i];
   rl.question(`What is sale for ${month} ?\n\n`, function (sale) {
      aYear[month] = sale || 0;
      if (i < year.length - 1) {
         i++;
         collectSales();
      }
      else
         rl.close();
   })
}

collectSales();



rl.on("close", function () {
   //console.log(aYear);
   summary(Object.values(aYear))
   process.exit(0);
});




