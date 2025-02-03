import { useEffect, useState } from 'react';
// Use your base URL as a variable:
const BASE_URL = 'https://jordan.agoxn.cloud';

export default function MyAccount() {
  // Local state
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // For Register
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    fname: '',
    lname: '',
    mobile: '',
  });

  // For Login
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // On mount, load token & user from localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem('access_token');
    const savedUser = localStorage.getItem('user');
    if (savedToken) {
      setToken(savedToken);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  // --------------------------------------------
  //  Helper: Refresh Token
  // --------------------------------------------
  const refreshToken = async () => {
    try {
      const oldToken = localStorage.getItem('access_token');
      if (!oldToken) return null;

      // Call the refresh endpoint
      const response = await fetch(`${BASE_URL}/api/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${oldToken}`,
        },
      });

      if (!response.ok) {
        // If refresh fails (401, 403, or any error), logout
        handleLogout();
        return null;
      }

      const data = await response.json();
      const newToken = data.access_token;

      // Save the new token in localStorage
      localStorage.setItem('access_token', newToken);
      setToken(newToken);

      return newToken;
    } catch (error) {
      console.error('Refresh token error:', error);
      handleLogout();
      return null;
    }
  };

  // --------------------------------------------
  //  Helper: Fetch with Token & Refresh Logic
  // --------------------------------------------
  const fetchWithToken = async (url, options = {}) => {
    const currentToken = localStorage.getItem('access_token');
    if (!currentToken) {
      // No token, so can't proceed
      return { ok: false, status: 401 };
    }

    // Attach the current token to the headers
    if (!options.headers) {
      options.headers = {};
    }
    options.headers['Authorization'] = `Bearer ${currentToken}`;

    let response = await fetch(url, options);

    // If unauthorized or forbidden, attempt a token refresh
    if (response.status === 401 || response.status === 403) {
      const newToken = await refreshToken();
      if (!newToken) {
        // Refresh failed -> user is logged out
        return response;
      }

      // Retry the original request with the new token
      options.headers['Authorization'] = `Bearer ${newToken}`;
      response = await fetch(url, options);
    }

    return response;
  };

  // ---------------------------
  //  REGISTER HANDLER
  // ---------------------------
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert('Registration Failed: ' + JSON.stringify(errorData));
        return;
      }

      const data = await response.json();
      alert('Registration successful! You can now log in.');
      // Clear the register form
      setRegisterData({
        email: '',
        password: '',
        fname: '',
        lname: '',
        mobile: '',
      });
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  // ---------------------------
  //  LOGIN HANDLER
  // ---------------------------
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert('Login Failed: ' + JSON.stringify(errorData));
        return;
      }

      const data = await response.json();
      // Save token and user data in localStorage
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setToken(data.access_token);
      setUser(data.user);

      // Clear login form
      setLoginData({ email: '', password: '' });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // ---------------------------
  //  LOGOUT HANDLER
  // ---------------------------
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  // --------------------------------------------
  //  Demo: Call a Protected Endpoint
  // --------------------------------------------
  const handleTestProtected = async () => {
    try {
      // This can be any protected API route on your server
      // For demonstration, we'll call GET /api/protected
      const response = await fetchWithToken(`${BASE_URL}/api/protected`, {
        method: 'GET',
      });

      if (!response.ok) {
        // Show error or handle
        alert(`Protected endpoint failed. Status: ${response.status}`);
        return;
      }

      const data = await response.json();
      alert('Protected endpoint success! Response: ' + JSON.stringify(data));
    } catch (error) {
      console.error('Protected endpoint error:', error);
    }
  };

  // --------------------------------------
  //  RENDER: IF LOGGED IN -> My Account
  //            ELSE -> Forms
  // --------------------------------------
  if (token) {
    // Logged In
    return (
      <div style={{ margin: '2rem' }}>
        <h1>My Account</h1>
        <p>Welcome, {user?.fname} {user?.lname}</p>
        <p>Email: {user?.email}</p>
        <p>Mobile: {user?.mobile}</p>

        <button onClick={handleTestProtected}>Test Protected Endpoint</button>
        <br /><br />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  // Not Logged In -> Show Register & Login
  return (
    <div style={{ margin: '2rem' }}>
      <h1>Register Account</h1>
      <form onSubmit={handleRegisterSubmit}>
        <label>First Name</label>
        <input
          type="text"
          value={registerData.fname}
          onChange={(e) => setRegisterData({ ...registerData, fname: e.target.value })}
          required
        />
        <label>Last Name</label>
        <input
          type="text"
          value={registerData.lname}
          onChange={(e) => setRegisterData({ ...registerData, lname: e.target.value })}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={registerData.email}
          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={registerData.password}
          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
          required
        />
        <label>Mobile</label>
        <input
          type="text"
          value={registerData.mobile}
          onChange={(e) => setRegisterData({ ...registerData, mobile: e.target.value })}
          required
        />
        <button type="submit">Register</button>
      </form>

      <hr />

      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
