import React from 'react';
class HomeLoan {
   async showHomeLoanCalcy (name) {
      var data;
      if (name != "") {
         console.log(name);
         data = await fetch("http://localhost:8080/getDrivers");
      }
      else {
         data = { msg: 'data is not in range' };
      }
      return data;
   }
}
export default HomeLoan;