import React from 'react';

class Register extends React.Component{

   constructor(props){
      super();
   }

   saveToLocal= ()=>{
      debugger;
      let obj = {
         username: this.refs.username.value,
         email:  this.refs.email.value,
         password: this.refs.password.value
      }
      localStorage.setItem('newRegistration', JSON.stringify(obj) );
      this.props.registerUser();
   }

   render(){
      return(
         <div id="registerForm" >
      <div className="form-group">
         <input type="text" ref="username" required="required" id="reg-username" className="form-control" placeholder="Username"  />
      </div>
      <div className="form-group">
         <input type="email" ref="email" required="required" id="email" className="form-control" placeholder="Email Address"  />
      </div>
      <div className="form-group">
         <input type="password" required="required" ref="password" id="reg-password" className="form-control" placeholder="Password" />
      </div>
      <div className="form-group">
         <input type="password" required="required" ref="confirm-password" id="reg-confirm-password" className="form-control" placeholder="Confirm Password" />
      </div>
      <div className="form-group">
         <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
               <input type="button" ref="register-submit" id="register-submit"  className="form-control btn btn-register" value="Register Now" onClick={this.saveToLocal}  />
            </div>
         </div>
      </div>
      </div>
   )
   }


}

export default Register;