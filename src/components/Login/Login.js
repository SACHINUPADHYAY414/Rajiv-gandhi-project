import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";
import BackgroundImage from "../../assets/images/background.png";
import Logo from "../../assets/images/logo.png";

const Login = () => {
  const [inputMobile, setInputMobile] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false); 
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: inputMobile,
          password: inputPassword,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
      } else {
        setShow(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setShow(true);
    }
    setLoading(false);
  };

  const handleForgotPassword = async () => {
    console.log("Forgot password logic here");
  };

  return (
    <div
      className="log-in__wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
     
      <div className="log-in__backdrop"></div>
  
      <Form className="shadow p-4 bg-blur rounded" onSubmit={handleSubmit}>
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Member Log In</div>
        {/* Alert */}
        {show && (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect Mobile or password.
          </Alert>
        )}
        <Form.Group className="mb-2" controlId="Mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            value={inputMobile}
            placeholder="Mobile"
            onChange={(e) => setInputMobile(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check
            type="checkbox"
            label="Remember me"
            checked={rememberMe} 
            onChange={() => setRememberMe(!rememberMe)} 
          />
        </Form.Group>

        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}

        <Button 
            className="text-muted px-0 mt-2" 
            variant="link"
            onClick={() => {  }}
          >
            Create New Account
          </Button>
          
        <div className="d-grid justify-content-end">
          <Button color="white"
            className="text-muted px-0"
            variant="link"
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot password?
          </Button>
        </div>
      </Form>

      {/* Forgot Password Form */}
      {showForgotPassword && (
        <Form className="shadow p-4 bg-blur rounded" onSubmit={handleForgotPassword}>
       
          <div className="h4 mb-2 text-center">Forgot Password</div>
         
          <Form.Group className="mb-2" controlId="mobile">
            <Form.Label>Enter your mobile number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile"
              required
            />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Send Reset Link
          </Button>
        </Form>
      )}
      </div>
  );
};

export default Login;

