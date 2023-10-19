import Swal from "sweetalert2";
 
import { useLoaderData, useParams } from "react-router-dom";
const UpdateProduct = () => {
  const singleData = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      image: e.target.image.value,
      brandName: e.target.brandName.value,
      type: e.target.type.value,
      price: parseFloat(e.target.price.value),
      shortDescription: e.target.shortDescription.value,
      rating: parseFloat(e.target.rating.value),
    };
    console.log(formData);
    try {
      const response = await fetch(
        `http://localhost:5000/product/update/${singleData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Updated",
          text: "Your note has been updated  successfully.",
        });


      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "An error occurred while updating the note.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error,
      });
    }
  };

  return (
    <div className="w-full mx-auto max-w-4xl p-8 space-y-3 rounded-xl bg-gray-200 my-5 dark-bg-gray-900 dark:text-gray-200">
      <h1 className="text-2xl font-bold text-center">Update Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={singleData?.name}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={singleData?.image}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Brand Name</label>
          <select
            name="brandName"
            defaultValue={singleData?.brandName}
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
            defaultValue={singleData?.type}
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
            type="number"
            name="price"
            defaultValue={singleData?.price}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Short Description</label>
          <textarea
            name="shortDescription"
            defaultValue={singleData?.shortDescription}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Rating</label>
          <input
            type="number"
            name="rating"
            defaultValue={singleData?.rating}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn btn-primary"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
