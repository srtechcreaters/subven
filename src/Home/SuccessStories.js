import "./styles/index.css";

export default function SuccessStories() {

  const cards = [
    {
      brand: "CoreLogic",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      text: "CoreLogic moves its real estate analytics leadership to the Cloud"
    },
    {
      brand: "TAPFIN",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      text: "When Tapfin needed to hit its SLA for a large client, SubVen delivered"
    },
    {
      brand: "Deloitte",
      img: "https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg",
      text: "SubVen helped Deloitte build a Smart Factory of the Future"
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
