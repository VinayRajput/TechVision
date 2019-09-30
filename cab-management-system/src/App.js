import React, { Component } from 'react';
import Drivers from './components/drivers';
import Vehicles from './components/vehicles';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor () {
    super();
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
        <hr/>
        <Vehicles serverConfig={this.state.serverConfig} />
      </div>
    )
  };
}

export default App;
