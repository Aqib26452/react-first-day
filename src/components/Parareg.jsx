import React from "react";

import { Link } from "react-router-dom";

const Parareg = () => {
  return (
    <>
      <div className="cen-div">
        <h5>Don't have an account?</h5>
        <Link to="/Login">
          <b>Login</b>
        </Link>
      </div>
    </>
  );
};

export default Parareg;
