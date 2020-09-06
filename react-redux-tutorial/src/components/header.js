import React from 'react';
import { Link } from "react-router-dom";
import Cart from '../components/cart';
import ProductListing from '../components/productListing';

export default class Header extends React.Component {
   render () {
      return (<header className="container py-5">
         <div className="row text-center text-white mb-5">
            <div className="col-lg-7 mx-auto">
               <h1 className="display-4">Product Listing</h1>
               <nav>
                  <ul className="navbar">
                     <li className="nav"><Link to="/">Products</Link></li>
                     <li className="nav"><Link to="/cart">Cart</Link></li>
                  </ul>
               </nav>
               
            </div>
         </div>
      </header>)
   }
}