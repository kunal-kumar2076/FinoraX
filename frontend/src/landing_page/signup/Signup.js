import React, {useState} from 'react';
import "./Signup.css";
import {Link} from "react-router-dom";

const API_URL = "https://finorax-backend-b650.onrender.com";

function Signup() {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password: "",
    confirmPassword: ""
  });

  const [error,setError] = useState("");
  const [message,setMessage] = useState("");

  // handle input value

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // submit data to backend

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const {name,email,password,confirmPassword} = formData;

    // validations
    if(!name || !email || !password || !confirmPassword){
      setError("All fields are required");
      return;
    }
    if(password !== confirmPassword){
      setError("Password do not match");
      return;
    }

    try{
      const response = await fetch(`${API_URL}/signup`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          name,
          email,
          password
        })
      });

      const data = await response.json();

      if(!response.ok){
        setError(data.message);
        return;
      }

      setMessage("Signup successful Redirecting...");

      setTimeout(() => {
        window.location.href = "/login";
      },1500);
    } catch(err){
      console.error("Signup Error",err);
      setError("server Error. Try again");
    }
  };

    return ( 
        <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join FinoraX and start trading smartly</p>

        {error && <p className='error-message'>{error}</p>}
        {message && <p className='success-message'>{message}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        <p className="signup-footer">
          Already have an account? <Link to="/login" className="login-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
