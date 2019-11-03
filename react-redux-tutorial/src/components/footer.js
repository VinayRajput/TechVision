import React from 'react';

export default class Footer extends React.Component {
   render(){
      return(<footer  className="row text-center text-white mb-5">
            <div className="col-lg-7 mx-auto">
            <p className="lead">Snippet by <a href="https://bootstrapious.com/snippets" className="text-white">
            <u>Bootstrapious</u></a>
         </p>
            </div>
         </footer>)
   }
}