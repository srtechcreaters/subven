import "./styles/index.css";
import {
  FaChessKnight,
  FaChartLine,
  FaCloud,
  FaRobot,
  FaShieldAlt,
  FaRocket, 
} from "react-icons/fa";
import { SiOracle } from "react-icons/si";

export default function DataJourney() {

  const items = [
    {
      title: "Oracle Solutions",
      text: "Enterprise-grade Oracle solutions including Oracle Cloud Infrastructure, databases, integrations, and performance optimization",
      icon: <SiOracle />
    },
    {
      title: "Strategy & Management",
      text: "Seasoned management consultants, strategists and advisors across diverse industries including Financial, Health Care, Life Sciences, Hi-Tech and Automotive",
      icon: <FaChessKnight />
    },
    {
      title: "Data & Analytics",
      text: "Specialized data consultants managing the data lifecycle from inception to consumption",
      icon: <FaChartLine />
    },
    {
      title: "Cloud & Infrastructure",
      text: "Experienced infrastructure & multi cloud specialist empowering clients with their cloud adoption journey",
      icon: <FaCloud />
    },
    {
      title: "AI & Automation",
      text: "Helping enterprises adopt AI, ML, and automation to drive intelligent outcomes",
      icon: <FaRobot />
    },
    {
      title: "Cyber Security",
      text: "Protecting your mission-critical digital assets with enterprise grade cyber security",
      icon: <FaShieldAlt />
    },
    {
      title: "Digital Transformation",
      text: "Driving modernization, optimization and innovation for your business",
      icon: <FaRocket />
    }
  ];

  return (
    <section className="data-journey">

      <h2 className="gradient-title center">
        Value creation at every step of the data journey
      </h2>

      <p className="dj-sub-text">
        Our talent helps you build your digital enterprise
      </p>

      <div className="dj-grid">
        {items.map((item, i) => (
          <div className={`dj-card card-3`} key={i}>
            <div className="left-bar bar-gradient" />

            <div className="dj-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>

            <div className="dots-overlay" />
          </div>
        ))}
      </div>

    </section>
  );
}
