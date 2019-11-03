import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './history';
import ProductListing from './components/productListing';
import Header from './components/header';
import Footer from './components/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

export default class RouteConfig extends React.Component {
   render () {
      return (<div>
         <Router history={history}>
            <Header />
            <div className='body'>
               <Route  path="/" exact component={ProductListing} />
            </div>
            <Footer />
         </Router>
      </div>)
   }
}