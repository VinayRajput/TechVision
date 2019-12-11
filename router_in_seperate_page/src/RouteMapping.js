import React,{Component} from 'react';
import UserDashboard from './users/userdashboard';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';

class RouteMapping extends Component{
render(){

        const history = createHistory();
        return (
            <Router history={history}>
                <Route path="/" component={UserDashboard}/>
            </Router>

        );
}
}
export default RouteMapping;
