import { useState } from "react";
import "./styles/index.css";

export default function OracleServices() {
  const [active, setActive] = useState(0);

  const slides = [
    {
      title: "ORACLE FUSION CLOUD SERVICES",
      desc: "Modernize your business operations with Oracle Cloud for increased efficiency, flexibility and scalability.",
      img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
    },
    {
      title: "ORACLE SUBSCRIPTION BILLING",
      desc: "Increase recurring revenue by better managing the subscriber experience with Oracle Subscription Management for ERP.",
      img: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
    },
    {
      title: "PROJECT PORTFOLIO MANAGEMENT",
      desc: "We help migrate Oracle EBS & Hyperion workloads to cloud for improved performance and reliability.",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    }
  ];

  return (
    <section className="oracle-section">



      {/* ===== ORACLE FUSION AREAS ===== */}
      <div className="oracle-grid">

        <div className="oracle-box">
          <img src="https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg" alt="ERP" />
          <h3>ORACLE FUSION CLOUD FINANCIAL (ERP)</h3>
          <ul>
            <li>Financial Management</li>
            <li>Project Management</li>
            <li>Procurement</li>
            <li>Risk Management & Compliance</li>
          </ul>
        </div>

        <div className="oracle-box">
          <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" alt="SCM" />
          <h3>ORACLE FUSION CLOUD SCM</h3>
          <ul>
            <li>Supply Chain Planning</li>
            <li>Inventory</li>
            <li>Manufacturing</li>
            <li>Order Management</li>
            <li>Product Lifecycle Management</li>
          </ul>
        </div>

        <div className="oracle-box">
          <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg" alt="HCM" />
          <h3>ORACLE FUSION CLOUD HCM</h3>
          <ul>
            <li>Human Resources</li>
            <li>Talent Management</li>
            <li>Workforce Management</li>
            <li>Payroll</li>
            <li>HCM Analytics</li>
          </ul>
        </div>

      </div>

            {/* ===== CAROUSEL ===== */}
      <div
        className="oracle-slider"
        style={{ backgroundImage: `url(${slides[active].img})` }}
      >
        <div className="oracle-overlay"></div>

        <div className="oracle-card">
          <h2>{slides[active].title}</h2>
          <p>{slides[active].desc}</p>
        </div>

        {/* NAV */}
        <button className="arrow left" onClick={() => setActive((active + 2) % 3)}>‹</button>
        <button className="arrow right" onClick={() => setActive((active + 1) % 3)}>›</button>

        {/* DOTS */}
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={active === i ? "dot active" : "dot"}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
