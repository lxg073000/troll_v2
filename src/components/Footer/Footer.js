import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {" "}
      <ul className="footer-links">
        <li>
          <a
            className="nav-link btn"
            href="https://www.linkedin.com/in/lernardgrigsby/"
            rel="noreferrer"
            target="_blank"
          >
            <span className="fab fa-linkedin">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className="nav-link btn"
            href="https://github.com/lxg073000"
            rel="noreferrer"
            target="_blank"
          >
            <span className="fa-icon fab fa-github">Github</span>
          </a>
        </li>
        <li>
          <a
            className="nav-link btn"
            href="https://lernardgrigsby.github.io/"
            rel="noreferrer"
            target="_blank"
          >
            <span className="fas fa-user-circle">Portfolio</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
