export default function AboutCompany() {
  return (
    <section className="company-section white">
      <h2 className="gradient-title center">Who We Are</h2>

      <div className="about-grid">

        {/* CARD 1 */}
        <div className="about-card">
          <div className="about-img">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
              alt="Technology Driven"
            />
          </div>
          <h3>Technology Driven</h3>
          <p>
            We build secure, scalable and intelligent digital solutions
            across Cloud, Data, AI and Enterprise platforms.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="about-card">
          <div className="about-img">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
              alt="People First"
            />
          </div>
          <h3>People First</h3>
          <p>
            Our culture is built on collaboration, respect, and
            continuous learning.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="about-card">
          <div className="about-img">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="Enterprise Focused"
            />
          </div>
          <h3>Enterprise Focused</h3>
          <p>
            We partner with organizations to solve complex business
            challenges.
          </p>
        </div>

      </div>
    </section>
  );
}
