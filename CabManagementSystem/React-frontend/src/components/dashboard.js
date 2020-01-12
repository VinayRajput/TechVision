import React from 'react';

class Dashboard extends React.Component {
   constructor () {
      super();
      this.state = {};
   }

   
   componentDidMount(){ 
      console.log("Dashboard ready");
  } 
   render () {
      return (<div>This is Dashboard </div>);
   }
}
export default Dashboard;