import React from 'react';
import {NavLink} from 'react-router-dom';
class Drivers extends React.Component {

   render () {
      let id=1;
      return (
         <div className="driverlist"> Drivers list
            <nav>
               <NavLink to="/drivers/list">List</NavLink>
               <NavLink to="/drivers/edit/{id}">Edit</NavLink>
            </nav>
         </div>
      )
   }
}

export default Drivers;
