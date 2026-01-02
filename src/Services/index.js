import "./styles/index.css";
import {
  FaUsers,
  FaCloud,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaDatabase
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="services-page">

      {/* HERO */}
      <div className="services-hero">
        <div className="services-overlay"></div>
        <div className="services-hero-content">
          <h1>
            Services that power <br />
            <span>digital enterprises</span>
          </h1>
          <p>
            SUBVEN delivers end-to-end technology and talent solutions
            designed to help businesses scale, innovate, and stay secure.
          </p>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        <div className="service-card card-1">
          <FaUsers className="service-icon" />
          <h3>Talent Solutions</h3>
          <p>
            On-demand skilled professionals, project teams, and managed
            services to support your business goals.
          </p>
        </div>

        <div className="service-card card-2">
          <FaCloud className="service-icon" />
          <h3>Cloud & Infrastructure</h3>
          <p>
            Secure and scalable cloud adoption across AWS, Azure, OCI,
            and hybrid environments.
          </p>
        </div>

        <div className="service-card card-3">
          <FaChartLine className="service-icon" />
          <h3>Data & Analytics</h3>
          <p>
            Turn data into insights with modern analytics, visualization,
            and data engineering solutions.
          </p>
        </div>

        <div className="service-card card-4">
          <FaRobot className="service-icon" />
          <h3>AI & Automation</h3>
          <p>
            Intelligent automation using AI, ML, and RPA to optimize
            operations and decision-making.
          </p>
        </div>

        <div className="service-card card-5">
          <FaDatabase className="service-icon" />
          <h3>Oracle Solutions</h3>
          <p>
            Enterprise-grade Oracle services including OCI, databases,
            integrations, and performance tuning.
          </p>
        </div>

        <div className="service-card card-6">
          <FaShieldAlt className="service-icon" />
          <h3>Cyber Security</h3>
          <p>
            Protect your digital assets with robust security strategies,
            compliance, and threat management.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="services-cta">
        <h2>Ready to transform your business?</h2>
        <button>Talk to Our Experts</button>
      </div>

    </section>
  );
}
