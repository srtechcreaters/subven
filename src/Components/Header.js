import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/index.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drop, setDrop] = useState("");

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <nav className="header">

        {/* LEFT */}
        <Link className="logo-link" to="/">
          <div className="nav-left">
            <img src="images/sv_logo.png" className="logo" alt="logo" />
            <span className="brand">
              <span className="sub">SUB</span>
              <span className="ven">VEN</span>
            </span>
          </div>
        </Link>

        {/* CENTER MENU */}
        <ul className="nav-menu">

          <li className="dropdown">
            <NavLink className="nav-link" to="/services">
              Services ▾
            </NavLink>

            <div className="dropdown-menu">
              <NavLink className="dropdown-link" to="/oracle-services">
                Oracle Services
              </NavLink>
              <NavLink className="dropdown-link" to="/services/tech-consulting">
                Tech Consulting
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink className="nav-link" to="/clients">
              Clients
            </NavLink>
          </li>
          <li>

          <NavLink className="nav-link" to="/workday">
              Workday
            </NavLink>
          </li>

          <li className="dropdown">
            <NavLink className="nav-link" to="/">
              Talent ▾
            </NavLink>

            <div className="dropdown-menu">
              <NavLink className="dropdown-link" to="/">Why Subven</NavLink>
              <NavLink className="dropdown-link" to="/">Community</NavLink>
              <NavLink className="dropdown-link" to="/">Benefits</NavLink>
              <NavLink className="dropdown-link" to="/">Jobs</NavLink>
            </div>
          </li>

          <li className="dropdown">
            <NavLink className="nav-link" to="/company">
              Company ▾
            </NavLink>

            <div className="dropdown-menu">
              <NavLink className="dropdown-link" to="/about">About</NavLink>
              <NavLink className="dropdown-link" to="/careers">Careers</NavLink>
              <NavLink className="dropdown-link" to="/blog">Blog</NavLink>
            </div>
          </li>
        </ul>

        {/* RIGHT */}
        <div className="nav-right">
          <button className="btn-blue">Hire Talent</button>

          <div className="search-dropdown">
            <button className="btn-green">Search Jobs ▾</button>
            <div className="dropdown-menu right-menu">
              <NavLink className="dropdown-link" to="/jobs/us">United States</NavLink>
              <NavLink className="dropdown-link" to="/jobs/india">India</NavLink>
            </div>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(true)}>☰</div>
        </div>
      </nav>

      {/* OVERLAY */}
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <div className="close-btn" onClick={() => setMenuOpen(false)}>✕</div>

        <div onClick={() => setDrop(drop === "services" ? "" : "services")} className="mobile-item">
          <Link to="/services" className="logo-link">Services ▾</Link>
        </div>
        {drop === "services" && (
          <div className="mobile-dropdown">
            <NavLink className="mobile-link" to="/oracle-services">Oracle Services</NavLink>
            <NavLink className="mobile-link" to="/services/tech-consulting">Tech Consulting</NavLink>
          </div>
        )}

        <NavLink className="mobile-item mobile-link" to="/clients">Clients</NavLink>

        <div onClick={() => setDrop(drop === "talent" ? "" : "talent")} className="mobile-item">
          Talent ▾
        </div>
        {drop === "talent" && (
          <div className="mobile-dropdown">
            <NavLink className="mobile-link" to="/talent/why">Why Subven</NavLink>
            <NavLink className="mobile-link" to="/talent/community">Community</NavLink>
            <NavLink className="mobile-link" to="/jobs">Jobs</NavLink>
          </div>
        )}

        <div onClick={() => setDrop(drop === "company" ? "" : "company")} className="mobile-item">
          Company ▾
        </div>
        {drop === "company" && (
          <div className="mobile-dropdown">
            <NavLink className="mobile-link" to="/about">About</NavLink>
            <NavLink className="mobile-link" to="/careers">Careers</NavLink>
          </div>
        )}
      </div>
    </>
  );
}
