import React, {Component} from 'react';

class Vehicles extends Component{
   constructor(props){
      super();
      this.state={
         serverConfig:props.serverConfig,
         VehiclesList:[]
      };
      this.fetchVehicleData();
   }

   fetchVehicleData =()=>{
      fetch(this.state.serverConfig.host+'/getVehicles').
      then(res => res.json()).
      then(res => this.setState({VehiclesList:res}));
   }

//   form data submission with 

   render(){
      
      
      return (
         <div className="container">
            <div className="table  table-striped">
               <h2>Vehicles list <small> ({this.state.VehiclesList.length})</small></h2>
               
               <div className="row">
                     <div className="col-xs-4 col-md-4 col-sm-4">
                        Registration No.
                     </div>
                     <div className="col-xs-4 col-md-4 col-sm-4">
                        Modal
                     </div>
                     <div className="col-xs-4 col-md-4 col-sm-4">
                        Make
                     </div>
                  </div>
                  <hr/>
               {this.state.VehiclesList.map((vehicle, i) =>
                  <div className="row" key={i}>
                     <div className="col-xs-4 col-md-4 col-sm-4">
                        {vehicle.registration_no}
                     </div>
                     <div className="col-xs-4 col-md-4 col-sm-4">
                        {vehicle.model}
                     </div>
                     <div className="col-xs-4 col-md-4 col-sm-4">
                        {vehicle.make}
                     </div>
                  </div>
               )}</div>
               
         </div>)
   }
}
export default Vehicles;