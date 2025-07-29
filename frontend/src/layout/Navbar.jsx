import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
      <nav class="navbar">
        <ul>
          <NavLink id="brand" to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/events">Events</NavLink>
          {token ? (
            <button onClick={logout}>Log out</button>
          ) : (
            <NavLink to="/login">Log in</NavLink>
          )}
        </ul>
      </nav>
  );
}
