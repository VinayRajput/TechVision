import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
//import util from './util';

class Drivers extends Component {
   constructor (props) {
      super();
      this.state = {
         serverConfig: {
            host: 'http://localhost:8080'
         },
         DriversList: []
      }
      //      util.checkSession(localStorage.getItem('sessionID'));
      this.fetchDriversList();
   }

   static getDerivedStateFromProps (props, state) {
      console.log("getDerivedStateFromProps");
      console.log(props, state);
      return {}
   }

   static shouldComponentUpdate(){
      console.log('Should Component updated');
   }
   componentDidUpdate(){
      console.log('Component updated');
   }

   componentWillUnmount(){ 
      console.log("Component will unmount");
      debugger;
  } 

   componentDidMount(){ 
      console.log("Drivers module loaded");
  } 

   fetchDriversList = () => {
      fetch(this.state.serverConfig.host + '/getDrivers')
         .then(response => response.json())
         .then(data => {
            this.setState({ DriversList: data });
            //console.log(data);
         });
   }

   addDriver = () => {
      let driverObj = new FormData()
      driverObj.append('name', this.refs.name.value);
      driverObj.append('dob', this.refs.dob.value);
      driverObj.append('license', this.refs.license.value);

      axios.post(this.state.serverConfig.host + '/addDriver', driverObj)
         .then(function (response) {
            console.log(response);
         })
         .catch(function (err) {
            console.log(err);
         });
   }

   editDriverDetails = (id) => {
      const driverDetail = this.state.DriversList.filter(driver => driver.id === id)[0];
      this.refs.name.value = driverDetail.name;
      this.refs.dob.value = this.makeDate(driverDetail.dob);
      this.refs.license.value = driverDetail.license;
      this.setState({ 'driverDetailEdited': id });
   }

   editDriverProfile = (id) => {
      fetch(this.state.serverConfig.host + `/getDriver/${id}`)
         .then(res => res.json())
         .then(res => this.setState({ driverProfileToEdit: res }));
   }

   imgBase64 = (file, url) => {
      let img = new Image();
      let ctx = new CanvasRenderingContext2D();

      img.onload = function () {
         ctx.drawImage(this, 0, 0, 600, 600,       // `this` is now image
            0, 0, 200, 200);
         // this line needs to go here
         var dataImg = this.refs.canvas.toDataURL(); // note `me` being used here
         console.log(dataImg);
         // consider a callback to pass result to next function in chain
      };
      // set src last
      img.src = url;
   }

   updateDriver = () => {

      let driverObj = new FormData()
      //driverObj.append('name',this.refs.name.value);
      //driverObj.append('dob',this.refs.dob.value);
      //driverObj.append('license',this.refs.license.value);

      //debugger;
      //driverObj.append(this.refs.photo.files[0].name.split('.')[0],this.refs.photo.files[0]);

      for (let file of this.refs.documents.files) {
         //driverObj.append("icons", file);
         driverObj.append(file.name.split('.')[0], file);
      }
      axios.post(this.state.serverConfig.host + '/updateDriver', driverObj)
         .then(function (response) {
            console.log(response);
         })
         .catch(function (err) {
            console.log(err);
         });


   }

   makeDate = (data) => {
      var date = new Date(data);
      var month = date.getMonth() + 1;
      return date.getDate() + "/" + (month.toString().length > 1 ? month : "0" + month) + "/" + date.getFullYear();
   }

   getDate = (dateStr) => {
      const date = dateStr.split('/');
      const dbDate = `${date[2]}-${(date[1] < 10) ? '0' + parseInt(date[1]) : date[1]}-${(date[0] < 10) ? '0' + parseInt(date[0]) : date[0]}`;
      return dbDate;
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

                        {/*<button className="btn btn-link btn-sm" onClick={() => { this.editDriverDetails(driver.id) }}>Edit</button>&nbsp; */}

                        <NavLink to={`/edit/${driver.id}`}>Edit</NavLink>
                        <button className="btn btn-link btn-sm no-padding" onClick={
                           () => { this.deleteDriver(driver.id) }
                        }>Delete</button>
                     </div>
                  </div>
               )}</div>
         </div>)
   }
}
export default Drivers;