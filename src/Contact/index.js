import "./styles/index.css";

export default function Contact() {
  return (
    <section className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-overlay"></div>
        <div className="contact-hero-content">
          <h1>
            Let’s <span>connect</span> & build<br /> something impactful
          </h1>
          <p>
            Reach out to SUBVEN for Oracle services, technology consulting,
            or talent solutions. Our experts are ready to help.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2 className="gradient-title">Contact Information</h2>

          <p>
            Whether you’re looking to modernize your Oracle applications,
            scale your cloud infrastructure, or build high-performing teams,
            SUBVEN is here to support your journey.
          </p>

          <div className="info-block">
            <h4>📍 Office</h4>
            <span>Hyderabad, India</span>
          </div>

          <div className="info-block">
            <h4>📧 Email</h4>
            <span>info@subven.us</span>
          </div>

          <div className="info-block">
            <h4>📞 Phone</h4>
            <span>+91 90000 00000</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-box">
          <h3>Send us a message</h3>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>

            <input type="text" placeholder="Subject" />

            <textarea placeholder="Tell us about your requirement"></textarea>

            <button type="submit">Submit Message</button>
          </form>
        </div>

      </div>

    </section>
  );
}
