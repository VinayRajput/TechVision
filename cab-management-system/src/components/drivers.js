import React, { Component } from 'react';
import { RSA_NO_PADDING } from 'constants';
import { thisExpression } from '@babel/types';

class Drivers extends Component {
   constructor (props) {
      super();
      this.state = {
         serverConfig: props.serverConfig,
         DriversList: []
      };
      this.fetchDriversList();
   }

   fetchDriversList = () => {
      fetch(this.state.serverConfig.host + '/getDrivers').
         then(response => response.json()).
         then(data => {
            this.setState({ DriversList: data })
            console.log(data);
         });
   }

   addDriver = () => {
      let driverObj = {
         name:this.refs.name.value,
         dob:this.refs.dob.value,
         license:this.refs.license.value
         };
         
      fetch(this.state.serverConfig.host + '/addDriver',{
         method:'POST',
         body:JSON.stringify(driverObj),
         headers:{'Content-Type':"application/json"}
      }).
         then(res => res.json())/* .
         then((res) => {
            this.state.messages.push(res);
            //this.showConfirmation();
         }) */
   }

editDriverDetails =(id)=>{
   const driverDetail = this.state.DriversList.filter(driver => driver.id==id)[0];
   this.refs.name.value=driverDetail.name;
   this.refs.dob.value=this.makeDate(driverDetail.dob);
   this.refs.license.value=driverDetail.license;
}
editDriverProfile = (id)=>{
      fetch(this.state.serverConfig.host+`/getDriver/${id}`).
      then(res => res.json()).
      then(res => this.setState({driverProfileToEdit:res}) );
}


   updateDriver = () => {
      let driverDetails = {
         name: this.refs.name.value,
         dob: this.makeDate(this.refs.dob.value),
         license:this.refs.license.value
      }
      fetch(this.state.serverConfig.host + "/updateDriver", {
         method:'post',
         body:JSON.stringify(driverDetails),
         headers:{'Content-Type':'application/json'}
      }).then(res => res.json());
   }

   makeDate = (data) => {
      var date = new Date(data);
      var month = date.getMonth() + 1;
      return  date.getDate() + "/" +(month.toString().length > 1 ? month : "0" + month)+"/"+ date.getFullYear();
  }
   
   render () {

      return (
         <div className="container">
            <div className="table  table-striped">
               <h2>Drivers list <small> ({this.state.DriversList.length})</small></h2>

               <div className="row">
                  <div className="col-xs-3 col-md-3 col-sm-3">
                     Name
                     </div>
                  <div className="col-xs-3 col-md-3 col-sm-3">
                     Driving License
                     </div>
                  <div className="col-xs-3 col-md-3 col-sm-3">
                     Date of Birth
                     </div>
                  <div className="col-xs-3 col-md-3 col-sm-3">
                     Action
                     </div>
               </div>
               <hr />
               {this.state.DriversList.map((driver, i) =>
                  <div className="row" key={i}>
                     <div className="col-xs-3 col-md-3 col-sm-3">
                        {driver.name}
                     </div>
                     <div className="col-xs-3 col-md-3 col-sm-3">
                        {driver.license}
                     </div>
                     <div className="col-xs-3 col-md-3 col-sm-3">
                        {this.makeDate(driver.dob)}
                     </div>
                     <div className="col-xs-3 col-md-3 col-sm-3">
                        <button className="btn btn-link btn-sm" onClick={ ()=>{this.editDriverDetails(driver.id)} }>Edit</button>&nbsp; 
                        <button className="btn btn-link btn-sm no-padding" onClick={
                           ()=>{this.deleteDriver(driver.id)}
                        }>Delete</button>
                     </div>
                  </div>

               )}</div>

            <hr />
            <h2>Add / Edit Driver Form</h2>
            <form ref="addEditDriver">
               <div className="">
                  <input type="text" ref="name" placeholder="Enter Driver Name" className="form-control" required />
               </div>
               <input type="text" ref="license" placeholder="license" className="form-control" required />
               <input type="text" ref="dob" placeholder="Date of birth" className="form-control" required />
               <input type="file" ref="photo" placeholder="Attach your photo" className="form-control"  />
               <input type="file" ref="documents" className="form-control" />
               <button type="button" className="btn btn-info btn-sm" onClick={this.addDriver}>Add Driver</button>   
                           &nbsp;
               <button type="button" className="btn btn-info btn-sm" onClick={this.updateDriver}>Update Driver Details</button>
            </form> 
            
         </div>)
   }
}
export default Drivers;