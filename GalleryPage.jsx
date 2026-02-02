import React from "react";
import { useParams } from "react-router-dom";

const GalleryPage = () => {
  const { category } = useParams();

  const images = Array.from({ length: 36 }, (_, i) => 
    `https://source.unsplash.com/random/400x400?sig=${i}&${category}`
  );

  return (
    <div className="bg-black text-white min-h-screen px-10 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 capitalize">
        {category} Gallery
      </h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={img}
              alt={`${category}-${index}`}
              className="w-full h-40 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
