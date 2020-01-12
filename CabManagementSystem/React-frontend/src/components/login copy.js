import React from 'react';
import { Router } from 'react-router-dom'
import history from '../history';

function login(){
   let state={
      serverConfig: {
         host: 'http://localhost:8080'
      },
      VehiclesList:[]
   };
   history.push("/drivers", {});

   fetch(state.serverConfig.host + '/login', {
      method: 'post',
      body: JSON.stringify({
         email: this.refs.username.value, pwd: this.refs.password.value
      }),
      headers: { 'Content-Type': 'application/json' }
   })
      .then(res => res.json())
      .then(res => {
         localStorage.setItem('sessionID', res.sessionID);
         console.log(res);
         if (res.status === "success") {
            history.push("/drivers", {});
         }
      })
}



function Login () {
   function handleClick () {
      history.push("/dashboard")
   }

   return (<div>
      <div id="login">
         <h3 className="text-center text-white pt-5">Login form</h3>
         <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
               <div id="login-column" className="col-md-6">
                  <div id="login-box" className="col-md-12">
                     <form id="login-form" className="form" action="" method="post">
                        <h3 className="text-center text-info">Login</h3>
                        <div className="form-group">
                           <label htmlFor="username" className="text-info">Username:</label><br />
                           <input type="text" name="username" id="username" className="form-control" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="password" className="text-info">Password:</label><br />
                           <input type="text" name="password" id="password" className="form-control" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                           <input type="button" onClick={login} name="submit" className="btn btn-info btn-md" value="submit" />
                        </div>
                        <div id="register-link" className="text-right">
                           
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>)
}

/* 
function Login(){
      return (<div>
         <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
               <div id="login-row" className="row justify-content-center align-items-center">
                  <div id="login-column" className="col-md-6">
                     <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                           <h3 className="text-center text-info">Login</h3>
                           <div className="form-group">
                              <label htmlFor="username" className="text-info">Username:</label><br />
                              <input type="text" name="username" id="username" className="form-control" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="password" className="text-info">Password:</label><br />
                              <input type="text" name="password" id="password" className="form-control" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                              <input type="button" onClick={login} name="submit" className="btn btn-info btn-md" value="submit" />
                           </div>
                           <div id="register-link" className="text-right">
                              
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>)
} */

/* 
class Login extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         serverConfig: {
            host: 'http://localhost:8080'
         },
      };
   }

   login = () => {
      history.push("/drivers", {});

      fetch(this.state.serverConfig.host + '/login', {
         method: 'post',
         body: JSON.stringify({
            email: this.refs.username.value, pwd: this.refs.password.value
         }),
         headers: { 'Content-Type': 'application/json' }
      })
         .then(res => res.json())
         .then(res => {
            localStorage.setItem('sessionID', res.sessionID);
            console.log(res);
            if (res.status === "success") {
               history.push("/drivers", {});
            }
         })
   }

   render () {
      return (<div>
         <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
               <div id="login-row" className="row justify-content-center align-items-center">
                  <div id="login-column" className="col-md-6">
                     <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                           <h3 className="text-center text-info">Login</h3>
                           <div className="form-group">
                              <label htmlFor="username" className="text-info">Username:</label><br />
                              <input type="text" ref="username" name="username" id="username" className="form-control" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="password" className="text-info">Password:</label><br />
                              <input type="text" ref="password" name="password" id="password" className="form-control" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                              <input type="button" onClick={this.login} name="submit" className="btn btn-info btn-md" value="submit" />
                           </div>
                           <div id="register-link" className="text-right">
                              
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>)
   }
} */
export default Login;
