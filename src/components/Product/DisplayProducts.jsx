import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://b8a10-brandshop-server-side-hllas1bzs-adnans-projects-98b0c3b9.vercel.app/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data: ", error));
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed the deletion
        fetch(`https://b8a10-brandshop-server-side-hllas1bzs-adnans-projects-98b0c3b9.vercel.app/product/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Filter out the deleted product from the products list
              setProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== _id)
              );
              Swal.fire(
                'Deleted!',
                'Product has been deleted.',
                'success'
              );
            }
          })
          .catch((error) => {
            Swal.fire(
              'Error!',
              'Error deleting the product: ' + error,
              'error'
            );
          });
      }
    });
  };
  

  return (
    <div className="px-2 lg:px-8 pt-16">
      <h1 className="text-2xl font-bold text-center">Product Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {products.map((product) => (
          <div key={product._id} className="card  rounded-lg shadow-lg  dark:bg-red-900 dark:text-gray-100">
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
                <button
                  className="btn btn-error w-16"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
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

export default DisplayProducts;
