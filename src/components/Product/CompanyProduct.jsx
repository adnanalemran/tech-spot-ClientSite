import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const CompanyProduct = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const filteredProducts = products.filter(
    (product) => product.brandName === brandName
  );
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  console.log(uid);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data: ", error));
  }, []);

  return (
    <div className="px-2 lg:px-8 pt-16">
      <h1 className="text-2xl font-bold text-center">
        Product Data {brandName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="card glass rounded-lg shadow-lg">
            <figure className="p-4">
              <img className="w-56" src={product.image} alt={product.name} />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h2>
              <p>Brand Name: {product.brandName}</p>{" "}
              <p className="flex gap-2">
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="font-bold">{product.rating}</p>
              </p>
              <p>Type: {product.type}</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                BDT: {product.price}
              </p>
              <div className="card-actions gap-2 grid justify-center grid-cols-3">
                <Link to={`/product/${product._id}`}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</button>
                </Link>
                <Link to={`/product/update/${product._id}`}>
                  <button className="text-white bg-red-400  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
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
