import React from 'react';
import { Route, Router } from 'react-router';
import history from './history';
import Dashboard from './components/dashboard';
import EditDriver from './components/drivers/edit';
import Login from './components/login';
import Register from './components/register';
import Drivers from './components/drivers';
import Vehicles from './components/vehicles';
import Header from './header';
import Footer from './footer';

export default class RouteConfig extends React.Component {
   render () {
      return (
         <Router history={history}>
               <Header/>
            <div>
               <Route path="/" exact component={Dashboard} />
               <Route path="/dashboard" component={Dashboard} />
               <Route path="/login" component={Login} />
               <Route path="/register" component={Register} />
               <Route path="/drivers" component={Drivers} />
               <Route path="/vehicles" component={Vehicles} />
               <Route path="/edit/:id" component={EditDriver} />
            </div>
               <Footer/>
         </Router>
      )
   }
}