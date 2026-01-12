import "./styles/index.css";

export default function SuccessStories() {

  const cards = [
    {
      // brand: "CoreLogic",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      text: "SubVen drives Outcome based Manage services and KPI improvement for a manufacturing company"
    },
    {
      // brand: "TAPFIN",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      text: "SubVen helps large real estate clients migrate its enterprise analytics to cloud"
    },
    {
      // brand: "Deloitte",
      img: "https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg",
      text: "SubVen delivers successful Cloud transformation to a professional services company using Oracle fusion cloud"
    }
  ];

  return (
    <section className="stories-section">

      <h2 className="gradient-title center">
        Data experts that create competitive advantage
      </h2>

      <div className="stories-grid">
        {cards.map((c, i) => (
          <div className="story-card" key={i}>
            
            <div className="story-image">
              <img src={c.img} alt={c.brand} />
              <div className="brand-overlay">{c.brand}</div>
            </div>

            <div className="story-content">
              <p>{c.text}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
