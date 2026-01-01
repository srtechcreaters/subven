import "./styles/index.css";
import { FaUsers, FaUserFriends, FaGlobeAmericas, FaUserCog, FaCogs, FaHandsHelping } from "react-icons/fa";

export default function WorkWithUs() {
  return (
    <section className="work-section">

      <h2 className="gradient-title center">
        Work with us in ways that work best for you
      </h2>

      <div className="work-wrapper">

        {/* LEFT SIDE */}
        <div className="work-side left-side">

          <div className="work-item">
            <span>Individual Talent</span>
            <FaUsers className="work-icon"/>
          </div>

          <div className="work-item">
            <span>Project Teams</span>
            <FaUserFriends className="work-icon"/>
          </div>

          <div className="work-item">
            <span>Managed Teams</span>
            <FaGlobeAmericas className="work-icon"/>
          </div>

          <h3 className="center-title">Talent Solutions</h3>
        </div>

        {/* CENTER CIRCLE */}
        <div className="center-circle">
          <div className="circle-grid"></div>
          <h1>SUBVEN</h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="work-side right-side">

          <div className="work-item">
            <FaUserCog className="work-icon"/>
            <span>Advisory</span>
          </div>

          <div className="work-item">
            <FaCogs className="work-icon"/>
            <span>Implementation</span>
          </div>

          <div className="work-item">
            <FaHandsHelping className="work-icon"/>
            <span>Support</span>
          </div>

          <h3 className="center-title">Tech Consulting</h3>
        </div>

      </div>
    </section>
  );
}
