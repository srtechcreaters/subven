import "./styles/index.css";

export default function NewsBanner() {
  return (
    <section className="news-banner">

      <div className="news-left">
        <div className="nav-left">
  <img src="images/sv_logo.png" className="logo" alt="logo" />
  <span className="brand">
    <span className="sub">SUB</span>
    <span className="ven">VEN</span>
  </span>
</div>

        <p>
          <strong>SUBVEN in the news:</strong> We launched an accelerator to empower women in STEM!
          Learn more about our new mentorship, professional development,
          and job placement opportunities.
        </p>
      </div>

      <button className="learn-btn">Learn More</button>
    </section>
  );
}
