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
      // Make API call
      const response = await fetch("YOUR_API_ENDPOINT", {
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
      console.log(data); // Log the response from the API

      // Handle success or failure response from API
      if (response.ok) {
        // Handle success, maybe set token in localStorage and redirect user
      } else {
        // Handle failure, show error message
        setShow(true);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error, show error message
      setShow(true);
    }
    setLoading(false);
  };

  // Function to handle forgot password form submission
  const handleForgotPassword = async () => {
    // Implement logic to handle forgot password, e.g., send reset password link or OTP
    console.log("Forgot password logic here");
  };

  return (
    <div
      className="log-in__wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Overlay */}
      <div className="log-in__backdrop"></div>
      
      {/* Form */}
      <Form className="shadow p-4 bg-blur rounded" onSubmit={handleSubmit}>
        {/* Header */}
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
            onClick={() => { /* Logic to navigate to the registration page */ }}
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
          {/* Header */}
          <div className="h4 mb-2 text-center">Forgot Password</div>
          {/* Implement forgot password form inputs here */}
          <Form.Group className="mb-2" controlId="mobile">
            <Form.Label>Enter your mobile number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile"
              required
              // onChange={(e) => handleMobileChange(e.target.value)}
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

