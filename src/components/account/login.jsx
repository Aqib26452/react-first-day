import React from "react";
import "./accout.css";

import Input from "../input";

import Button from "../button";
import Paras from "../Paras";

const Login = () => {
  return (
    <div className="foam-div">
      <div className="foamset">
        <h1 className="cen-div">
          <b>Login</b>
        </h1>
        <Input />
        <Paras />

        <button className="cen-div login-button-set">
          <b>Login</b>
        </button>

        <div class="parent">
          <hr class="child1" />
          <h4 class=" ">or</h4>
          <hr class="child1 " />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Login;
