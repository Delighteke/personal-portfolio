// ContactPage.js
// Eke Delight
// 301325470
// Date: 03/03/2024

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to backend)
    console.log(formData);
    // Set submitted to true to trigger redirect
    setSubmitted(true);
  };

  if (submitted) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Contact Me</h1>
      <div>
        <p>Contact information:</p>
        <ul>
          <li>Address: 49 Markville Road, Unionville</li>
          <li>Email: ekedelight@yahoo.com</li>
          <li>Phone: +1 437-473-5769</li>
        </ul>
      </div>
      <h2>Send us a message:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;

