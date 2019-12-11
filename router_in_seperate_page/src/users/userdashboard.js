
import React,{Component} from 'react';
import About from '../commons/about';
import Users from './users';
import User from './user';


import {Route} from 'react-router';
import {NavLink} from 'react-router-dom';

import Header from '../commons/header';

class UserDashboard extends Component{

    render(){
        return(
            <div className="main">
            <h4>React Router - Report App</h4>
            
                    <Header/>
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
