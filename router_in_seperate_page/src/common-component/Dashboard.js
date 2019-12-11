import React, {Component} from 'react';
import Routes from '../router-example/routes';
import {NavLink} from 'react-router-dom';

import './dasboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="main">
                <h4>React Router - Report App</h4>
                <nav>
                   <NavLink 
                       className="main-anchor" to="/about">
                       About
                   </NavLink>
                   <NavLink 
                       className="main-anchor"    
                       to="/users">
                       Users
                   </NavLink>
                   <NavLink 
                       className="main-anchor"    
                       to="/user">
                       User
                   </NavLink>
                   
                </nav>
                <div>
                    <Routes/>
                </div>
            </div>
        );
    }
}

export default Dashboard;