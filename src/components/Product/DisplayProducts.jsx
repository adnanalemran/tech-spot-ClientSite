import React, { useState, useEffect } from "react";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data: ", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Product Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="card glass rounded-lg shadow-lg"
          >
            <figure className="p-4">
              <img src={product.image} alt={product.name} />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-bold">{product.name}</h2>
              <p>Brand Name: {product.brandName}</p>
              <p>Type: {product.type}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <div className="card-actions flex justify-end space-x-2 mt-4">
                <button className="btn btn-primary">Details</button>
                <button className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProducts;
