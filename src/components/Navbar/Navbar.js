import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <div className="navbar">
      <header className="head">
        <Link className="title" to="/">
          Quick-List
        </Link>
        <li>
          <Link className="li" to="/about">
            about
          </Link>
        </li>
      </header>
      <div>{children}</div>
    </div>
  );
}
