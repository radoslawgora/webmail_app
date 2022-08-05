import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css";

const Login = (props) =>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  
  function handleSubmit() {
      if (email === "test" && password === "test") {
        nav("/home");
      } else {
        alert("Invalid login or password! Try test@test");
      }
  }
  
  
  return(
      <div className="container">
          <h1 className="m-3">webmail_app</h1>
          <div className="Login">
            <Form className="form" onSubmit={handleSubmit}>
              <Form.Group className="m-3" size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="m-3" size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button className="mt-3" block size="lg" type="submit">
                Login
              </Button>
            </Form>
          </div>
      </div>
     )
  }
  export default Login;