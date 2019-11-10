import React from 'react';
import HomeLoan from '../../controllers/homeLoan.controller';

class PersonalLoan extends React.Component {
   constructor () {
      super();
      this.state={}
   }

   getData=()=>{

     var o = new  HomeLoan();
     var out = o.showHomeLoanCalcy();
    alert(out);
    
   }

   render(){
      return(<div>
            <h4> Personal Loan Calculator </h4>
         </div>)
   }
}

export default PersonalLoan;