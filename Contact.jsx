import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact</h2>

        <div className="contact-content">
          {/* Form */}
          <form className="contact-form">
            <div className="row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="row">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Subject" required />
            </div>
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          {/* Info */}
          <div className="contact-info">
            <h3>Address</h3>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>

            <h3>Phone</h3>
            <p>+1 232 3235 324</p>

            <h3>Email Address</h3>
            <p>youremail@domain.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
