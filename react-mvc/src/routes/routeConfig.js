import React from 'react';
import Navigation from '../components/navigation/navigation.component';
import HomeLoan from '../controllers/homeLoan.controller';
import RenderPoint from '../components/RenderPoint/renderPoint.component';

class RouteConfig extends React.Component {
   constructor () {
      super()
      this.state = {
         renderPoint: [],
         navigation: [
            {
               text: "Dashboard",
               component: "Dashboard"
            },
            {
               text: "Home Loan",
               component: "homeLoan"
            },
            {
               text: "Personal Loan",
               component: "personalLoan"
            }
         ]
      }
   }

   async setData (componentName) {
      var processedData;
      var obj = new HomeLoan();
      //var data = obj.showHomeLoanCalcy(componentName).json();

      var response = await obj.showHomeLoanCalcy(componentName)
      var json = await response.json();
     this.setState({ renderPoint: json });
      console.log(this.state.renderPoint);      
   }
   renderLink = (componentName) => {
      // const dashboard = new DashboardController();
      //const output = dashboard.renderComponent(componentName)
      //this.refs.RenderPoint.innerHTML = componentName;

      this.setData(componentName);


   }

   render () {
      return (<div>
         <div className="body row">
            <div className="col-md-4">
               <Navigation navigation={this.state.navigation} renderLink={this.renderLink} />
            </div>
            <div className="col-md-8 renderPoint" >
               <RenderPoint renderPoint={this.state.renderPoint} />
            </div>
         </div>
      </div>)
   }
}

export default RouteConfig;