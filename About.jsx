import "./About.css"; // ملف الاستايل بتاع الصفحة

export default function About() {
  return (
    <div className="about">
      <h1 className="about-title">My Services</h1>

      {/* Section Mission */}
      <div className="mission-section">
        <img
  src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  alt="mission"
/>

        <div className="mission-text">
          <h2>My Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            vel tenetur explicabo necessitatibus, ad soluta consectetur illo qui
            voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            architecto excepturi aliquid minus nostrum dicta labore iusto.
          </p>
        </div>
      </div>

      {/* Section Team */}
      <h1 className="about-title">Our Team</h1>
      <div className="team-grid">
        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab
            quas facilis obcaecati non ea.
          </p>
          <div className="socials">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>

        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab
            quas facilis obcaecati non ea.
          </p>
          <div className="socials">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>

        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab
            quas facilis obcaecati non ea.
          </p>
          <div className="socials">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>

        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab
            quas facilis obcaecati non ea.
          </p>
          <div className="socials">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>

        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab
            quas facilis obcaecati non ea.
          </p>
          <div className="socials">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>

        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab
            quas facilis obcaecati non ea.
          </p>
          <div className="socials">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
