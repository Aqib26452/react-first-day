import React from "react";

import { Link } from "react-router-dom";
const Paras = () => {
  return (
    <div>
      <h5 className="cen-div">
        <Link to="/forget-password">Forget Password?</Link>

        <Link to="/register" className="colsetsignup">
          Signup
        </Link>
      </h5>
    </div>
  );
};

export default Paras;
