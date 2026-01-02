export default function ContactCompany() {
  return (
    <section className="company-section gradient-bg">
      <h2 className="center white-text">Let’s Build Together</h2>

      <form className="contact-box">
        <input placeholder="Your Name" />
        <input placeholder="Email Address" />
        <textarea placeholder="Tell us about your idea"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
}
