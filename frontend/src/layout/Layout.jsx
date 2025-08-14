import React from 'react';
import { Outlet } from "react-router-dom";



import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <header className="header">Albufera Paella Club</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
