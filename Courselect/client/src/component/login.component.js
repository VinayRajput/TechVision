import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import history from '../history';

class Login extends React.Component {

   constructor () {
      super();
      this.state = {
         serverConfig: {
            host: "http://localhost:8080"
         }
      }
   };


   componentDidMount () {
      if (localStorage.sessionID) {
         this.authenticateUser(localStorage.sessionID);
      }
   }

   authenticateUser = (sessID) => {
      let bodyData = JSON.stringify({
         sessID: localStorage.sessionID
      });
      this.postMethod(this.state.serverConfig.host + `/auth/userAuth`, bodyData)
         .then(res => res.json())
         .then(res => {
            if (res.auth === "valid") {

            }
         })
   }

   postMethod = (url, body) => {
      return fetch(url, {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         mode: 'cors', // no-cors, *cors, same-origin
         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
         credentials: 'same-origin', // include, *same-origin, omit
         headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         redirect: 'follow', // manual, *follow, error
         referrerPolicy: 'no-referrer' // no-referrer, *client
         , body: body
      })
   }

   login = (event) => {
      event.preventDefault();
      //fetch(this.state.serverConfig.host + `/auth/login?email=${this.refs.username.value}&pwd=${this.refs.password.value}`
      let bodyData = JSON.stringify({
         email: this.refs.username.value,
         pwd: this.refs.password.value
      });

      this.postMethod(this.state.serverConfig.host + `/auth/login`, bodyData)
         .then(res => res.json())
         .then(res => {
            localStorage.setItem('sessionID', res.sessionID);
            if (res.status === "success") {
               history.push("/drivers", {});
            }
         })
   }

   render () {
      return (<div className="col-md-6 container p-3 my-3">
         <Form>
            <Form.Group controlId="formBasicEmail">
               <Row>
                  <Col>
                     <Form.Label>Email address</Form.Label>
                  </Col>
                  <Col>
                     <Form.Control type="email" placeholder="Enter email" ref="username" />
                     <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                  </Col>
               </Row>

            </Form.Group>
            <Form.Group controlId="formBasicPassword">
               <Row>
                  <Col>
                     <Form.Label>Password</Form.Label></Col>
                  <Col>
                     <Form.Control type="password" placeholder="Password" ref="password" />
                  </Col>
               </Row>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button type="button" variant="primary" onClick={this.login}>
               Submit
               </Button>
         </Form>
      </div>)
   }
}

export default Login;