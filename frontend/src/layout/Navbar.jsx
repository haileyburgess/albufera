import React from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <nav className="nav">
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
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {!token && (
          <li>
            <NavLink to="/login">Admin</NavLink>
          </li>
        )}
        <li className="insta">
          <NavLink
            to="https://www.instagram.com/albuferapaellaclub/"
            className="fa fa-instagram fa-2x"
          ></NavLink>
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
