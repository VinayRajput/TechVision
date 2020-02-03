import React from 'react';
import { Route, Router } from 'react-router';
import Courses from '../component/courses.component';
import Header from '../header';
import Index from '../component/index.component';
import history from '../history';

export default class RouteConfig extends React.Component {
   render () {
      return (<div>
         
         <Router history={history}>
            <Header></Header>
            <Route path="/" exact component={Index} />
            <Route path="/courses" exact component={Courses} />
         </Router>
      </div>)
   }
}

//export default RouteConfig;

