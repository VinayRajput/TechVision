import React from 'react';
import Login from './Login';
import Register from './Register';


class Session extends React.Component {

   constructor(){
      super();
      this.state = {
         "sessions":[]
      }
   }

  register = ()=>{
      let obj = localStorage.getItem('newRegistration');
      let foundUser = this.state.sessions.filter(item => item.email === obj.email )
      if(foundUser){
         // Return a message a user already registered with email id
         alert('User is alrady registered with this email id'+obj.email);
      }
      else {      
            this.state.sessions.push(obj);
      }
  }

  login = () =>{
   let obj = localStorage.getItem('newLogin');
   let foundUser = this.state.sessions.filter(item => item.email === obj.email )
      if(foundUser){
         // inform login is successful
         alert('Login is successful');
      }
  }

   render(){
      return(
         <div>
         <div className="container">
         <div className="row">
           <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-login">
                 <div className="panel-heading">
                 <div className="row">
                 <div className="col-xs-6">
                    <a href="#" className="active" id="login-form-link">Login</a>
                 </div>
                 <div className="col-xss-6">s
                    <a href="#" id="register-form-link">Register</a>
                 </div>
                 </div>
                    <hr/>
                 </div>
                 <div className="panel-body">
                    <div className="row">
                       <div className="col-lg-12">
                          <Login loginCall={this.login}/>
                          <Register registerUser={this.register}/>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
         </div>
      );
   }
}
export default Session;