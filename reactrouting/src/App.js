import React from 'react';
import './App.css';
import RouteConfig from './RouteConfig';
import HeaderPart from './header';
import FooterPart from './footer';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <HeaderPart />
        <div className="bodyPart">
          <RouteConfig />
        </div>
        <FooterPart />
      </div>
    );
  }
}

export default App;
