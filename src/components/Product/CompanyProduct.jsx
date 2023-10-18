import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CompanyProduct = () => {
  const { brandName } = useParams();  

  const [products, setProducts] = useState([]);
  const filteredProducts = products.filter((product) => product.brandName === brandName);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data: ", error));
  }, []);

  return (
    <div className="px-2 lg:px-8 pt-16">
      <h1 className="text-2xl font-bold text-center">Product Data {brandName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="card glass rounded-lg shadow-lg">
            <figure className="p-4">
              <img className="w-56" src={product.image} alt={product.name} />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-bold">{product.name}</h2>
              <p>Brand Name: {product.brandName}</p>
              <p>Type: {product.type}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <div className="card-actions gap-2 grid justify-center grid-cols-3">
         
                <Link to={`/product/${product._id}`}>
                  <button className="btn btn-info w-16">Details</button>
                </Link>
                <Link to={`/product/update/${product._id}`}>
                  <button className="btn btn-success w-16">Update</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProduct;
