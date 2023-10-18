import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product data: ", error));
  }, [id]);

  return (
    <div className="mt-10">
      <div className="  card card-side bg-base-100  flex flex-col md:flex-row gap-4 p-0 lg:p-8 ">
        <figure className="w-full lg:w-4/12">
          <img className="w-full mx-auto block" src={product.image} alt={product.name} />
        </figure>
        <div className="card-body w-full lg:w-8/12">
          <h2 className="card-title text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-2">Brand Name: {product.brandName}</p>
          <p className="text-gray-600 text-sm mb-2">Type: {product.type}</p>
          <p className="text-gray-600 text-sm mb-2">Price: ${product.price}</p>
          <p className="text-gray-600 text-sm mb-2">Rating: {product.rating}</p>
          <p className="text-gray-600 text-sm mb-2">{product.shortDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
