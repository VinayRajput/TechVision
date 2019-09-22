import React from 'react';

class Login extends React.Component {

   constructor(props){
      super();
   }

   saveToLocal =()=>{
      let obj = {
         username: this.refs.username.value,
         email:  this.refs.email.value,
         password: this.refs.password.value
      }
      localStorage.setItem('newLogin', JSON.stringify(obj) );
      this.props.loginCall();
   }

   render(){
      return(<div id="loginForm">
                  
                             <div className="form-group">
                                <input type="text" required="required" ref="username" id="username" className="form-control" placeholder="Username"  />
                             </div>
                             <div className="form-group">
                                <input type="password" required="required" ref="password" id="password" className="form-control" placeholder="Password" />
                             </div>
                             <div className="form-group text-center">
                                <input type="checkbox"  className="" ref="remember" id="remember" />
                                <label htmlFor="remember"> Remember Me</label>
                             </div>
                             <div className="form-group">
                                <div className="row">
                                   <div className="col-sm-6 col-sm-offset-3">
                                      <input type="button" ref="login-submit" id="login-submit" className="form-control btn btn-login" value="Log In" onClick={this.props.loginCall} />
                                   </div>
                                </div>
                             </div>
                             <div className="form-group">
                                <div className="row">
                                   <div className="col-lg-12">
                                      <div className="text-center">
                                         <a href="https://phpoll.com/recover" className="forgot-password">Forgot Password?</a>
                                      </div>
                                   </div>
                                </div>
                             </div>
                         
         </div>)
   }
}

export default Login;