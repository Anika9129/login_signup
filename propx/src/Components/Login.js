import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "marry@gmail.com" && password === "password") {
      navigate("/settings");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Sign in to your PopX account</h2>
      
      <form onSubmit={handleLogin} style={formStyle}>
        <label>Email Address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
}

const containerStyle = { textAlign: "center", padding: "20px" };
const formStyle = { display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" };
const buttonStyle = { backgroundColor: "#6C4EF8", color: "#fff", padding: "10px 20px", borderRadius: "5px" };

export default Login;
