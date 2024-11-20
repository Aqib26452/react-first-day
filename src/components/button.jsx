import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Button = () => {
  return (
    <>
      <button className="pos-set">
        <FaFacebook className="iconset" />
        <h2 className="font-set"> Login with facebook</h2>
      </button>
      <button className="googlelogin">
        <FcGoogle className="iconset" />

        <h2 className=""> Login with Google</h2>
      </button>
    </>
  );
};

export default Button;
