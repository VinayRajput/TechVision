import React, {Component} from 'react';
import {Route, Router} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './components/dashboard';
import Drivers from './components/drivers';
import Bookings from './components/bookings';
import DriversList from './components/drivers/list';
import EditDriver from './components/drivers/edit';

class RouterConfig extends Component {

   render(){
      const history = createHistory();
      return(
         <Router history={history}>
            <Route path="/" component={Dashboard} />
            <Route path="/drivers" component={Drivers} />
            <Route path="/bookings" component={Bookings} />
            <Route path="/drivers/list" component={DriversList} />
            <Route path="/drivers/edit/:id" component={EditDriver} />
         </Router>
      )
   }
}

export default RouterConfig;