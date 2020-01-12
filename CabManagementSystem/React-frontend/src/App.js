import React, { Component } from 'react';
import RouteConfig from './RouteConfig'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      serverConfig: {
        host: 'http://localhost:8080'
      }
    };
  }

  render () {
    return (
      <div className="App">
        <RouteConfig serverConfig={this.state.serverConfig} />
      </div>
    )
  };
}

export default App;
