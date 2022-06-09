import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <NavLink
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          About
        </NavLink>

        <NavLink
          to="/login"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
