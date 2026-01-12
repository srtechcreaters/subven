import { useState } from "react";
import "./styles/index.css";

export default function Privacy() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="privacy-page">

      {/* HERO */}
      <div className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p>
          SUBVEN, Inc. respects your privacy and is committed to protecting
          the information we learn about you during your visit to our website.
        </p>
      </div>

      {/* CONTENT */}
      <div className="privacy-container">

        {/* SECTION 1 */}
        <div className="privacy-item">
          <button onClick={() => toggle(1)} className="privacy-title">
            Your Personal Information
          </button>
          {open === 1 && (
            <div className="privacy-content">
              <p>
                Personal information is required by SUBVEN, Inc. to enable
                responses to your inquiries. This may include:
              </p>
              <ul>
                <li>First and Last Name</li>
                <li>Company / Institution</li>
                <li>Physical Address</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Miscellaneous Information</li>
              </ul>

              <p className="address">
                <strong>Entity collecting personal information:</strong><br />
                SUBVEN, Inc.<br />
                100 Spectrum Center Drive<br />
                Suite 890<br />
                Irvine, CA 92618
              </p>
            </div>
          )}
        </div>

        {/* SECTION 2 */}
        <div className="privacy-item">
          <button onClick={() => toggle(2)} className="privacy-title">
            Information Sharing ▾
          </button>
          {open === 2 && (
            <div className="privacy-content">
              <p>
                SUBVEN, Inc. will not rent, sell, share, or publish personal
                information supplied by you.
              </p>

              <p>
                Your information is kept for contact purposes only. You may
                request removal of your information at any time by contacting:
              </p>

              <p>
                📧 info@subven.com<br />
                ☎ +1 (877) 529-4361
              </p>

              <p>
                Some information may remain in archived records after removal,
                though it will not be active in our systems.
              </p>
            </div>
          )}
        </div>

        {/* SECTION 3 */}
        <div className="privacy-item">
          <button onClick={() => toggle(3)} className="privacy-title">
            Confidentiality and Security ▾
          </button>
          {open === 3 && (
            <div className="privacy-content">
              <p>
                SUBVEN, Inc. has implemented reasonable measures to protect
                personal information, including:
              </p>
              <ul>
                <li>Security policies</li>
                <li>Internal procedures</li>
                <li>Technical access controls</li>
              </ul>
            </div>
          )}
        </div>

        {/* SECTION 4 */}
        <div className="privacy-item">
          <button onClick={() => toggle(4)} className="privacy-title">
            Other Information We Collect ▾
          </button>
          {open === 4 && (
            <div className="privacy-content">
              <p>
                Our servers automatically collect operational data for
                statistical analysis, auditing, and technical performance.
              </p>

              <p>
                This may include IP addresses, browser type, network routing
                information, date, and time of access.
              </p>

              <p>
                Tracking technologies may be used to identify unique visits.
                This data is used internally by SUBVEN and its hosting partners
                only.
              </p>
            </div>
          )}
        </div>

        {/* SECTION 5 */}
        <div className="privacy-item">
          <button onClick={() => toggle(5)} className="privacy-title">
            Policy Changes and Updates ▾
          </button>
          {open === 5 && (
            <div className="privacy-content">
              <p>
                SUBVEN, Inc. may update this policy when new features or services
                impact data collection or usage.
              </p>

              <p>
                Changes will be posted prominently on the website.
              </p>

              <p>
                By using this website, you consent to this Privacy Policy and
                the processing of personal information as described.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* FOOTER CTA */}
      <div className="privacy-cta">
        <h3>Engage SUBVEN</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us.
        </p>
      </div>

    </section>
  );
}
