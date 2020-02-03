import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
   render () {
      return (<div className="col-md-12"><header>
         <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
               <li className="nav-item"><NavLink className="nav-link"  to="/">Home</NavLink></li>
               <li><NavLink className="nav-link" to="/courses">Courses</NavLink></li>
            </ul>
         </nav>
      </header></div>)
   }
}
export default Header;