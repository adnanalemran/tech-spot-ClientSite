import React, { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const initialFormData = {
    image: "",
    name: "",
    brandName: "Apple",  
    type: "Phone",      
    price: "",
    shortDescription: "",
    rating: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const myData = {
      ...formData
    };

 
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your note has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData(initialFormData);  
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="w-full mx-auto max-w-4xl p-8 space-y-3 rounded-xl bg-gray-200 my-5 dark-bg-gray-900 dark:text-gray-200">
      <h1 className="text-2xl font-bold text-center">Add Product</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Image URL</label>
          <input
          required
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Brand Name</label>
          <select
          required
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          >
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            <option value="Google">Google</option>
            <option value="Intel">Intel</option>
            <option value="Microsoft">Microsoft</option>
          </select>
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          >
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="computer">Computer accessories</option>
            <option value="headphone">Headphone</option>
          </select>
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Price</label>
          <input
          required
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Short Description</label>
          <textarea
          required
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Rating</label>
          <input
          required
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn btn-primary"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
