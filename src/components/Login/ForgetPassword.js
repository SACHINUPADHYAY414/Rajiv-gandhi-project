import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import BackgroundImage from "../../assets/images/background.png";
import Logo from "../../assets/images/logo.png";

const ForgetPassword = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Function to handle forgot password form submission
  const handleForgotPassword = async (event) => {
    event.preventDefault();
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
      <Form
        className="shadow p-4 bg-blur rounded"
        onSubmit={handleForgotPassword}
      >
        {/* Header */}
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Member Log In</div>

        {/* Link to toggle Forgot Password Form */}
        <Button
          variant="link"
          className="mb-2"
          onClick={() => setShowForgotPassword(!showForgotPassword)}
        >
          Forgot password?
        </Button>

        {/* Forgot Password Form */}
        {showForgotPassword && (
          <Form className="shadow p-4 bg-blur rounded">
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
      </Form>
    </div>
  );
};

export default ForgetPassword;
