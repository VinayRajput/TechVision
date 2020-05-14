function findBusiestPeriod (data) {
   // your code goes here
   let busiestTimestamp;
   let timestamp;
   let maxBusiest;
   let lastBusiest;
   let personInMall;
   let maxPersoninMall = 0;
   let same = false;
   for (let i = 0; i < data.length; i++) {
      timestap = data[i][0];
      maxBusiest = (!maxBusiest) ? maxPersoninMall : maxBusiest;

      while(i < data.length && data[i][0] === timestamp){
         maxBusiest =  (!!data[i][2]) ? maxBusiest - data[i][1] : maxBusiest + data[i][0];
      }
      
      if (maxBusiest <= maxPersoninMall) {
         maxBusiest = maxPersoninMall;
         busiestTimestamp = timestamp;
      }
      lastBusiest = maxBusiest;
   }
   return busiestTimestamp
}

console.log(findBusiestPeriod([[1487799425,21,0],[1487799427,22,1],[1487901318,7,0]]))