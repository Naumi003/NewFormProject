// src/SimpleForm.js
import React, { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (formData.password.length < 6)
      formErrors.password = "Password must be at least 6 characters";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form data:", formData);
      // Handle form submission
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div style={{ color: "red" }}>{errors.name}</div>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div style={{ color: "red" }}>{errors.password}</div>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="message">Message:</label>
              </td>
              <td>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div style={{ color: "red" }}>{errors.message}</div>
                )}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default SimpleForm;
