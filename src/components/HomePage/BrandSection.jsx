import React, { useState, useEffect } from "react";

const BrandSection = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/brands.json")
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full p-8 space-y-6">
      <h2 className="text-4xl text-center font-bold">Our Popular Brands</h2>
      <hr className="my-5" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={brand.image}
              alt={brand.name}
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
