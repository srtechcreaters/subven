import { Link } from "react-router-dom";
import "./styles/index.css";

export default function OracleHero() {
  return (
    <section className="oracle-hero-v2">

      {/* BACKGROUND LAYERS */}
      <div className="oracle-bg-gradient"></div>
      <div className="oracle-bg-pattern"></div>

      <div className="oracle-hero-content">

        {/* LEFT CONTENT */}
        <div className="oracle-hero-text">
          <h1>
            Oracle <span>Fusion Cloud</span><br />
            Services for Modern Enterprises
          </h1>

          <p>
            Modernize your business operations with Oracle Fusion Cloud.
            SUBVEN helps organizations achieve greater efficiency,
            flexibility, and scalability across ERP, SCM, and HCM.
          </p>

          <div className="oracle-hero-actions">
            <button className="btn-blue">Explore Oracle Services</button>
            <Link to="/contact"><button className="btn-outline">Talk to Oracle Experts</button></Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="oracle-hero-visual">
          <div className="cloud-shape"></div>
          <div className="data-line line-1"></div>
          <div className="data-line line-2"></div>
          <div className="data-line line-3"></div>
        </div>

      </div>

    </section>
  );
}
