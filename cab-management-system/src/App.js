import React, { Component } from 'react';
import Drivers from './components/drivers';
import Vehicles from './components/vehicles';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const routing ={
  '/':Drivers,
  '/Drivers':Drivers,
//  '/addDriver':addDrivers,
  '/Vehicles':Vehicles
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      serverConfig : {
        host:'http://localhost:8080'
      }
    };
  }
  render () {
    return (
      <div className="App">
        <Drivers serverConfig={this.state.serverConfig} />
      </div>
    )
  };
}

export default App;
