import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import history from '../history';

export default class Login extends React.Component {

   constructor () {
      super();
      this.state = {
         serverConfig: {
            host: "http://localhost:8080"
         }
      }
   };

   login = () => {
      //debugger;
      //history.push('/drivers', { some: 'state' });
      fetch(this.state.serverConfig.host + '/auth/login', {
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
            <Button type="button"  variant="primary" onClick={this.login}>
               Submit
               </Button>
         </Form>
      </div>)
   }
}