import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <h1 className="logo">Photosen</h1>

        <nav className="nav-links">
  <NavLink to="/" end>Home</NavLink>
  

  {/* Dropdown */}
  <div
    className="dropdown"
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => {
      setOpen(false);
      setSubOpen(false);
    }}
  >
    <NavLink to="/gralley1">
      Gallery <span className="arrow">▼</span>
    </NavLink>

    {open && (
      <ul className="dropdown-menu">
        <li><a href="#" onClick={(e)=>e.preventDefault()}>Nature</a></li>
        <li><a href="#" onClick={(e)=>e.preventDefault()}>Portrait</a></li>
        <li><a href="#" onClick={(e)=>e.preventDefault()}>People</a></li>
        <li><a href="#" onClick={(e)=>e.preventDefault()}>Architecture</a></li>
        <li><a href="#" onClick={(e)=>e.preventDefault()}>Animals</a></li>
        <li><a href="#" onClick={(e)=>e.preventDefault()}>Sports</a></li>
        <li><a href="#" onClick={(e)=>e.preventDefault()}>Travel</a></li>

        {/* Submenu */}
        <li
          className="submenu-parent"
          onMouseEnter={() => setSubOpen(true)}
          onMouseLeave={() => setSubOpen(false)}
        >
          <a href="#" onClick={(e)=>e.preventDefault()}>
            Sub Menu <span className="arrow">▶</span>
          </a>
          {subOpen && (
            <ul className="submenu">
              <li><a href="#" onClick={(e)=>e.preventDefault()}>Menu One</a></li>
              <li><a href="#" onClick={(e)=>e.preventDefault()}>Menu Two</a></li>
              <li><a href="#" onClick={(e)=>e.preventDefault()}>Menu Three</a></li>
            </ul>
          )}
        </li>
      </ul>
    )}
  </div>
  <NavLink to="/services">SERVICES</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/contact">Contact</NavLink>

  
</nav>

      </div>
    </header>
  );
}
