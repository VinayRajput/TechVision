import React from 'react';
class DashboardController {


   renderComponent (componentName) {
      alert(`${componentName} from controller`);
      return `<${componentName} />`
   }
   
   fetchStatus () {
      return (<div>
         <h2>Hellow from Dashboard</h2>
      </div>)
   }
}
export default DashboardController;