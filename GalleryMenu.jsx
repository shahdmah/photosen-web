import { useState } from "react";

const GalleryMenu = () => {
  const [active, setActive] = useState("All");

  const categories = ["All", "Nature", "Wedding", "Events"];

  return (
    <div className="gallery-menu">
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default GalleryMenu;
