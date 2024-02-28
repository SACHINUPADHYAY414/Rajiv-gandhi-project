import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    title: "",
    gender: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    dateOfBirth: null,
    emailAddress: "",
    country: "",
    address: "",
    state: "",
    district: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateOfBirth: date,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/", formData);
      console.log("API Response:", response.data);
      
      setFormData({
        title: "",
        gender: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        dateOfBirth: null,
        emailAddress: "",
        country: "",
        address: "",
        state: "",
        district: "",
        city: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="register__backdrop"></div>
      <Form className="shadow p-4 bg-blur rounded" onSubmit={handleSubmit}>
        <div className="h4 mb-2 text-center">Registration Form</div>
        
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            as="select"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss">Miss</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        

        <Form.Group controlId="mobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </Form.Group>


        <Form.Group controlId="dateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <DatePicker
            selected={formData.dateOfBirth}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            maxDate={new Date()}
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            dropdownMode="select"
            className="form-control"
            placeholderText="Select Date of Birth"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country*</Form.Label>
          <Form.Control
            as="select"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>

          </Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address*</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        

        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="State 1">State 1</option>
            <option value="State 2">State 2</option>
            <option value="State 3">State 3</option>

          </Form.Control>
        </Form.Group>

        <Form.Group controlId="district">
          <Form.Label>District</Form.Label>
          <Form.Control
            as="select"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="District 1">District 1</option>
            <option value="District 2">District 2</option>
            <option value="District 3">District 3</option>
 
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            as="select"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="City 1">City 1</option>
            <option value="City 2">City 2</option>
            <option value="City 3">City 3</option>
           
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default Register;
