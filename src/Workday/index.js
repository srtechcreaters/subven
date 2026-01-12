import { useState } from "react";
import "./styles/index.css";

export default function Workday() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="workday-accordion-section">

      <h2 className="gradient-title center">
        Workday Services
      </h2>

      <div className="workday-accordion">

        {/* 1 */}
        <div className="workday-item">
          <button onClick={() => toggle(1)} className="workday-title">
            Workday Financial Management
          </button>
          {open === 1 && (
            <div className="workday-content">
              <p>
                SUBVEN confidently deploys the full suite of Workday Financial
                Management products, focusing on success beyond go-live.
              </p>
              <p>
                True project success is measured by adoption, outcomes, and
                long-term value after deployment.
              </p>
            </div>
          )}
        </div>

        {/* 2 */}
        <div className="workday-item">
          <button onClick={() => toggle(2)} className="workday-title">
            Workday Analytics
          </button>
          {open === 2 && (
            <div className="workday-content">
              <h4>Full-Service Deployment</h4>
              <ul>
                <li>Rapid delivery for urgent analytics needs</li>
                <li>Complete knowledge transfer</li>
                <li>Ideal when internal teams are at capacity</li>
              </ul>

              <h4>Advisory Consulting with Co-Development</h4>
              <ul>
                <li>Collaborative analytics development</li>
                <li>Enable internal reporting teams</li>
                <li>Agile, data-driven approach</li>
              </ul>
            </div>
          )}
        </div>

        {/* 3 */}
        <div className="workday-item">
          <button onClick={() => toggle(3)} className="workday-title">
            Workday Support
          </button>
          {open === 3 && (
            <div className="workday-content">
              <p>
                SUBVEN provides ongoing Workday support with certified
                consultants focused exclusively on live customers.
              </p>
              <ul>
                <li>Busy season planning & compliance awareness</li>
                <li>Handling exception-driven processes</li>
                <li>Operational insights from Workday updates</li>
                <li>Command Center dashboards</li>
              </ul>
            </div>
          )}
        </div>

        {/* 4 */}
        <div className="workday-item">
          <button onClick={() => toggle(4)} className="workday-title">
            Workday Human Capital Management (HCM)
          </button>
          {open === 4 && (
            <div className="workday-content">
              <p>
                Each HCM deployment begins with your story and evolves your
                people strategies, processes, and experiences.
              </p>
              <p>
                Success is measured by adoption and long-term employee
                satisfaction.
              </p>
            </div>
          )}
        </div>

        {/* 5 */}
        <div className="workday-item">
          <button onClick={() => toggle(5)} className="workday-title">
            Workday Adaptive Planning
          </button>
          {open === 5 && (
            <div className="workday-content">
              <p>
                SUBVEN deploys Workday Adaptive Planning across Finance, HR,
                Sales, and Operations.
              </p>

              <h4>If using spreadsheets:</h4>
              <ul>
                <li>Scenario modeling & flexibility</li>
                <li>Version control challenges</li>
              </ul>

              <h4>If using planning software:</h4>
              <ul>
                <li>Complex data mapping</li>
                <li>Limited scenario flexibility</li>
              </ul>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
