import React, { useState } from "react";
import "./accout.css";
import Parareg from "../Parareg";
import Button from "../button";

const Register = ({ onPasswordChange }) => {
  const [pass, setPass] = useState("asdasd");

  console.log(pass);
  const handleRegister = () => {
    alert(pass);
  };
  return (
    <div className="foam-div">
      <div className="foamset">
        <h1 className="cen-div">
          <b>Register</b>
        </h1>
        <input
          className="set-input "
          type="Password"
          name="confirmPassword"
          value={pass}
          placeholder="Confirm Password"
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="cen-div signup-button-set">
          <b onClick={handleRegister}>Sign up</b>
        </button>
        <Parareg />

        <div className="parent">
          <hr className="child1" />
          <h4 className=" ">or</h4>
          <hr className="child1 " />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Register;
