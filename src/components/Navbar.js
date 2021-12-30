import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import troll from "../assets/troll.png";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={troll} alt="troll logo" />
          <span>Troll</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            {isPending && (
              <button className="btn" disabled>
                logging out
              </button>
            )}
            {!isPending && (
              <button className="btn" onClick={logout}>
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
