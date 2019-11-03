import Drivers from './components/drivers';
import React from 'react';
import { Nav, NavLink } from 'react-router-dom';
class HeaderPart extends React.Component {

   render () {
      return (
         <header> Header
            <nav>
               <NavLink to="/drivers">Driver</NavLink>
               <NavLink to="/bookings">Bookings</NavLink>
            </nav>
         </header>
      )
   }
}

export default HeaderPart;
