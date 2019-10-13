import React from 'react';
class Register extends React.Component {

   constructor () {
      super();
      this.state={
         serverConfig: {
            host: 'http://localhost:8080'
         }
      };
   }

   register = () => {
      fetch(this.state.serverConfig.host+'/register',{
         method:'post',
         body:JSON.stringify({
            name:this.refs.name.value,
            email:this.refs.username.value, pwd:this.refs.password.value
         }),
         headers:{'Content-Type':'application/json'}
      })
      //.then(res => res.json())
      .then(res =>{
         console.log(res);
      })
   }

   render () {
      return (<div>
         <div id="login">
            <h3 className="text-center text-white pt-5">Registration</h3>
            <div className="container">
               <div id="login-row" className="row justify-content-center align-items-center">
                  <div id="login-column" className="col-md-6">
                     <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                           <h3 className="text-center text-info">Registration</h3>

                           <div className="form-group">
                              <label htmlFor="name" className="text-info">Name :</label><br />
                              <input type="text" ref="name" name="name" id="name" className="form-control" />
                           </div>

                           <div className="form-group">
                              <label htmlFor="username" className="text-info">Email:</label><br />
                              <input type="text" ref="username" name="username" id="username" className="form-control" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="password" className="text-info">Password:</label><br />
                              <input type="text" ref="password" name="password" id="password" className="form-control" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                              <input type="button" onClick={this.register} name="submit" className="btn btn-info btn-md" value="submit" />
                           </div>
                           <div id="register-link" className="text-right">
                              <a href="/register" className="text-info">Register here</a>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>)
   }
}
export default Register;
