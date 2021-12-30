import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import dashboard_icon from "../assets/dashboard_icon.svg";
import add_icon from "../assets/add_icon.svg";

import Avatar from "./Avatar/Avatar";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Sidebar() {
  const { user } = useAuthContext();
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar photoURL={user.photoURL} />
          <p>{user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <img src={dashboard_icon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="project/create">
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
