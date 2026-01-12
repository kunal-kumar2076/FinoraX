import React, { useState } from 'react';
import './Login.css'; // Import the dedicated CSS file
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email:'',
    password:'',
  });

  // state for handling loading ,success,and error message
  const [error, setError] = useState(null);
  const [message,setMessage] = useState(null);
  const [isLoading , setIsLoading] = useState(false);

  // handler to update stste on input change
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name] : value,
    }));
  };  

    // handler for form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);
      setMessage(null);
      setIsLoading(true);

      try{
      const response = await fetch("http://localhost:3002/login",{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // parse the JSON response body
      const data = await response.json();
      if(!response.ok){
        setError(data.message || 'Login failed. please try again.');
      } else {
        setMessage(data.message || 'Login successful!');

        window.location.href = "http://localhost:3001/";
      }
    } catch(err) {
      console.error("Login Error",err);
      setError("Server Error.Try again");
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Sign in to your **FinoraX** account</p>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your registered email"
              required
              disabled={isLoading}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </a>
          </div>

          <button 
           type="submit" 
           className="login-button"
           disabled={isLoading}
           >
            {isLoading ? 'Logging In...' : 'Login'}
          </button>
        </form>

        <p className="login-footer">
          Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;