import React from 'react';

const UpdateProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;

    const updatedData = {
      image,
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
    };

    console.log('Updated Data:', updatedData);
  };

  return (
    <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-200 my-5 dark:bg-gray-900 dark:text-gray-200">
      <h1 className="text-2xl font-bold text-center">Update Product</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-400">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-400">Name</label>
          <input
            type="text"
            name="name"
            defaultValue="Product Name" // Set the default value here
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-400">Brand Name</label>
          <input
            type="text"
            name="brandName"
            defaultValue="Brand Name" // Set the default value here
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Type</label>
          <select
            name="type"
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          >
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="headphone">Headphone</option>
            {/* Add more types as needed */}
          </select>
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Price</label>
          <input
            type="number"
            name="price"
            defaultValue="100" // Set the default value here
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Short Description</label>
          <textarea
            name="shortDescription"
            defaultValue="Product description goes here" // Set the default value here
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Rating</label>
          <input
            type="number"
            name="rating"
            defaultValue="4" // Set the default value here
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
