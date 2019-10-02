import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Drivers from './components/drivers';
import Vehicles from './components/vehicles';

const routing = (
   <Router>
      <div>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/drivers">Drivers</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
         </ul>
         <Route path="/" exact component={App} />
         <Route path="/drivers" component={Drivers} />
         <Route path="/vehicles" component={Vehicles} />
      </div>
   </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
