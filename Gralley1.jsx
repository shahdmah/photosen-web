import { useState } from "react";
import "./Gralley1.css";

export default function Gralley1() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
    "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-page">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            onClick={() => setSelected(src)}
          />
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <img src={selected} alt="Selected" />
        </div>
      )}
    </div>
  );
}
