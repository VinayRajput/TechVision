import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RouteConfig from './routes/routeConfig'

function App () {
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <RouteConfig />
      <div className="container">
        <footer className="col-md-12">
          &copy; Copyright All right reserved.
      </footer>
      </div>
      </div>
    </div>
  );
}

export default App;
