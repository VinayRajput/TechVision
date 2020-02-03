import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteConfig  from './routes/routes'

class App extends React.Component {
  render () {
    return (<div className="App">
      <RouteConfig />
    </div>
    );
  }
}

export default App;
