import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Link from "./Link";
import logo from "./logo192.png";

function Nav() {
  return (
    <nav>
      <NavLink to={'/'}><img src={logo} alt="" className="logo" /></NavLink>
      {/* <input type="text" placeholder="Search" /> */}
      
      <div className="menu">
        <Link name="التسويق"></Link>
        <Link name="الاقتصاد"></Link>
        <Link name="مبادئ المحاسبة"></Link>
      </div>
    </nav>
  );
}

export default Nav;
