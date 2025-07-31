import { NavLink } from "react-router";

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
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Get in touch</NavLink>
        </li>

        {token ? (
          <>
            <li>
              <NavLink to="/admin">Admin Portal</NavLink>
            </li>
            <li>
              <button className="button" onClick={logout}>
                Log out
              </button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
