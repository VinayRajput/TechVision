import React, { Component } from 'react';
import Drivers from './components/drivers';
import Vehicles from './components/vehicles';
import Login from './components/login';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const routing ={
  '/':Login,
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
        <Login serverConfig={this.state.serverConfig} />
      </div>
    )
  };
}

export default App;
