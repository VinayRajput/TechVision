import React from 'react';
import Product from './components/Product2.js';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
//import Session from './components/Session';

class  App extends React.Component {
  constructor(){
    super();
    this.state = {
      candidates:[]
    }
  }
  render(){
    return (
      <div>
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
       <Product/>
      {/* <Session/> */}
      </div>
    )
  }

}
export default App;