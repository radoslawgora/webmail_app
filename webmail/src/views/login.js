import * as React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css";

function Login() {
    return (
      <>
        <div className="container">
        <main>
            <h2>Login page</h2>
        </main>
        <div className="formContainer">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        <Link to="/home"  className="submitLink">Log in</Link>
                    </Button>
            </Form>
        </div>
        </div>
      </>
    );
  }

  
  export default Login;