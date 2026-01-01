export default function Hero(){
  return(
    <>
    <section className="hero-section fade-in">
      <div className="overlay"></div>
      <div className="pattern"></div>

      <div className="hero-content">
        <h1>
          Engage us to transform<br/>
          your <span>digital enterprise</span>
        </h1>

        <p>
          From structuring data to Cloud migration and visualization, 
          we understand the value of technology and data to your business
        </p>

        <div className="hero-btns">
          <button className="btn-blue">Hire Talent</button>
          <button className="btn-green">Search Jobs</button>
        </div>

        {/* TRUST BRANDS SECTION INSIDE HERO */}
      </div>
      
    </section>
    <div className="hero-brands">
          <h3>The world’s biggest<br/>brands trust us</h3>

          <div className="brands-logos">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Experian_logo.svg/1200px-Experian_logo.svg.png" alt="Experian"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxu0RZZuQ9O68dbwryANdp7lFTBFCHKsOkA&s" alt="Thermo Fisher"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTs5BfWIzjz9OlRIMQPWb3ZAyQImh9fZUqQ&s" alt="Deloitte"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" alt="Toyota"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlen_vDXAY6JiZJ7hNdfmrvV5TAw5T3JFPA&s" alt="CoreLogic"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33QdOQ6YqqQIbMXnn3jw-Q4uS2p_MZEcK3w&s" alt="EY"/>
          </div>
        </div>
    </>
  );
}
