import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./styles/index.css";

export default function Header() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [drop,setDrop]=useState("");

  return (
<>
<nav className="header">

  {/* LEFT */}
  <div className="nav-left">
    <img src="images/sv_logo.png" className="logo" alt="logo" />
    <span className="brand">
      <span className="sub">SUB</span>
      <span className="ven">VEN</span>
    </span>
  </div>

  {/* CENTER MENU */}
  <ul className="nav-menu">

    {/* SERVICES */}
    <li className="dropdown">
      <NavLink className="nav-link" to="/services">
        Services ▾
      </NavLink>

      <div className="dropdown-menu">
        <NavLink className="dropdown-link" to="/services/talent-solutions">
          Talent Solutions
        </NavLink>

        <NavLink className="dropdown-link" to="/services/tech-consulting">
          Tech Consulting
        </NavLink>
      </div>
    </li>

    {/* CLIENTS */}
    <li>
      <NavLink className="nav-link" to="/clients">
        Clients
      </NavLink>
    </li>

    {/* TALENT */}
    <li className="dropdown">
      <NavLink className="nav-link" to="/talent">
        Talent ▾
      </NavLink>

      <div className="dropdown-menu">
        <NavLink className="dropdown-link" to="/talent/why">Why Subven</NavLink>
        <NavLink className="dropdown-link" to="/talent/community">Talent Community</NavLink>
        <NavLink className="dropdown-link" to="/talent/benefits">Benefits</NavLink>
        <NavLink className="dropdown-link" to="/jobs">Search Jobs</NavLink>
        <NavLink className="dropdown-link" to="/employee">Employee Portal</NavLink>
      </div>
    </li>

    {/* COMPANY */}
    <li className="dropdown">
      <NavLink className="nav-link" to="/company">
        Company ▾
      </NavLink>

      <div className="dropdown-menu">
        <NavLink className="dropdown-link" to="/about">About</NavLink>
        <NavLink className="dropdown-link" to="/careers">Careers</NavLink>
        <NavLink className="dropdown-link" to="/dei">DEI</NavLink>
        <NavLink className="dropdown-link" to="/blog">Blog</NavLink>
        <NavLink className="dropdown-link" to="/news">News</NavLink>
        <NavLink className="dropdown-link" to="/contact">Contact</NavLink>
      </div>
    </li>
  </ul>

  {/* RIGHT BUTTONS */}
  <div className="nav-right">
    <button className="btn-blue">Hire Talent</button>

    <div className="search-dropdown">
      <button className="btn-green">Search Jobs ▾</button>

      <div className="dropdown-menu right-menu">
        <NavLink className="dropdown-link" to="/jobs/us">United States</NavLink>
        <NavLink className="dropdown-link" to="/jobs/india">India</NavLink>
      </div>
    </div>

    <div className="hamburger" onClick={()=>setMenuOpen(true)}>☰</div>
  </div>
</nav>



{/* ================= MOBILE MENU ================= */}
<div className={`mobile-menu ${menuOpen?"open":""}`}>
  
  <div className="close-btn" onClick={()=>setMenuOpen(false)}>✕</div>

  {/* SERVICES */}
  <div onClick={()=>setDrop(drop==="services"?"":"services")} className="mobile-item">
    Services ▾
  </div>

  {drop==="services" && (
    <div className="mobile-dropdown">
      <NavLink className="mobile-link" to="/services/talent-solutions">
        Talent Solutions
      </NavLink>

      <NavLink className="mobile-link" to="/services/tech-consulting">
        Tech Consulting
      </NavLink>
    </div>
  )}

  {/* CLIENTS */}
  <NavLink className="mobile-item mobile-link" to="/clients">
    Clients
  </NavLink>

  {/* TALENT */}
  <div onClick={()=>setDrop(drop==="talent"?"":"talent")} className="mobile-item">
    Talent ▾
  </div>

  {drop==="talent" && (
    <div className="mobile-dropdown">
      <NavLink className="mobile-link" to="/talent/why">Why Subven</NavLink>
      <NavLink className="mobile-link" to="/talent/community">Community</NavLink>
      <NavLink className="mobile-link" to="/talent/benefits">Benefits</NavLink>
      <NavLink className="mobile-link" to="/jobs">Jobs</NavLink>
    </div>
  )}

  {/* COMPANY */}
  <div onClick={()=>setDrop(drop==="company"?"":"company")} className="mobile-item">
    Company ▾
  </div>

  {drop==="company" && (
    <div className="mobile-dropdown">
      <NavLink className="mobile-link" to="/about">About</NavLink>
      <NavLink className="mobile-link" to="/careers">Careers</NavLink>
      <NavLink className="mobile-link" to="/blog">Blog</NavLink>
    </div>
  )}

</div>

</>
  );
}
