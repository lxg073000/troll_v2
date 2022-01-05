import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import dashboard_icon from "../assets/dashboard_icon.svg";
import add_icon from "../assets/add_icon.svg";

import Avatar from "./Avatar/Avatar";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Sidebar() {
  const [show, setShow] = useState("");
  const { user } = useAuthContext();
  return (
    <div
      className={`sidebar " ${show ? "show" : ""}`}
      onClick={() => setShow(!show)}
    >
      <div className="sidebar-content">
        <div className="user">
          <Avatar photoURL={user.photoURL} />
          <p>{user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/dashboard">
                <img src={dashboard_icon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects/create">
                <img src={add_icon} alt="add projecticon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
