import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import UserDashboard from './user-component/UserDashboard';


class AppRoute extends Component {
    render() {
        const history = createHistory();
        return (
            <Router history={history}>
                <Route path="/" component={UserDashboard}/>
            </Router>
        );
    }
}

export default AppRoute;