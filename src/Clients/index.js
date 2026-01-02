import "./styles/index.css";

export default function Clients() {
  return (
    <section className="clients-page">

      {/* HERO */}
      <div className="clients-hero">
        <div className="clients-hero-overlay"></div>
        <div className="clients-hero-content">
          <h1>
            Trusted by <span>leading brands</span><br />
            worldwide
          </h1>
          <p>
            SUBVEN partners with organizations across industries to deliver
            impactful technology and talent solutions.
          </p>
        </div>
      </div>

      {/* LOGOS GRID */}
      <div className="clients-logos">
        {[
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Experian_logo.svg/1200px-Experian_logo.svg.png",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxu0RZZuQ9O68dbwryANdp7lFTBFCHKsOkA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTs5BfWIzjz9OlRIMQPWb3ZAyQImh9fZUqQ&s",
          "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlen_vDXAY6JiZJ7hNdfmrvV5TAw5T3JFPA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33QdOQ6YqqQIbMXnn3jw-Q4uS2p_MZEcK3w&s"
        ].map((logo, i) => (
          <div className="logo-card" key={i}>
            <img src={logo} alt="client" />
          </div>
        ))}
      </div>

      {/* STATS */}
      <div className="client-stats">
        <div className="stat-card">
          <h2>100+</h2>
          <p>Enterprise Clients</p>
        </div>

        <div className="stat-card">
          <h2>20+</h2>
          <p>Industries Served</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>Countries Reached</p>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="client-quote">
        <p>
          “SUBVEN’s expertise and commitment helped us modernize our data
          platforms and scale with confidence.”
        </p>
        <span>— Enterprise Client Partner</span>
      </div>

    </section>
  );
}
