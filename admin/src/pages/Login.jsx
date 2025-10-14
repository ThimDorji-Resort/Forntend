import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const cardStyle = {
    background: "white",
    padding: "40px",
    borderRadius: "0",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "260px",
    textAlign: "center",
  };

  const logoStyle = {
    width: "180px",
    marginBottom: "25px",
  };

  const formGroupStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "18px",
    textAlign: "left",
  };


  const formGroupStyle1 = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "12px",
    textAlign: "left",
  };
  const labelStyle = {
    marginBottom: "5px",
    color: "#333",
    fontSize: "14px",
    fontWeight: "500",
  };

  const inputStyle = {
    padding: "8px 12px",
    borderRadius: "0",
    border: "1px solid #9E9E9E",
    fontSize: "14px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "4px",
  };

  const forgotStyle = {
    textAlign: "right",
    fontSize: "14px",
    color: "#8F8F8F",
    textDecoration: "none",
    marginBottom: "8px",
    display: "inline-block",
    cursor: "pointer",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "0",
    border: "none",
    backgroundColor: "#006600",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    marginBottom: "5px",
  };

  const buttonHover = (e, hover) => {
    e.target.style.backgroundColor = hover ? "#000000ff" : "#006600";
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login successful!");
          
    // Clear inputs
    setEmail("");
    setPassword("");

      // navigate("/dashboard"); // example navigation
    }
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <img src="/images/logologo.png" alt="Logo" style={logoStyle} />
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p style={errorStyle}>{errors.email}</p>}
          </div>

          <div style={formGroupStyle1}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p style={errorStyle}>{errors.password}</p>}
          </div>

          <div style={{ textAlign: "left", marginBottom: "10px" }}>
            <span
              style={forgotStyle}
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => buttonHover(e, true)}
            onMouseLeave={(e) => buttonHover(e, false)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
