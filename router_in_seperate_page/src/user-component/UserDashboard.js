import React, {Component} from 'react';

import {Route} from 'react-router';
import {NavLink} from 'react-router-dom';

import About from '../common-component/About';
import Users from '../user-component/Users';
import User from '../user-component/User';

import './dashboard.css';


class UserDashboard extends Component {
    render() {
        return (
            <div className="main">
                <h4>React Router - Report App</h4>
                <nav>
                   <NavLink className="main-anchor" to="/about">About</NavLink>
                   <NavLink className="main-anchor" to="/users">Users</NavLink>
                   <NavLink className="main-anchor" to="/user">User</NavLink>
                   
                </nav>
                <div>
                            
                        <Route path="/about" component={About}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/user" component={User}/>
                            
                </div>
            </div>
        );
    }
}

export default UserDashboard;