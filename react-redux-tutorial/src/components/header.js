import React from 'react';

export default class Header extends React.Component {
   render () {
      return (<header className="container py-5">
         <div className="row text-center text-white mb-5">
            <div className="col-lg-7 mx-auto">
               <h1 className="display-4"><br />Product Listing</h1>
            </div>
         </div>
      </header>)
   }
}