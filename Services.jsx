import "./Services.css";

export default function Services() {
  const services = [
    { icon: "📷", title: "Camera", price: 29 },
    { icon: "💑", title: "Wedding Photography", price: 46 },
    { icon: "🐑", title: "Animal", price: 24 },
    { icon: "🖼️", title: "Portrait", price: 40 },
    { icon: "🗼", title: "Travel", price: 35 },
    { icon: "🎬", title: "Video Editing", price: 50 },
  ];

  return (
    <section className="services">
      <h2 className="services-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum exercitationem quae id dolorum debitis.
            </p>
            <p className="service-price">${service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
