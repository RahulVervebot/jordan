"use client";

import React, { useState } from "react";
import { registerUser } from "./actions";

export default function RegisterForm({ headingColor }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Match heading color
  const buttonStyle = {
    backgroundColor: headingColor,
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    marginTop: "1rem",
  };

  // Common style for each input
  const inputStyle = {
    width: "60%",
    margin: "0 auto",
    display: "block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "0.4rem",
    marginBottom: "0.8rem",
  };

  async function handleSubmit(formData) {
    setError(null);
    setSuccess(false);

    try {
      const result = await registerUser(formData);
      if (result.success) {
        setSuccess(true);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form action={handleSubmit}>
      <h2 style={{ marginBottom: "1rem", color: headingColor }}>Register</h2>

      <label>First Name</label>
      <input name="fname" type="text" required style={inputStyle} />

      <label>Last Name</label>
      <input name="lname" type="text" required style={inputStyle} />

      <label>Email</label>
      <input name="email" type="email" required style={inputStyle} />

      <label>Password</label>
      <input name="password" type="password" required style={inputStyle} />

      <label>Mobile</label>
      <input name="mobile" type="text" required style={inputStyle} />

      <button type="submit" style={buttonStyle}>Register</button>

      {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}
      {success && <p style={{ color: "green", marginTop: "0.5rem" }}>Registration successful!</p>}
    </form>
  );
}
