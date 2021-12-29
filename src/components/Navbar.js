import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import troll from "../assets/troll.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={troll} alt="troll logo" />
          <span>Troll</span>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}
