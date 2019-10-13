import React from 'react';
import { NavLink } from 'react-router-dom';

class Dashboard extends React.Component {
   render () {
      return (
         <div>
            <div>
               <nav>
                  <NavLink to="/drivers">Driver</NavLink>
                  <NavLink to="/bookings">Bookings</NavLink>
               </nav>
            </div>
         </div>
      );
   }

}

export default Dashboard;