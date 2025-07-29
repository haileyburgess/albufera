import { Outlet } from "react-router";

import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <header class="header">Albufera Paella Club</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
