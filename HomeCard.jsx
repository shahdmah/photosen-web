import { Link } from "react-router-dom";

export default function HomeCard({ title, img }) {
  return (
    <figure className="home-card">
      <img src={img} alt={title} loading="lazy" />
      <figcaption className="overlay">
        <h3>{title}</h3>
        <Link to="/gallery" className="btn-outline">MORE PHOTOS</Link>
      </figcaption>
    </figure>
  );
}
