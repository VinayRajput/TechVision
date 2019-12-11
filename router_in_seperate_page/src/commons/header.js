
import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';


class Header extends Component{

    render(){

        return(<div> 

    <nav>
               <NavLink className="main-anchor" to="/about">About US </NavLink>
               <NavLink className="main-anchor" to="/users">Users List</NavLink>
               <NavLink className="main-anchor" to="/user">User Entry</NavLink>
               
            </nav>

        </div>)
    }

}

export default Header;
