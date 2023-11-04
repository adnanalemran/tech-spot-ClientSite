import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  console.log(uid);

  useEffect(() => {
    fetch(`https://b8a10-brandshop-server-side-ten.vercel.app/cart`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching cart data: ", error));
  }, [uid]);

  

  const filteredProducts = products.filter((product) => product.uid === uid);

  const calculateTotal = () => {
    let total = 0;
    for (const product of filteredProducts) {
      total += parseFloat(product.product.price);  
    }
    return total.toFixed(2);  
  };


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
        fetch(`https://b8a10-brandshop-server-side-ten.vercel.app/cart/${_id}`, {
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
    <div>
      <div className="flex flex-col max-w-3xl mx-auto p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">
          Your Cart: {filteredProducts.length} items
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={product.product.image}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leadi sm:pr-8">
                        {product.product.name}
                      </h3>
                      <p className="text-sm dark:text-gray-400">
                        Type: {product.product.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        {product.product.price}Tk
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                    onClick={() => handleDelete(product._id)} 
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">{calculateTotal()}Tk</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
          >
            Back
            <Link to='/' className="sr-only sm:not-sr-only">to shop</Link>
          </button>
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
