import { cookies } from "next/headers";
import { logoutUser } from "./actions";
import RegisterForm from "./register-form";
import LoginForm from "./login-form";
import ContactInfo from "../components/home/contact-info";

const BASE_URL = "https://jordan.agoxn.cloud";

export default async function AccountPage() {
  const headingColor = "#0d6efd";

  // 1) Read token from cookies
  const token = cookies().get("access_token")?.value;

  // Shared container style for columns
  const columnStyle = {
    flex: "1 1 300px", // will shrink or grow, min ~300px
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  // If not logged in -> show two columns (Register + Login)
  if (!token) {
    return (
      <div style={{ margin: "2rem" }}>
        <h1 style={{ color: headingColor, marginBottom: "1rem" }}>My Account</h1>
        <p>You are not logged in.</p>

        {/* Two-column container (wraps on smaller screens) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // allows wrap on small screens
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {/* Left column: Register */}
          <div style={columnStyle}>
            <RegisterForm headingColor={headingColor} />
          </div>

          {/* Right column: Login */}
          <div style={columnStyle}>
            <LoginForm headingColor={headingColor} />
          </div>
        </div>
      </div>
    );
  }

  // 2) If token found, try to fetch user info
  let user = null;
  try {
    const response = await fetch(`${BASE_URL}/api/protected`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!response.ok) {
      // If invalid, show forms
      return (
        <div style={{ margin: "2rem" }}>
          <h1 style={{ color: headingColor }}>Session Invalid</h1>
          <p>Your token may be expired or invalid.</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            <div style={columnStyle}>
              <RegisterForm headingColor={headingColor} />
            </div>
            <div style={columnStyle}>
              <LoginForm headingColor={headingColor} />
            </div>
          </div>
        </div>
      );
    }

    const data = await response.json();
    user = data?.user;
  } catch (error) {
    console.error("Protected endpoint error:", error);
    return (
      <div style={{ margin: "2rem" }}>
        <h1 style={{ color: headingColor }}>Session Error</h1>
        <p>Could not retrieve user data.</p>
      </div>
    );
  }

  // 3) If user is valid, show account info
  if (user) {
    const buttonStyle = {
      backgroundColor: headingColor,
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      marginTop: "1rem",
    };

    return (
      <div style={{ margin: "2rem" }}>
        <h1 style={{ color: headingColor, marginBottom: "1rem" }}>My Account</h1>
        <p>Welcome, {user.fname} {user.lname}</p>
        <p>Email: {user.email}</p>
        <p>Mobile: {user.mobile}</p>

        <form action={logoutUser}>
          <button type="submit" style={buttonStyle}>Logout</button>
        </form>
      </div>
    );
  }

  // Fallback if user is null
  return (
    <div style={{ margin: "2rem" }}>
      <h1 style={{ color: headingColor }}>My Account</h1>
      <p>No user data found.</p>
    </div>
  );

}
