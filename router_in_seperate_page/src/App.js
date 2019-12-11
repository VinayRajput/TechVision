import React, { Component } from 'react';
import './App.css';

import RouteMapping from './RouteMapping';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Router in seperate page</h1>

        <RouteMapping/>
      </div>
    );
  }
}

export default App;
