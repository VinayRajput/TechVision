import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import history from './history';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Drivers from './components/drivers';
import Vehicles from './components/vehicles';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import EditDriver from './components/drivers/edit';

const routing = (
   <Router history={history}>
      <div>
         <div className="container text-center">
            <ul className="nav">
               <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
               <li className="nav-item"><Link to="/drivers" className="nav-link">Drivers</Link></li>
               <li className="nav-item"><Link to="/vehicles" className="nav-link">Vehicles</Link></li>
            </ul>
         </div>

         <Route path="/" exact component={App} />
         <Route path="/dashboard" component={Dashboard} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/drivers" component={Drivers} />
         <Route path="/vehicles" component={Vehicles} />
         <Route path="/drivers/edit/:id" component={EditDriver} />

      </div>
   </Router>
);
/* <Route path="/add-drivers" component={AddDrivers} /> */
/* <Route path="/add-vehicles" component={AddVehicles} /> */
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
