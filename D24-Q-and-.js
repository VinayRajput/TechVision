const csvjson = require('csvjson');
const fetchWrite = require("./library/fetchWrite");

const data = [
   {
      name: 'item-01',
      price: 10,
      qty: 100,
      category: ['A', 'B', 'D']
   },
   {
      name: 'item-02',
      price: 50,
      qty: 4,
      category: ['C', 'B', 'E']
   },
   {
      name: 'item-03',
      price: 310,
      qty: 8,
      category: ['X', 'C']
   },
   {
      name: 'item-04',
      price: '',
      qty: 9000,
      category: ['G']
   }
];

const categorisedObj = {};
const dataForCSV = [];
data.map(e => {
   e.category.forEach(cat => {
      let ct = categorisedObj[cat] || { category: cat };
      ct.total_price = (ct.total_price || 0) + (e.price * e.qty);
      ct.total_qty = (ct.total_qty || 0) + e.qty;
      categorisedObj[cat] = ct;
   });
});

for (key in categorisedObj) {
   dataForCSV.push(categorisedObj[key]);
}
const d = csvjson.toCSV(dataForCSV, {
   headers: 'key'
});
fetchWrite.saveFile('./csv.csv', d);

/*
catgory   total_price   total_qty
A               1200               104
B
C
D
E */