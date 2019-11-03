import React from 'react';
import { NavLink } from 'react-router-dom';

export default  class Header extends React.Component {
   render () {
      return(<div>
         <div className="container text-center">
               <ul className="nav">
                  <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                  <li className="nav-item"><NavLink to="/drivers" className="nav-link">Drivers</NavLink></li>
                  <li className="nav-item"><NavLink to="/vehicles" className="nav-link">Vehicles</NavLink></li>
               </ul>
         </div>
      </div >)
   }
}