"use client";

import React, { useState } from "react";
import { loginUser } from "./actions";

export default function LoginForm({ headingColor }) {
  const [error, setError] = useState(null);

  // Match headingColor
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
    width: "60%",         // 60% of container
    margin: "0 auto",     // center horizontally
    display: "block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "0.4rem",
    marginBottom: "0.8rem",
  };

  async function handleSubmit(formData) {
    setError(null);
    try {
      const result = await loginUser(formData);
      if (result.success) {
        window.location.reload();
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form action={handleSubmit}>
      <h2 style={{ marginBottom: "1rem", color: headingColor }}>Login</h2>

      <label>Email</label>
      <input name="email" type="email" required style={inputStyle} />

      <label>Password</label>
      <input name="password" type="password" required style={inputStyle} />

      {/* Forgot Password link */}
      <a
        href="#"
        style={{
          fontSize: "0.9rem",
          textDecoration: "underline",
          display: "block",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Forgot Password?
      </a>

      <button type="submit" style={buttonStyle}>Login</button>
      {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}
    </form>
  );
}
