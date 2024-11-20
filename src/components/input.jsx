import React, { useState } from "react";
import "./account/Register.jsx";

const Inputs = ({ onEmailChange, onPasswordChange }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmailChange = (event) => {
    const newValue = event.target.value;
    setEmail(newValue);
    // if (onEmailChange) {
    //   onEmailChange(newValue);
    // }
    console.log("Email entered:", newValue);
  };
  // yah portion krnA A
  const handlePasswordChange = (e) => {
    const newValu = e.target.value;
    setPass(newValu);
    // if (onPasswordChange) {
    //   onPasswordChange(newValu);
    // }
    console.log("Password entered:", newValu);
  };
  return (
    <div>
      <input
        className="cen-div set-input"
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className="cen-div set-input"
        type="password"
        placeholder="Enter Password"
        value={pass}
        onChange={handlePasswordChange}
      />
    </div>
  );
};

export default Inputs;
