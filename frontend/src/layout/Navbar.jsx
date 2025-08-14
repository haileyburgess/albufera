import React from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink id="brand" to="/">
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQs</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Get in touch</NavLink>
        </li>
        {!token && (
          <li>
            <NavLink to="/login">Admin Login</NavLink>
          </li>
        )}
        <li className="insta">
          <a
            href="https://www.instagram.com/albuferapaellaclub/"
            className="fa fa-instagram fa-2x"
          ></a>
        </li>
        {token && (
          <>
            <li>
              <button className="button" onClick={logout}>
                Log out
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
