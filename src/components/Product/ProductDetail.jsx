import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import Swal from "sweetalert2";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  console.log(uid);

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Add cart  success",
    });
  };

  const showErrorAlert = (error) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });
  };

  //load product
  useEffect(() => {
    fetch(`https://b8a10-brandshop-server-side-ten.vercel.app/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product data: ", error));
  }, [id]);

  const handleAddCardwithDB = () => {
    
    const cartItem = {
      product: product,  
      uid: uid,  
    };
  
    fetch("https://b8a10-brandshop-server-side-ten.vercel.app/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem), 
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showSuccessAlert();
      })
      .catch((error) => {
        console.log(error);
        showErrorAlert(error.message);
      });
  };
  

  return (
    <div className="mt-10">
      <div className="  card card-side bg-base-100  flex flex-col md:flex-row gap-4 p-0 lg:p-8 ">
        <figure className="w-full lg:w-4/12">
          <img
            className="w-full mx-auto block"
            src={product.image}
            alt={product.name}
          />
        </figure>
        <div className="card-body w-full lg:w-8/12">
          <h2 className="card-title text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-2">
            Brand Name: {product.brandName}
          </p>
          <p className="text-gray-600 text-sm mb-2">Type: {product.type}</p>
          <p className="text-gray-600 text-sm mb-2">Price: ${product.price}</p>
          <p className="text-gray-600 text-sm mb-2">Rating: {product.rating}</p>
          <p className="text-gray-600 text-sm mb-2">
            {product.shortDescription}
          </p>
          <div className="card-actions justify-end">
            <button onClick={handleAddCardwithDB} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
