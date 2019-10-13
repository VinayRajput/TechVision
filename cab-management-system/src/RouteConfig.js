import React from 'react';
import {Route, Router} from 'react-router';
import history from './history';
import Dashboard from './components/dashboard';
import EditDriver from './components/drivers/edit';

export default class RouteConfig extends React.Component {
   render(){
      return(
         <Router history={history}>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/drivers/edit/:id"  component={EditDriver}/>
         </Router>
      )
   }
}