import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BrandSection = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full p-8 space-y-6 mt-24">
      <h2 className="text-4xl text-center font-bold">Our Popular Brands</h2>
      <hr className="my-5" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <Link to={`/companyProductView/${brand.name}`} key={index}>
         
            <div className=" card p-4 rounded-lg shadow-xl  ">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">
                {brand.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
