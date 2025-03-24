import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div   style={container}>
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button onClick={() => navigate("/register")} style={buttonStyle}>
        Create Account
      </button>
      <button onClick={() => navigate("/login")} style={secondaryButtonStyle}>
        Already Registered? Login
      </button>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#6C4EF8",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  margin: "10px",
  cursor: "pointer",
};

const secondaryButtonStyle = {
  backgroundColor: "#D6C5FF",
  color: "#6C4EF8",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};


const container = {
textAlign: "center",
 padding: "20px",
 position:"fixed",
 bottom:"0",
 left:"30%"


};

export default Welcome;
