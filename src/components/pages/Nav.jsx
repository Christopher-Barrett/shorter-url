import React from "react";

const Nav = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </ul>
      </div>

      <div>
        {" "}
        <ul>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
