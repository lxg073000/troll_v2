import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <Link to="/">
            <span>Troll</span>
          </Link>
        </li>
        {!user && (
          <>
            <li>
              <Link className="nav-link btn" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link btn" to="/signup">
                Signup
              </Link>
            </li>
          </>
        )}
        {user && (
          <li>
            {isPending && (
              <button className="nav-link btn" disabled>
                logging out
              </button>
            )}
            {!isPending && (
              <button className="nav-link btn" onClick={logout}>
                Logout
              </button>
            )}
          </li>
        )}
      </ul>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
