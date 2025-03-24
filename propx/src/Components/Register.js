import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "Yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", formData);
    navigate("/settings");
  };

  return (
    <div style={containerStyle}>
      <h2>Create your PopX account</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company name" value={formData.company} onChange={handleChange} />

        <label>Are you an Agency?</label>
        <div>
          <label><input type="radio" name="isAgency" value="Yes" checked={formData.isAgency === "Yes"} onChange={handleChange} /> Yes</label>
          <label><input type="radio" name="isAgency" value="No" checked={formData.isAgency === "No"} onChange={handleChange} /> No</label>
        </div>

        <button type="submit" style={buttonStyle}>Create Account</button>
      </form>
    </div>
  );
}

const containerStyle = { textAlign: "center", padding: "20px" };
const formStyle = { display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" };
const buttonStyle = { backgroundColor: "#6C4EF8", color: "#fff", padding: "10px 20px", borderRadius: "5px" };

export default Register;
